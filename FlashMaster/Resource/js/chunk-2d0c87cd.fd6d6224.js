(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c87cd"],{"54a9":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-flex",{attrs:{lg12:""}},[a("v-card",{staticClass:"fm-bg"},[a("v-app-bar",{attrs:{flat:"",dense:"",color:"transparent"}},[a("v-text-field",{ref:"pnInput",staticClass:"pn",attrs:{flat:"",solo:"",clearable:"","prepend-icon":"mdi-magnify",placeholder:t.$t("partNumber"),"hide-details":"",loading:t.loading,"background-color":"transparent"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.partNumber,callback:function(e){t.partNumber=e},expression:"partNumber"}}),a("v-btn",{attrs:{icon:""},on:{click:t.search}},[a("v-icon",[t._v("mdi-arrow-right")])],1)],1),a("v-divider"),a("v-card-text",[a("v-data-table",{staticClass:"elevation-1 fm-bg",attrs:{headers:t.pnHeaders,items:t.pns,"disable-sort":"","no-data-text":"","mobile-breakpoint":NaN,"items-per-page":15,page:t.page,"footer-props":{showFirstLastPage:!0,itemsPerPageOptions:[15,30,50,100]}},on:{"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"item.action",fn:function(e){var n=e.item;return[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.decodeFlashId(n)}}},[a("v-icon",[t._v("mdi-arrow-top-left-thick")])],1)]}}])})],1)],1)],1)],1)},r=[],i=(a("99af"),a("caad"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("841c"),a("1276"),a("4360")),s=a("a18c"),o=a("52da"),c={data:function(){return{snackbar:{timeout:1e3,show:!1,text:""},partNumber:"",pns:[],page:1,loading:!1}},computed:{pnHeaders:function(){return[{text:this.$t("vendor"),value:"vendor",align:"left"},{text:this.$t("partNumber"),value:"pn",align:"left"},{text:this.$t("remark"),value:"remark",align:"left"},{text:this.$t("action"),value:"action"}]}},methods:{showLoading:function(t){this.loading=!1!==t&&"primary"},search:function(){var t=this;null!=this.partNumber&&""!==this.partNumber?(i["a"].isAutoHideSoftKeyboard()&&setTimeout((function(){t.$refs.pnInput.blur()})),this.partNumber=i["a"].partNumberFormat(this.partNumber),this.$route.query.pn!==this.partNumber&&s["a"].push({path:"/searchPn",query:{pn:this.partNumber}}),this.page=1,this.showLoading(!0),fetch("".concat(i["a"].getServerAddress(),"/searchPn?lang=").concat(i["a"].getLang(),"&pn=").concat(this.partNumber)).then((function(t){return t.json()})).then((function(e){for(var a in t.pns=[],e.data){var n=String(e.data[a]).split(" ");t.pns.push({vendor:n[0],pn:n[1],remark:n[2]})}t.showLoading(!1),i["a"].statSearchPnInc()})).catch((function(e){o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])}),t.showLoading(!1)}))):o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("alert.missingPartNumber")})},decodeFlashId:function(t){s["a"].push({path:"/decode",query:{pn:t.pn}})}},created:function(){var t=this;Object.keys(this.$route.query).includes("pn")?(this.partNumber=this.$route.query.pn,this.search()):setTimeout((function(){t.$refs.pnInput.$refs.input.focus()}))}},u=c,p=a("2877"),d=a("6544"),l=a.n(d),h=a("40dc"),f=a("8336"),m=a("b0af"),b=a("99d9"),g=a("a523"),v=a("8fea"),k=a("ce7e"),x=a("0e8f"),N=a("132d"),w=a("8654"),$=Object(p["a"])(u,n,r,!1,null,null,null);e["default"]=$.exports;l()($,{VAppBar:h["a"],VBtn:f["a"],VCard:m["a"],VCardText:b["b"],VContainer:g["a"],VDataTable:v["a"],VDivider:k["a"],VFlex:x["a"],VIcon:N["a"],VTextField:w["a"]})}}]);