(function(e){function t(t){for(var r,n,c=t[0],i=t[1],l=t[2],u=0,A=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&A.push(o[n][0]),o[n]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(A.length)A.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],r=!0,n=1;n<a.length;n++){var c=a[n];0!==o[c]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-3266e23d":"ab06387d","chunk-a9d4696a":"f0baf461","chunk-13c1d99a":"e8e0791e","chunk-d7a472ce":"646f3dbf","chunk-2d0c87cd":"accd745b","chunk-2d225f66":"b29b4647","chunk-e55c1466":"658a7f69"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-a9d4696a":1,"chunk-13c1d99a":1,"chunk-d7a472ce":1,"chunk-e55c1466":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({}[e]||e)+"."+{"chunk-3266e23d":"31d6cfe0","chunk-a9d4696a":"c32afa83","chunk-13c1d99a":"826c66af","chunk-d7a472ce":"e815eb53","chunk-2d0c87cd":"31d6cfe0","chunk-2d225f66":"31d6cfe0","chunk-e55c1466":"3d72d63f"}[e]+".css",o=i.p+r,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var l=s[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var A=document.getElementsByTagName("style");for(c=0;c<A.length;c++){l=A[c],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete n[e],d.parentNode.removeChild(d),a(s)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=c(e);var A=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;A.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",A.name="ChunkLoadError",A.type=r,A.request=n,a[1](A)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var A=0;A<l.length;A++)t(l[A]);var d=u;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("8a23"),n=a.n(r);n.a},4360:function(e,t,a){"use strict";a("a9e3");var r=a("53ca"),n=function(){return localStorage.server||"https://fd.sakuracg.com"},o=function(e){localStorage.server=e},s=function(){return localStorage.autoTranslation||"1"},c=function(e){localStorage.autoTranslation=e?"1":"0"},i=function(){isNaN(Number(localStorage.statDecodeId))&&(localStorage.statDecodeId="0"),localStorage.statDecodeId=String(Number(localStorage.statDecodeId)+1)},l=function(){return localStorage.statDecodeId||0},u=function(){isNaN(Number(localStorage.statSearchPn))&&(localStorage.statSearchPn="0"),localStorage.statSearchPn=String(Number(localStorage.statSearchPn)+1)},A=function(){return localStorage.statSearchPn||0},d=function(){isNaN(Number(localStorage.statSearchId))&&(localStorage.statSearchId="0"),localStorage.statSearchId=String(Number(localStorage.statSearchId)+1)},h=function(){return localStorage.statSearchId||0},f=function(){localStorage.statDecodeId="0",localStorage.statSearchId="0",localStorage.statSearchPn="0"},g=function(){return void 0!==Object(r["a"])("7d3afd1\n")?"7d3afd1\n":"DEBUG"};t["a"]={getServerAddress:n,setServerAddress:o,autoTranslation:s,setAutoTranslation:c,statDecodeIdInc:i,statDecodeId:l,statSearchPnInc:u,statSearchPn:A,statSearchIdInc:d,statSearchId:h,resetStat:f,getProjectVersion:g}},"52da":function(e,t,a){"use strict";var r=a("2b0e");t["a"]=new r["a"]},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("6d93");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{directives:[{name:"touch",rawName:"v-touch",value:{right:function(){return e.drawer(!0)},left:function(){return e.drawer(!1)}},expression:"{right: () => drawer(true), left: () => drawer(false)}"}],attrs:{id:"app"}},[a("Drawer"),a("v-content",[a("router-view")],1),a("v-dialog",{attrs:{"hide-overlay":"",persistent:"",width:"300"},model:{value:e.loading,callback:function(t){e.loading=t},expression:"loading"}},[a("v-card",{attrs:{color:"primary",dark:""}},[a("v-card-text",[e._v(" "+e._s(e.$t("loading"))+" "),a("v-progress-linear",{staticClass:"mb-0",attrs:{indeterminate:"",color:"white"}})],1)],1)],1),a("v-snackbar",{attrs:{timeout:e.snackbar.timeout},model:{value:e.snackbar.show,callback:function(t){e.$set(e.snackbar,"show",t)},expression:"snackbar.show"}},[e._v(" "+e._s(e.snackbar.text)+" "),a("v-btn",{attrs:{text:"",color:"blue"},on:{click:function(t){e.snackbar.show=!1}}},[e._v(e._s(e.$t("close")))])],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-navigation-drawer",{attrs:{clipped:e.$vuetify.breakpoint.lgAndUp,app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[e._v("FlashMaster")]),r("v-list-item-subtitle",[e._v(e._s(this.ver))]),r("v-list-item-subtitle",[e._v("by PeratX@iTXTech.org")])],1)],1),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item-group",{attrs:{color:"primary"}},e._l(e.items,(function(t,a){return r("v-list-item",{key:a,attrs:{to:t.path}},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1),r("v-footer",{staticClass:"font-weight-medium",attrs:{absolute:""}},[r("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[r("h6",[e._v("© 2019-2020 iTX Technologies")])])],1)],1),r("v-app-bar",{attrs:{"clipped-left":e.$vuetify.breakpoint.lgAndUp,app:"",color:"primary",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"FlashMaster Logo",src:a("cf05"),contain:"",transition:"scale-transition",width:"40"}}),r("v-toolbar-title",{staticClass:"title"},[e._v(" FlashMaster ")]),r("v-spacer"),r("v-menu",{attrs:{"offset-y":""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[r("v-btn",e._g({attrs:{text:"",dark:""}},a),[r("v-icon",[e._v("mdi-earth")])],1)]}}])},[r("v-list",e._l(e.langs,(function(t,a){return r("v-list-item",{key:a,on:{click:function(a){return e.changeLanguage(t.code)}}},[r("v-list-item-title",[e._v(e._s(t.name))])],1)})),1)],1)],1)],1)},c=[],i=a("4360"),l=a("52da"),u={props:{source:String},data:function(){return{dialog:!1,drawer:!1}},mounted:function(){var e=this;l["a"].$on("drawer",(function(t){e.drawer=t}))},computed:{ver:function(){return this.$t("version",[i["a"].getProjectVersion()])},langs:function(){var e=[];for(var t in this.$i18n.messages)e.push({name:this.$i18n.messages[t].lang,code:t});return e},items:function(){return[{icon:"mdi-adjust",text:this.$t("nav.decodePartNumber"),path:"/decode"},{icon:"mdi-magnify",text:this.$t("nav.searchPartNumber"),path:"/searchPn"},{icon:"mdi-flash",text:this.$t("nav.searchFlashId"),path:"/searchId"},{icon:"mdi-settings",text:this.$t("nav.settings"),path:"/settings"},{icon:"mdi-information",text:this.$t("nav.about"),path:"/about"}]}},methods:{changeLanguage:function(e){this.$i18n.locale=e,this.$vuetify.lang.current=e,localStorage.lang=e}}},A=u,d=a("2877"),h=a("6544"),f=a.n(h),g=a("40dc"),b=a("5bc1"),v=a("8336"),p=a("62ad"),m=a("a523"),I=a("ce7e"),C=a("553a"),k=a("132d"),y=a("adda"),S=a("8860"),F=a("da13"),w=a("5d23"),P=a("1baa"),B=a("34c3"),Q=a("e449"),E=a("f774"),D=a("2fa4"),M=a("2a7f"),N=Object(d["a"])(A,s,c,!1,null,null,null),x=N.exports;f()(N,{VAppBar:g["a"],VAppBarNavIcon:b["a"],VBtn:v["a"],VCol:p["a"],VContainer:m["a"],VDivider:I["a"],VFooter:C["a"],VIcon:k["a"],VImg:y["a"],VList:S["a"],VListItem:F["a"],VListItemContent:w["a"],VListItemGroup:P["a"],VListItemIcon:B["a"],VListItemSubtitle:w["b"],VListItemTitle:w["c"],VMenu:Q["a"],VNavigationDrawer:E["a"],VSpacer:D["a"],VToolbarTitle:M["a"]});var j={data:function(){return{snackbar:{timeout:1e3,show:!1,text:""},loading:!1}},components:{Drawer:x},methods:{drawer:function(e){var t=this.$router.currentRoute.path;"/searchId"!==t&&"/searchPn"!==t&&l["a"].$emit("drawer",e)}},watch:{$route:function(e,t){e.meta.title?document.title="FlashMaster - "+this.$t(e.meta.title):document.title="iTXTech FlashMaster"}},mounted:function(){var e=this;l["a"].$on("snackbar",(function(t){e.snackbar=t})),l["a"].$on("loading",(function(t){e.loading=t}))}},T=j,V=(a("034f"),a("7496")),L=a("b0af"),G=a("99d9"),X=a("a75b"),O=a("169a"),K=a("8e36"),U=a("2db4"),Y=Object(d["a"])(T,n,o,!1,null,null,null),W=Y.exports;f()(Y,{VApp:V["a"],VBtn:v["a"],VCard:L["a"],VCardText:G["b"],VContent:X["a"],VDialog:O["a"],VProgressLinear:K["a"],VSnackbar:U["a"]});var H=a("f309"),R=a("a18c"),z=a("a925"),q=a("4eb5"),Z=a.n(q),_=a("5025"),J=a.n(_),$=a("da5b"),ee=a.n($),te=a("c3f0");r["a"].use(H["a"],{directives:{Touch:te["a"]}}),r["a"].use(z["a"]),r["a"].use(Z.a),Z.a.config.autoSetContainer=!0,r["a"].config.productionTip=!1;var ae=new z["a"]({locale:localStorage.lang||"chs",messages:{chs:a("79b9"),eng:a("c1ef")}}),re=new H["a"]({lang:{locales:{chs:J.a,eng:ee.a},current:localStorage.lang||"chs"},theme:{dark:!0,themes:{dark:{primary:"#1e88e5",secondary:"#005cb2",accent:"#6ab7ff",error:"#b71c1c"}}}});new r["a"]({i18n:ae,router:R["a"],vuetify:re,render:function(e){return e(W)}}).$mount("#app")},"79b9":function(e,t){e.exports={lang:"简体中文",alert:{missingPartNumber:"请输入料号",fetchFailed:"获取失败：{0}",missingFlashId:"请输入闪存ID",fetchServerListFailed:"服务器列表获取失败：{0}"},nav:{decodePartNumber:"料号查询",searchPartNumber:"料号搜索",searchFlashId:"闪存ID查询",settings:"设置",about:"关于"},settings:{server:"服务器",serverAddr:"服务器地址",translation:"自动翻译",serverInfo:"服务器信息",fdServerInfo:"iTXTech FlashDetector 服务器信息",info:"FlashDetector 数据库版本：{0}<br/>数据库生成时间：{1}<br/>收录 {2} 闪存料号<br/>收录 {3} 闪存ID<br/>收录 {4} 美光 FBGA 码<br/>收录的控制器：<br/>{5}"},support:{alipay:"支持作者 - 支付宝（推荐）",wechat:"支持作者 - 微信",alipayUrl:"打开支付宝",saveQrCode:"保存二维码"},statistic:{title:"统计",reset:"重置",resetInfo:"统计数据已重置。",content:"共查询料号 {0} 次。<br/>共搜索料号 {1} 个。<br/>共搜索闪存ID {2} 个。"},version:"版本：{0}",loading:"加载中",unknown:"未知",query:"查询料号",search:"搜索料号",searchId:"搜索闪存ID",partNumber:"料号",partNumberOrFlashId:"料号或闪存ID",vendor:"厂商",type:"类型",density:"容量",deviceWidth:"位宽",processNode:"制程",cellLevel:"单元",generation:"代",voltage:"电压",package:"封装",sync:"同步",async:"异步",ce:"片选",ch:"通道",die:"Die",rb:"R/B",extraInfo:"更多信息",controllers:"控制器",comment:"注释",name:"名称",value:"值",copy:"复制",copySucc:"复制成功。",copyFail:"复制失败。",close:"关闭",flashIds:"闪存ID",flashId:"闪存ID",action:"操作",remark:"备注",pageSize:"页大小",blocks:"块",pagesPerBlock:"页/块",description:"描述",urls:"链接",copyManually:"请手动复制",about:'<a href="https://github.com/iTXTech/FlashMaster" target="_blank">iTXTech FlashMaster</a><br/>使用 <a href="https://vuejs.org" target="_blank">Vue.js</a> 和 <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a> 构建<br/>本程序遵循 Apache License 2.0 开源<br/><br/>主要维护者：<br/><a href="https://peratx.net" target="_blank">PeratX</a><br/><br/><a href="https://market.m.taobao.com/app/idleFish-F2e/IdleFishWeexPersonalPage/PersonalHome?ut_sk=1.WmC0tf46/fADAD7YJeN2DyOW_12431167_1573698250610.QRCode.mypage.894797966.894797966&userid=894797966&wh_weex=true&forceFlush=1" target="_blank">去作者的闲鱼主页看看</a><br/><br/>Copyright © 2019-2020 <a href="https://itxtech.org" target="_blank">iTX Technologies</a>'}},"8a23":function(e,t,a){},a18c:function(e,t,a){"use strict";a("d3b7");var r=a("2b0e"),n=a("8c4f");r["a"].use(n["a"]);var o=[{path:"/",redirect:"/decode"},{path:"/decode",component:function(){return Promise.all([a.e("chunk-a9d4696a"),a.e("chunk-d7a472ce"),a.e("chunk-e55c1466")]).then(a.bind(null,"2a1a"))},meta:{title:"nav.decodePartNumber"}},{path:"/settings",component:function(){return Promise.all([a.e("chunk-a9d4696a"),a.e("chunk-13c1d99a")]).then(a.bind(null,"26d3"))},meta:{title:"nav.settings"}},{path:"/searchPn",component:function(){return Promise.all([a.e("chunk-a9d4696a"),a.e("chunk-d7a472ce"),a.e("chunk-2d0c87cd")]).then(a.bind(null,"54a9"))},meta:{title:"nav.searchPartNumber"}},{path:"/searchId",component:function(){return Promise.all([a.e("chunk-a9d4696a"),a.e("chunk-d7a472ce"),a.e("chunk-2d225f66")]).then(a.bind(null,"e742"))},meta:{title:"nav.searchFlashId"}},{path:"/about",component:function(){return a.e("chunk-3266e23d").then(a.bind(null,"f820"))},meta:{title:"nav.about"}}],s=new n["a"]({mode:"hash",base:"",scrollBehavior:function(){return{y:0}},routes:o});t["a"]=s},c1ef:function(e,t){e.exports={lang:"English",alert:{missingPartNumber:"Please Input Part Number",fetchFailed:"Fetch Failed: {0}",missingFlashId:"Please Input Flash Id",fetchServerListFailed:"Fetch Server List Failed: {0}"},nav:{decodePartNumber:"Decode Part Number",searchPartNumber:"Search Part Number",searchFlashId:"Search Flash Id",settings:"Settings",about:"About"},settings:{server:"Server",serverAddr:"Server Address",translation:"Auto Translation",serverInfo:"Server Information",fdServerInfo:"iTXTech FlashDetector Server Info",info:"FlashDetector FDB Version: {0}<br/>FDB Generation Time: {1}<br/>Include {2} Part Numbers<br/>Include {3} Flash Ids<br/>Include {4} Micron FBGA Codes<br/>Supported Controllers:<br/>{5}"},support:{alipay:"Support Us - Alipay",wechat:"Support Us - WeChat",alipayUrl:"Open Alipay",saveQrCode:"Save QR Code"},statistic:{title:"Statistic",reset:"Reset",resetInfo:"Statistic data have reseted.",content:"{0} Part Numbers have been decoded.<br/>{1} Part Numbers have been searched.<br/>{2} Flash Ids have been searched."},version:"Version: {0}",loading:"Loading",unknown:"Unknown",query:"Decode PN",search:"Search PN",searchId:"Search Id",partNumber:"Part Number",partNumberOrFlashId:"Part Number or Flash Id",vendor:"Vendor",type:"Type",density:"Density",deviceWidth:"Device Width",processNode:"Process Node",cellLevel:"Cell Level",generation:"Generation",voltage:"Voltage",package:"Package",sync:"Sync",async:"Async",ce:"CE Pin",ch:"Channel",die:"Die",rb:"R/B",extraInfo:"Extra Info",controllers:"Controllers",comment:"Comment",name:"Name",value:"Value",copy:"Copy",copySucc:"Copy successfully.",copyFail:"Copy failed.",close:"Close",flashIds:"Flash Ids",flashId:"Flash Id",action:"Action",remark:"Remark",pageSize:"Page Size",blocks:"Blocks",pagesPerBlock:"Pages/Block",description:"Description",urls:"URLs",copyManually:"Please copy manually",about:'<a href="https://github.com/iTXTech/FlashMaster" target="_blank">iTXTech FlashMaster</a><br/>Built with <a href="https://vuejs.org" target="_blank">Vue.js</a> and <a href="https://vuetifyjs.com/" target="_blank">Vuetify</a><br/>This program is licensed under Apache License 2.0<br/><br/>Maintainers:<br/><a href="https://peratx.net" target="_blank">PeratX</a><br/><br/>Copyright © 2019-2020 <a href="https://itxtech.org" target="_blank">iTX Technologies</a>'}},cf05:function(e,t){e.exports="data:image/png;base64,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"}});