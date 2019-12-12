//
//  ViewController.swift
//  FlashMaster
//
//  Copyright © 2019 iTX Technologies
//
//  Licensed under the Apache License, Version 2.0 (the "License");
//  you may not use this file except in compliance with the License.
//  You may obtain a copy of the License at
//
//  http://www.apache.org/licenses/LICENSE-2.0
//
//  Unless required by applicable law or agreed to in writing, software
//  distributed under the License is distributed on an "AS IS" BASIS,
//  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//  See the License for the specific language governing permissions and
//  limitations under the License.
//

import UIKit
import WebKit

class ViewController: UIViewController, WKNavigationDelegate, WKUIDelegate {
    @IBOutlet weak var webViewContainer: UIView!
    @IBOutlet weak var launchView: UIView!
    
    var webView: WKWebView!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        let source: String = "var meta = document.createElement('meta');" +
            "meta.name = 'viewport';" +
            "meta.content = 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no';" +
            "var head = document.getElementsByTagName('head')[0];" + "head.appendChild(meta);";

        let script: WKUserScript = WKUserScript(source: source, injectionTime: .atDocumentEnd, forMainFrameOnly: true)
        let userContentController: WKUserContentController = WKUserContentController()
        let conf = WKWebViewConfiguration()
        conf.userContentController = userContentController
        userContentController.addUserScript(script)

        self.webView = WKWebView.init(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height), configuration: conf)
        self.webView.scrollView.bounces = false
        self.webView.translatesAutoresizingMaskIntoConstraints = false
        self.webView.navigationDelegate = self
        self.webView.uiDelegate = self
        self.webViewContainer.addSubview(self.webView)
        
        self.webView.topAnchor.constraint(equalTo: webViewContainer.topAnchor).isActive = true
        self.webView.rightAnchor.constraint(equalTo: webViewContainer.rightAnchor).isActive = true
        self.webView.leftAnchor.constraint(equalTo: webViewContainer.leftAnchor).isActive = true
        self.webView.bottomAnchor.constraint(equalTo: webViewContainer.bottomAnchor).isActive = true
        
        self.webView.addObserver(self, forKeyPath: "URL", options: .new, context: nil)
        self.webView.addObserver(self, forKeyPath: "estimatedProgress", options: .new, context: nil)
        
        let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Resource")!
        self.webView.loadFileURL(url, allowingReadAccessTo: url)
        let request = URLRequest(url: url)
        self.webView.load(request)
    }
    
    override func observeValue(forKeyPath keyPath: String?, of object: Any?, change: [NSKeyValueChangeKey : Any]?, context: UnsafeMutableRawPointer?) {
        if let url = self.webView.url, url.absoluteString.contains("index.html#/about") {
            let version:String = Bundle.main.object(forInfoDictionaryKey: "CFBundleShortVersionString") as! String
            let build:String = Bundle.main.object(forInfoDictionaryKey: kCFBundleVersionKey as String) as! String
            let ac = UIAlertController(title: NSLocalizedString("aboutTitle", comment: ""),
                                       message: NSLocalizedString("aboutContent", comment: "")
                                        .replacingOccurrences(of: "ver", with: version + " (" + build + ")"), preferredStyle: .alert)
            ac.addAction(UIAlertAction(title: "GitHub", style: .default,
                                       handler: {_ in UIApplication.shared.openURL(URL(string: "https://github.com/iTXTech/FlashMasteriOS")!)}))
            ac.addAction(UIAlertAction(title: NSLocalizedString("ok", comment: ""), style: .default))
            self.present(ac, animated: true)
        }
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
