//
//  ViewController.swift
//  FlashMaster
//
//  Created by PeratX on 2019/12/5.
//  Copyright © 2019 iTX Technologies. All rights reserved.
//

import UIKit
import WebKit

class ViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        let webView = WKWebView.init(frame: CGRect(x: 0, y: 0, width: UIScreen.main.bounds.width, height: UIScreen.main.bounds.height))
        self.view.addSubview(webView)
        let url = Bundle.main.url(forResource: "index", withExtension: "html", subdirectory: "Resource")!
        webView.loadFileURL(url, allowingReadAccessTo: url)
        let request = URLRequest(url: url)
        webView.load(request)
    }
}
