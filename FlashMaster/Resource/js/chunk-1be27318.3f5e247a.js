(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1be27318"],{"0e8f":function(t,e,r){"use strict";r("20f6");var a=r("e8f2");e["a"]=Object(a["a"])("flex")},"297c":function(t,e,r){"use strict";r("a9e3");var a=r("2b0e"),i=(r("c7cd"),r("5530")),s=r("ade3"),n=(r("6ece"),r("0789")),o=r("a9ad"),c=r("fe6c"),l=r("a452"),d=r("7560"),u=r("80d2"),h=r("58df"),f=Object(h["a"])(o["a"],Object(c["b"])(["absolute","fixed","top","bottom"]),l["a"],d["a"]),g=f.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(u["g"])(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(u["g"])(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t,e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return t={opacity:e},Object(s["a"])(t,this.isReversed?"right":"left",Object(u["g"])(this.normalizedValue,"%")),Object(s["a"])(t,"width",Object(u["g"])(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return Object(i["a"])({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?n["c"]:n["d"]},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(u["g"])(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var t=Object(u["r"])(this,"default",{value:this.internalLazyValue});return t?this.$createElement("div",{staticClass:"v-progress-linear__content"},t):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(s["a"])({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect(),r=e.width;this.internalValue=t.offsetX/r*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){var e={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(u["g"])(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return t("div",e,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),v=g;e["a"]=a["a"].extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(v,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},"615b":function(t,e,r){},"6ece":function(t,e,r){},"99d9":function(t,e,r){"use strict";r.d(e,"a",(function(){return s})),r.d(e,"b",(function(){return o})),r.d(e,"c",(function(){return c}));var a=r("b0af"),i=r("80d2"),s=Object(i["h"])("v-card__actions"),n=Object(i["h"])("v-card__subtitle"),o=Object(i["h"])("v-card__text"),c=Object(i["h"])("v-card__title");a["a"]},a722:function(t,e,r){"use strict";r("20f6");var a=r("e8f2");e["a"]=Object(a["a"])("layout")},b0af:function(t,e,r){"use strict";r("0481"),r("4069"),r("a9e3");var a=r("5530"),i=(r("615b"),r("10d2")),s=r("297c"),n=r("1c87"),o=r("58df");e["a"]=Object(o["a"])(s["a"],n["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(a["a"])(Object(a["a"])({"v-card":!0},n["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(a["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=s["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,a=e.data;return a.style=this.styles,this.isClickable&&(a.attrs=a.attrs||{},a.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,a),[this.genProgress(),this.$slots.default])}})},cdc7:function(t,e,r){t.exports=r.p+"img/alipay.01cc12bf.jpg"},f820:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-title",[t._v(t._s(t.$t("nav.about")))]),a("v-card-text",[a("p",{domProps:{innerHTML:t._s(t.$t("about"))}})])],1)],1),a("v-flex",{attrs:{lg3:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-title",[t._v(t._s(t.$t("support.alipay")))]),a("v-card-text",[a("v-img",{attrs:{src:r("cdc7")}})],1),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",href:"https://qr.alipay.com/FKX04751EZDP0SQ0BOT137",target:"_blank",text:""}},[t._v(" "+t._s(t.$t("support.alipayUrl"))+" ")]),a("v-btn",{attrs:{color:"primary",text:"",href:r("cdc7"),download:"alipay.jpg"}},[t._v(" "+t._s(t.$t("support.saveQrCode"))+" ")])],1)],1)],1)],1)],1)},i=[],s=r("2877"),n=r("6544"),o=r.n(n),c=r("8336"),l=r("b0af"),d=r("99d9"),u=r("a523"),h=r("0e8f"),f=r("adda"),g=r("a722"),v={},p=Object(s["a"])(v,a,i,!1,null,null,null);e["default"]=p.exports;o()(p,{VBtn:c["a"],VCard:l["a"],VCardActions:d["a"],VCardText:d["b"],VCardTitle:d["c"],VContainer:u["a"],VFlex:h["a"],VImg:f["a"],VLayout:g["a"]})}}]);