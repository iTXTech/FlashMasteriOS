(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3289"],{"26d3":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{attrs:{"grid-list-xl":"",fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{lg4:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-title",[t._v(t._s(t.$t("settings.server")))]),a("v-card-text",[a("v-combobox",{attrs:{items:t.items,label:t.$t("settings.serverAddr"),"return-object":!1},on:{input:t.changeServer},model:{value:t.server,callback:function(e){t.server=e},expression:"server"}})],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.serverInfo}},[t._v(t._s(t.$t("settings.serverInfo")))])],1)],1)],1),a("v-flex",{attrs:{lg3:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-title",[t._v(t._s(t.$t("customization.title")))]),a("v-card-text",[a("v-select",{attrs:{items:t.themes,"return-object":!1,label:t.$t("customization.theme")},on:{change:t.changeTheme},model:{value:t.currentTheme,callback:function(e){t.currentTheme=e},expression:"currentTheme"}}),a("v-checkbox",{attrs:{label:t.$t("customization.autoHideSoftKeyboard")},on:{change:t.togHideKeyboard},model:{value:t.hideKeyboard,callback:function(e){t.hideKeyboard=e},expression:"hideKeyboard"}})],1),a("v-card-actions")],1)],1),a("v-flex",{attrs:{lg3:"",sm12:"",xs12:""}},[a("v-card",[a("v-card-title",[t._v(t._s(t.$t("statistic.title")))]),a("v-card-text",{domProps:{innerHTML:t._s(t.statContent)}}),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"primary"},on:{click:t.resetStat}},[t._v(t._s(t.$t("statistic.reset")))])],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog.show,callback:function(e){t.$set(t.dialog,"show",e)},expression:"dialog.show"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.$t("settings.fdServerInfo")))]),a("v-card-text",{domProps:{innerHTML:t._s(t.dialog.text)}}),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog.show=!1}}},[t._v(t._s(t.$t("close")))])],1)],1)],1)],1)},s=[],n=(a("d3b7"),a("ac1f"),a("5319"),a("4360")),o=a("52da"),i={computed:{items:function(){var t=[];if(this.servers!==[])for(var e in this.servers)t.push({value:this.servers[e],text:e});return t},transStat:function(){return this.updateStat()},themes:function(){return[{text:this.$t("customization.darkTheme"),value:"0"},{text:this.$t("customization.lightTheme"),value:"1"},{text:this.$t("customization.systemTheme"),value:"2"}]}},data:function(){return{servers:[],server:n["a"].getServerAddress(),dialog:{show:!1,text:""},statContent:"",hideKeyboard:!1,currentTheme:"0"}},created:function(){var t=this;this.currentTheme=n["a"].getTheme(),this.hideKeyboard=n["a"].isAutoHideSoftKeyboard(),this.statContent=this.updateStat(),fetch("https://raw.githubusercontent.com/PeratX/FlashMaster/master/servers.json").then((function(t){return t.json()})).then((function(e){t.servers=e})).catch((function(e){o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchServerListFailed",[e])})}))},methods:{changeTheme:function(t){n["a"].setTheme(t),o["a"].$emit("theme")},togHideKeyboard:function(t){n["a"].setAutoHideSoftKeyboard(t)},changeServer:function(t){n["a"].setServerAddress(t)},serverInfo:function(){var t=this;fetch(n["a"].getServerAddress()+"/info").then((function(t){return t.json()})).then((function(e){t.dialog={show:!0,text:t.$t("settings.info",[e.ver,e.info.fdb.time,e.info.flash_cnt,e.info.id_cnt,e.info.mdb_cnt,String(e.info.fdb.controllers).replace(/,/g,", ")])}})).catch((function(e){o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:t.$t("alert.fetchFailed",[e])})}))},resetStat:function(){n["a"].resetStat(),this.statContent=this.updateStat(),o["a"].$emit("snackbar",{timeout:3e3,show:!0,text:this.$t("statistic.resetInfo")})},updateStat:function(){return this.$t("statistic.content",[n["a"].statDecodeId(),n["a"].statSearchPn(),n["a"].statSearchId()])}},watch:{transStat:function(t){this.statContent=t}}},c=i,d=a("2877"),l=a("6544"),h=a.n(l),u=a("8336"),v=a("b0af"),f=a("99d9"),m=a("ac7c"),b=a("2b5d"),x=a("a523"),g=a("169a"),p=a("0e8f"),S=a("a722"),$=a("b974"),_=a("2fa4"),w=Object(d["a"])(c,r,s,!1,null,null,null);e["default"]=w.exports;h()(w,{VBtn:u["a"],VCard:v["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCheckbox:m["a"],VCombobox:b["a"],VContainer:x["a"],VDialog:g["a"],VFlex:p["a"],VLayout:S["a"],VSelect:$["a"],VSpacer:_["a"]})}}]);