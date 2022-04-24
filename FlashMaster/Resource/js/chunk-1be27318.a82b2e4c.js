(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1be27318"],{"0e8f":function(e,t,r){"use strict";r("20f6");var a=r("e8f2");t["a"]=Object(a["a"])("flex")},"297c":function(e,t,r){"use strict";r("a9e3");var a=r("2b0e"),i=r("5530"),s=r("ade3"),n=(r("c7cd"),r("6ece"),r("0789")),o=r("90a2"),c=r("a9ad"),l=r("fe6c"),d=r("a452"),u=r("7560"),h=r("80d2"),v=r("58df"),f=Object(v["a"])(c["a"],Object(l["b"])(["absolute","fixed","top","bottom"]),d["a"],u["a"]),g=f.extend({name:"v-progress-linear",directives:{intersect:o["a"]},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(h["h"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(h["h"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var e,t=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return e={opacity:t},Object(s["a"])(e,this.isReversed?"right":"left",Object(h["h"])(this.normalizedValue,"%")),Object(s["a"])(e,"width",Object(h["h"])(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")),e},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["c"]:n["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=Object(h["h"])(this.normalizedBuffer,"%")),e}},methods:{genContent:function(){var e=Object(h["s"])(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners:function(){var e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar:function(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},e,!0)}))},onClick:function(e){if(this.reactive){var t=this.$el.getBoundingClientRect(),r=t.width;this.internalValue=e.offsetX/r*100}},onObserve:function(e,t,r){this.isVisible=r},normalize:function(e){return e<0?0:e>100?100:parseFloat(e)}},render:function(e){var t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?Object(h["h"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=g;t["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"615b":function(e,t,r){},"6ece":function(e,t,r){},"99d9":function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c}));var a=r("b0af"),i=r("80d2"),s=Object(i["i"])("v-card__actions"),n=Object(i["i"])("v-card__subtitle"),o=Object(i["i"])("v-card__text"),c=Object(i["i"])("v-card__title");a["a"]},a722:function(e,t,r){"use strict";r("20f6");var a=r("e8f2");t["a"]=Object(a["a"])("layout")},b0af:function(e,t,r){"use strict";var a=r("5530"),i=(r("a9e3"),r("0481"),r("4069"),r("615b"),r("10d2")),s=r("297c"),n=r("1c87"),o=r("58df");t["a"]=Object(o["a"])(s["a"],n["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var e=Object(a["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(e.background='url("'.concat(this.img,'") center center / cover no-repeat')),e}},methods:{genProgress:function(){var e=s["a"].options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render:function(e){var t=this.generateRouteLink(),r=t.tag,a=t.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),e(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},cdc7:function(e,t,r){e.exports=r.p+"img/alipay.01cc12bf.jpg"},f820:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-card-title",[e._v(e._s(e.$t("nav.about")))]),a("v-card-text",[a("p",{domProps:{innerHTML:e._s(e.$t("about",[e.client]))}})])],1)],1),a("v-flex",{directives:[{name:"show",rawName:"v-show",value:e.showSponsor,expression:"showSponsor"}],attrs:{lg3:"",sm12:"",xs12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-card-title",[e._v(e._s(e.$t("support.alipay")))]),a("v-card-text",[a("v-img",{attrs:{src:r("cdc7")}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",href:"https://qr.alipay.com/FKX04751EZDP0SQ0BOT137",target:"_blank",text:""}},[e._v(" "+e._s(e.$t("support.alipayUrl"))+" ")]),a("v-btn",{attrs:{color:"accent",text:"",href:r("cdc7"),download:"alipay.jpg"}},[e._v(" "+e._s(e.$t("support.saveQrCode"))+" ")])],1)],1)],1)],1)],1)},i=[],s=(r("ac1f"),r("466d"),r("00b4"),r("5319"),r("a434"),r("99af"),r("b0c0"),r("caad"),r("2532"),{methods:{getBrowserInfo:function(){var e,t=navigator.userAgent,r=t.match(/(flashmasterios|flashmasterandroid|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*([.\d]+)/i)||[];return/trident/i.test(r[1])?(e=/\brv[ :]+(\d+)/g.exec(t)||[],{name:"IE",version:e[1]||""}):"Chrome"===r[1]&&(e=t.match(/\b(OPR|Edge)\/([.\d]+)/i),null!=e)?{name:e[1].replace("OPR","Opera"),version:e[2]}:(r=r[2]?[r[1],r[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/([.\d]+)/i))&&r.splice(1,1,e[1]),{name:r[0],version:r[1]})}},computed:{client:function(){var e=this.getBrowserInfo();return"".concat(e.name," ").concat(e.version)},showSponsor:function(){return!navigator.userAgent.includes("NoSponsor")}}}),n=s,o=r("2877"),c=r("6544"),l=r.n(c),d=r("8336"),u=r("b0af"),h=r("99d9"),v=r("a523"),f=r("0e8f"),g=r("adda"),p=r("a722"),m=Object(o["a"])(n,a,i,!1,null,null,null);t["default"]=m.exports;l()(m,{VBtn:d["a"],VCard:u["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VContainer:v["a"],VFlex:f["a"],VImg:g["a"],VLayout:p["a"]})}}]);