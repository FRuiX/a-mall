webpackJsonp([2],{"22O3":function(e,t,n){"use strict";var r=n("mvHQ"),s=n.n(r),o=window.localStorage;t.a={set:function(e,t){void 0!==t&&o.setItem(e,function(e){return s()(e)}(t))},get:function(e,t){var n=function(e){if("string"!=typeof e)return;try{return JSON.parse(e)}catch(t){return e||void 0}}(o.getItem(e));return void 0===n?t:n},remove:function(e){return o.removeItem(e)},clear:function(){o.clear()}}},"3nYx":function(e,t){},EarI:function(e,t){var n=1e3,r=60*n,s=60*r,o=24*s,i=365.25*o;function a(e,t,n){if(!(e<t))return e<1.5*t?Math.floor(e/t)+" "+n:Math.ceil(e/t)+" "+n+"s"}e.exports=function(e,t){t=t||{};var c,u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(!t)return;var a=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return a*i;case"days":case"day":case"d":return a*o;case"hours":case"hour":case"hrs":case"hr":case"h":return a*s;case"minutes":case"minute":case"mins":case"min":case"m":return a*r;case"seconds":case"second":case"secs":case"sec":case"s":return a*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return a;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?a(c=e,o,"day")||a(c,s,"hour")||a(c,r,"minute")||a(c,n,"second")||c+" ms":function(e){if(e>=o)return Math.round(e/o)+"d";if(e>=s)return Math.round(e/s)+"h";if(e>=r)return Math.round(e/r)+"m";if(e>=n)return Math.round(e/n)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},FC4b:function(e,t){},"Fy0/":function(e,t,n){(function(r){function s(){var e;try{e=t.storage.debug}catch(e){}return!e&&void 0!==r&&"env"in r&&(e=Object({NODE_ENV:"production"}).DEBUG),e}(t=e.exports=n("vmzn")).log=function(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)},t.formatArgs=function(e){var n=this.useColors;if(e[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+e[0]+(n?"%c ":" ")+"+"+t.humanize(this.diff),!n)return;var r="color: "+this.color;e.splice(1,0,r,"color: inherit");var s=0,o=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&"%c"===e&&(o=++s)}),e.splice(o,0,r)},t.save=function(e){try{null==e?t.storage.removeItem("debug"):t.storage.debug=e}catch(e){}},t.load=s,t.useColors=function(){if("undefined"!=typeof window&&window.process&&"renderer"===window.process.type)return!0;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],t.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},t.enable(s())}).call(t,n("W2nU"))},KhMK:function(e,t){},V6xj:function(e,t){},YiIx:function(e,t){},ar59:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("/l8+"),s=n("Fk3l"),o={name:"SearchHeader",components:{LuNavbar:r.a,LuSearchBox:s.a},methods:{query:function(e){this.$emit("query",e)},goBack:function(){this.$router.back()}}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("lu-navbar",{staticClass:"header"},[t("i",{staticClass:"iconfont icon-back",attrs:{slot:"left"},on:{click:this.goBack},slot:"left"}),this._v(" "),t("lu-search-box",{attrs:{slot:"center",placeholder:"情人节巨惠"},on:{query:this.query},slot:"center"})],1)},staticRenderFns:[]};var a=n("VU/8")(o,i,!1,function(e){n("V6xj")},"data-v-047f4748",null).exports,c=n("22O3"),u="mall-search-history-keyword-key",l={methods:{$_search_selectItem:function(e){var t=c.a.get(u,[]);0!==t.length&&(t=t.filter(function(t){return t!==e})),t.unshift(e),c.a.set(u,t),this.$router.push("/product/578153420589")}}},f={name:"SearchHistory",data:function(){return{historys:[]}},mixins:[l],created:function(){this.getKeyword()},methods:{update:function(){this.getKeyword()},getKeyword:function(){this.historys=c.a.get(u)?c.a.get(u):[]},removeItem:function(e){this.historys=this.historys.filter(function(t){return t!==e}),c.a.set(u,this.historys),this.$emit("remove-item",e)},showConfirm:function(){this.$emit("show-confirm")},clear:function(){c.a.remove(u)}}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.historys.length?n("div",{staticClass:"history"},[n("h4",{staticClass:"history-title"},[e._v("历史搜索")]),e._v(" "),n("transition-group",{staticClass:"g-list",attrs:{tag:"ul",name:"list"}},e._l(e.historys,function(t){return n("li",{key:t,staticClass:"g-list-item",on:{click:function(n){e.$_search_selectItem(t)}}},[n("span",{staticClass:"g-list-text"},[e._v(e._s(t))]),e._v(" "),n("i",{staticClass:"iconfont icon-delete",on:{click:function(n){n.stopPropagation(),e.removeItem(t)}}})])}),0),e._v(" "),n("a",{staticClass:"history-btn",attrs:{href:"##"}},[n("i",{staticClass:"iconfont icon-clear",on:{click:e.showConfirm}},[e._v("清空历史数据")])])],1):e._e()},staticRenderFns:[]};var h=n("VU/8")(f,d,!1,function(e){n("KhMK")},"data-v-8c563524",null).exports,m=n("//Fk"),v=n.n(m),g=n("odKQ"),p=n("mtWM"),y=n.n(p),w=n("cQcd"),_=n("T452"),b={name:"SearchHot",components:{LuLoading:g.a},mixins:[l],data:function(){return{hots:[]}},created:function(){var e=this;this.getHotKeyWord().then(function(){e.$emit("loaded")})},methods:{getHotKeyWord:function(){var e=this;return y.a.get("static/search.json",{timeout:_.c}).then(function(e){if(console.log(e),(e=e.data.hotKeyWord)&&e.owner)return e.owner;throw new Error("没有获取到数据")}).catch(function(e){console.log(e)}).then(function(e){return new v.a(function(t){setTimeout(function(){t(e)},1e3)})}).then(function(t){return new v.a(function(n){t&&(e.hots=t,n())})})}}},C={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hot"},[n("h4",{staticClass:"hot-title"},[e._v("热门搜索")]),e._v(" "),e.hots.length?n("ul",{staticClass:"hot-list"},e._l(e.hots,function(t,r){return n("li",{key:r,staticClass:"hot-item",on:{click:function(n){e.$_search_selectItem(t.hotWord)}}},[e._v(e._s(t.hotWord))])}),0):n("div",{staticClass:"loading-container"},[n("lu-loading")],1)])},staticRenderFns:[]};var x=n("VU/8")(b,C,!1,function(e){n("3nYx")},"data-v-6cd52b8d",null).exports,k={name:"SearchResult",components:{LuLoading:g.a},mixins:[l],data:function(){return{results:[],loading:!1}},props:{query:{type:String,default:""}},watch:{query:function(e){this.getResults(e)}},methods:{getResults:function(e){var t=this;e&&(this.loading=!0,function(e){var t={q:e,code:"utf-8",area:"c2c",nick:"",sid:null};return Object(w.a)("https://suggest.taobao.com/sug",t,_.a).then(function(e){if(e.result)return e.result;throw new Error("没有获取到数据")}).catch(function(e){e&&console.log(e)}).then(function(e){return new v.a(function(t){setTimeout(function(){t(e)},1e3)})})}(e).then(function(e){e&&(t.results=e,t.loading=!1)}))}}},S={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"result"},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"loading-container"},[n("lu-loading")],1),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&e.results.length,expression:"!loading && results.length"}],staticClass:"g-list"},e._l(e.results,function(t,r){return n("li",{key:r,staticClass:"g-list-item",on:{click:function(n){e.$_search_selectItem(t[0])}}},[n("span",{staticClass:"g-list-text"},[e._v(e._s(t[0]))])])}),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.loading&&!e.results.length,expression:"!loading && !results.length"}],staticClass:"no-result"},[e._v("没有结果")])])},staticRenderFns:[]};var E=n("VU/8")(k,S,!1,function(e){n("FC4b")},"data-v-191a2bf4",null).exports,$=n("8MDr"),N={name:"LuConfirm",props:{title:{type:String,default:""},msg:{type:String,default:"确定取消此操作吗？"},cancelBtnText:{type:String,default:"取消"},confirmBtnText:{type:String,default:"确定"}},data:function(){return{visible:!1}},methods:{show:function(){this.visible=!0},hide:function(){this.visible=!1},cancel:function(){this.hide(),this.$emit("cancel")},confirm:function(){this.hide(),this.$emit("confirm")}}},q={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"mine-confirm"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"mine-confirm-wrapper"},[n("div",{staticClass:"mine-confirm"},[n("div",{staticClass:"mine-confirm-title"},[e._v(e._s(e.title))]),e._v(" "),n("div",{staticClass:"mine-confirm-msg"},[e._v(e._s(e.msg))]),e._v(" "),n("div",{staticClass:"mine-confirm-btns"},[n("button",{staticClass:"mine-confirm-btn mine-confirm-cancel",on:{click:e.cancel}},[e._v(e._s(e.cancelBtnText))]),e._v(" "),n("button",{staticClass:"mine-confirm-btn mine-confirm-ok",on:{click:e.confirm}},[e._v(e._s(e.confirmBtnText))])])])])])},staticRenderFns:[]};var F=n("VU/8")(N,q,!1,function(e){n("dNeu")},"data-v-345f9638",null).exports,I={name:"Search",components:{SearchHeader:a,SearchHistory:h,SearchHot:x,SearchResult:E,LuScroll:$.a,LuConfirm:F},data:function(){return{query:""}},methods:{showConfirm:function(){this.$refs.confirm.show()},clearAllSearchHistory:function(){this.$refs.history.clear(),this.$refs.history.update()},getQuery:function(e){this.query=e}}},O={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"search"}},[n("div",{staticClass:"search"},[n("header",{staticClass:"g-header-container"},[n("search-header",{on:{query:e.getQuery}})],1),e._v(" "),n("div",{staticClass:"g-content-container"},[n("lu-scroll",[e.query?e._e():n("search-hot"),e._v(" "),e.query?e._e():n("search-history",{ref:"history",on:{"show-confirm":e.showConfirm}}),e._v(" "),n("search-result",{directives:[{name:"show",rawName:"v-show",value:e.query,expression:"query"}],attrs:{query:e.query}})],1)],1),e._v(" "),n("lu-confirm",{ref:"confirm",attrs:{msg:"确定清空吗？"},on:{confirm:e.clearAllSearchHistory}})],1)])},staticRenderFns:[]};var j=n("VU/8")(I,O,!1,function(e){n("YiIx")},"data-v-2045bc88",null);t.default=j.exports},cQcd:function(e,t,n){"use strict";var r=n("//Fk"),s=n.n(r),o=n("hU7x"),i=n.n(o);t.a=function(e,t,n){return new s.a(function(r,s){e+=(e.indexOf("?")<0?"?":"&")+function(e){var t=[];for(var n in e)t.push([n,e[n]]);return t.map(function(e){return e.join("=")}).join("&")}(t),i()(e,n,function(e,t){e?s(e):r(t)})})}},dNeu:function(e,t){},hU7x:function(e,t,n){var r=n("Fy0/")("jsonp");e.exports=function(e,t,n){"function"==typeof t&&(n=t,t={});t||(t={});var i,a,c=t.prefix||"__jp",u=t.name||c+s++,l=t.param||"callback",f=null!=t.timeout?t.timeout:6e4,d=encodeURIComponent,h=document.getElementsByTagName("script")[0]||document.head;f&&(a=setTimeout(function(){m(),n&&n(new Error("Timeout"))},f));function m(){i.parentNode&&i.parentNode.removeChild(i),window[u]=o,a&&clearTimeout(a)}return window[u]=function(e){r("jsonp got",e),m(),n&&n(null,e)},e=(e+=(~e.indexOf("?")?"&":"?")+l+"="+d(u)).replace("?&","?"),r('jsonp req "%s"',e),(i=document.createElement("script")).src=e,h.parentNode.insertBefore(i,h),function(){window[u]&&m()}};var s=0;function o(){}},mvHQ:function(e,t,n){e.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(e,t,n){var r=n("FeBl"),s=r.JSON||(r.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},vmzn:function(e,t,n){var r;function s(e){function n(){if(n.enabled){var e=n,s=+new Date,o=s-(r||s);e.diff=o,e.prev=r,e.curr=s,r=s;for(var i=new Array(arguments.length),a=0;a<i.length;a++)i[a]=arguments[a];i[0]=t.coerce(i[0]),"string"!=typeof i[0]&&i.unshift("%O");var c=0;i[0]=i[0].replace(/%([a-zA-Z%])/g,function(n,r){if("%%"===n)return n;c++;var s=t.formatters[r];if("function"==typeof s){var o=i[c];n=s.call(e,o),i.splice(c,1),c--}return n}),t.formatArgs.call(e,i),(n.log||t.log||console.log.bind(console)).apply(e,i)}}return n.namespace=e,n.enabled=t.enabled(e),n.useColors=t.useColors(),n.color=function(e){var n,r=0;for(n in e)r=(r<<5)-r+e.charCodeAt(n),r|=0;return t.colors[Math.abs(r)%t.colors.length]}(e),"function"==typeof t.init&&t.init(n),n}(t=e.exports=s.debug=s.default=s).coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){t.enable("")},t.enable=function(e){t.save(e),t.names=[],t.skips=[];for(var n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length,s=0;s<r;s++)n[s]&&("-"===(e=n[s].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.substr(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){var n,r;for(n=0,r=t.skips.length;n<r;n++)if(t.skips[n].test(e))return!1;for(n=0,r=t.names.length;n<r;n++)if(t.names[n].test(e))return!0;return!1},t.humanize=n("EarI"),t.names=[],t.skips=[],t.formatters={}}});
//# sourceMappingURL=2.0801db4751f118c99f2c.js.map