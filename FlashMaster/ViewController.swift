//
//  ViewController.swift
//  FlashMaster
//
//  Copyright © 2019-2021 iTX Technologies
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

import UIKit
import WebKit

fileprivate final class InputAccessoryHackHelper: NSObject {
    @objc var inputAccessoryView: AnyObject? { return nil }
}

extension WKWebView {
    func removeInputAccessory() {
        guard let target = scrollView.subviews.first(where: {
            String(describing: type(of: $0)).hasPrefix("WKContent")
        }), let superclass = target.superclass else {
            return
        }
        
        let noInputAccessoryViewClassName = "\(superclass)_NoInputAccessoryView"
        var newClass: AnyClass? = NSClassFromString(noInputAccessoryViewClassName)
        
        if newClass == nil, let targetClass = object_getClass(target), let classNameCString = noInputAccessoryViewClassName.cString(using: .ascii) {
            newClass = objc_allocateClassPair(targetClass, classNameCString, 0)
            
            if let newClass = newClass {
                objc_registerClassPair(newClass)
            }
        }
        
        guard let noInputAccessoryClass = newClass, let originalMethod = class_getInstanceMethod(InputAccessoryHackHelper.self, #selector(getter: InputAccessoryHackHelper.inputAccessoryView)) else {
            return
        }
        class_addMethod(noInputAccessoryClass.self, #selector(getter: InputAccessoryHackHelper.inputAccessoryView), method_getImplementation(originalMethod), method_getTypeEncoding(originalMethod))
        object_setClass(target, noInputAccessoryClass)
    }
}

class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    @IBOutlet weak var webViewContainer: UIView!
    @IBOutlet weak var launchView: UIView!
    
    var webView: WKWebView!
    var lastUrl: String = ""
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let source: String = "var meta = document.createElement('meta');" +
            "meta.name = 'viewport';" +
            "meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';" +
            "var head = document.getElementsByTagName('head')[0];" + "head.appendChild(meta);"
        
        let script: WKUserScript = WKUserScript(source: source, injectionTime: .atDocumentEnd, forMainFrameOnly: true)
        let userContentController: WKUserContentController = WKUserContentController()
        let conf = WKWebViewConfiguration()
        conf.userContentController = userContentController
        userContentController.addUserScript(script)
        
        webView = WKWebView.init(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height), configuration: conf)
        webView.scrollView.bounces = false
        webView.translatesAutoresizingMaskIntoConstraints = false
        webView.navigationDelegate = self
        webView.uiDelegate = self
        webView.customUserAgent = "iTXTech FlashMasteriOS/" + getVersion() + "-" + getRevision()
        webViewContainer.addSubview(webView)
        
        webView.topAnchor.constraint(equalTo: webViewContainer.topAnchor).isActive = true
        webView.rightAnchor.constraint(equalTo: webViewContainer.rightAnchor).isActive = true
        webView.leftAnchor.constraint(equalTo: webViewContainer.leftAnchor).isActive = true
        webView.bottomAnchor.constraint(equalTo: webViewContainer.bottomAnchor).isActive = true
        
        webView.addObserver(self, forKeyPath: "URL", options: .new, context: nil)
        webView.addObserver(self, forKeyPath: "estimatedProgress", options: .new, context: nil)
        
        webView.removeInputAccessory()
        
        let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Resource")!
        webView.loadFileURL(url, allowingReadAccessTo: url)
        let request = URLRequest(url: url)
        webView.load(request)
    }
    
    func getVersion() -> String{
        let version:String = Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as! String
        let build:String = Bundle.main.object(forInfoDictionaryKey: kCFBundleVersionKey as String) as! String
        return version + " (" + build + ")"
    }
    
    func getRevision() -> String{
        return Bundle.main.object(forInfoDictionaryKey: "REVISION") as! String
    }
    
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if let url = webView.url, url.absoluteString != lastUrl,
            url.absoluteString.contains("index.html#/about"), webView.estimatedProgress == 1.0 {
            let ac = UIAlertController(title: NSLocalizedString("aboutTitle", comment: ""),
                                       message: NSLocalizedString("aboutContent", comment: "")
                                        .replacingOccurrences(of: "ver", with: getVersion())
                                        .replacingOccurrences(of: "rev", with: getRevision()), preferredStyle: .alert)
            ac.addAction(UIAlertAction(title: "GitHub", style: .default,
                                       handler: {_ in UIApplication.shared.openURL(URL(string: "https://github.com/iTXTech/FlashMasteriOS")!)}))
            ac.addAction(UIAlertAction(title: NSLocalizedString("ok", comment: ""), style: .default))
            present(ac, animated: true)
        }
        lastUrl = webView.url?.absoluteString ?? ""
    }
    
    func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
        if navigationAction.request.url!.absoluteString.contains(".jpg") {
            decisionHandler(.cancel)
            URLSession.shared.dataTask(with: navigationAction.request.url!,
                                       completionHandler: {data, response, error in
                                        guard let data = data, error == nil else { return }
                                        DispatchQueue.main.async() {
                                            UIImageWriteToSavedPhotosAlbum(UIImage(data: data)!, self, #selector(self.image(_:didFinishSavingWithError:contextInfo:)), nil)
                                        }
            }).resume()
        } else {
            decisionHandler(.allow)
        }
    }
    
    @objc func image(_ image: UIImage, didFinishSavingWithError error: Error?, contextInfo: UnsafeRawPointer) {
        var ac: UIAlertController
        if let error = error {
            ac = UIAlertController(title: NSLocalizedString("imageSaveFailed", comment: ""), message: error.localizedDescription, preferredStyle: .alert)
        } else {
            ac = UIAlertController(title: NSLocalizedString("imageSavedTitle", comment: ""), message: NSLocalizedString("imageSaved", comment: ""), preferredStyle: .alert)
        }
        ac.addAction(UIAlertAction(title: NSLocalizedString("ok", comment: ""), style: .default))
        present(ac, animated: true)
    }
    
    func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!){
        webView.evaluateJavaScript("document.body.style.webkitTouchCallout='none';")
        DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
            UIView.transition(with: self.webViewContainer, duration: 0.5, options: .transitionCrossDissolve, animations: {
                self.webViewContainer.isHidden = false
            })
            self.launchView.isHidden = true
        }
    }
    
    func webView(_ webView: WKWebView, createWebViewWith configuration: WKWebViewConfiguration,
                 for navigationAction: WKNavigationAction, windowFeatures: WKWindowFeatures) -> WKWebView? {
        if navigationAction.targetFrame == nil, let url = navigationAction.request.url {
            UIApplication.shared.openURL(url)
        }
        return nil
    }
}
