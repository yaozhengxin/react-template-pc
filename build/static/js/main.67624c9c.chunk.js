(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(e,n,t){"use strict";var o={};t.r(o),t.d(o,"changeLoadingStatus",function(){return v}),t.d(o,"changeErrorTipsMessage",function(){return b}),t.d(o,"login",function(){return O});var r=t(50),a=Object(r.fromJS)({login:!0,loginBtnLoadingStatus:!1,errorTipsMessage:"",devUserName:"admin",devPassWord:"111"}),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"login/CHANGE_LOGIN":case"login/LOGOUT":return e.set("login",n.value);case"login/CHANGE_LOADING_STATUS":return e.set("loginBtnLoadingStatus",n.value);case"login/CHANGE_ERROR_TIPS_MESSAGE":return e.set("errorTipsMessage",n.value);default:return e}},c=t(118),u=t(14),s=(t(144),t(117)),l=t(19),d=t.n(l),f=t(6),p=Object(f.b)();d.a.defaults.timeout=5e3,d.a.defaults.baseURL="";var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.type,t=void 0===n?"error":n,o=e.message,r=void 0===o?"error":o,a=e.description,i=void 0===a?"\u5440\uff5e\uff0c\u7f51\u7edc\u4e0d\u7ed9\u529b":a;s.a[t]({message:r,description:i})};d.a.interceptors.request.use(function(e){if("/login"!==p.location.pathname){var n=localStorage.getItem("__config_center_token");if(null==n)return p.replace({pathname:"/login",search:"?query=".concat(encodeURIComponent(window.location.href))}),!1;e.headers.token=n}return console.log(p),e.data=JSON.stringify(e.data),e.headers={"Content-Type":"application/x-www-form-urlencoded"},e},function(e){return m(),Promise.reject(e)}),d.a.interceptors.response.use(function(e){return e},function(e){if(void 0!==e.response){switch(e.response.status){case 401:p.replace({pathname:"/login",search:"?query=".concat(encodeURIComponent(window.location.href))});break;case 403:p.replace({pathname:"/401"});break;default:m({message:e.response.status,description:e.response.data})}return Promise.resolve(e.response)}return Promise.reject(e)});var h=function e(){Object(u.a)(this,e)};h.get=function(e){var n=e.url,t=e.params,o=void 0===t?{}:t,r=e.isShowResInConsole,a=void 0!==r&&r;e.isShowLoading;return new Promise(function(e,t){d.a.get(n,{params:Object(c.a)({},o,{_t:(new Date).getTime()})}).then(function(t){a&&console.info("%c get\u56de\u8c03:server:url=".concat(n,"  \n [result]="),"color:red;font-size:16px",t.data),e(t.data)}).catch(function(e){t(e)})})},h.post=function(e){var n=e.url,t=e.data,o=void 0===t?{}:t,r=e.isShowResInConsole,a=void 0!==r&&r;e.isShowLoading;return new Promise(function(e,t){d.a.post(n,o).then(function(t){a&&console.info("%c post\u56de\u8c03:server:url=".concat(n,"  \n [result]="),"color:red;font-size:16px",t.data),e(t.data)},function(e){t(e)})})},h.patch=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(t,o){d.a.patch(e,n).then(function(e){t(e.data)},function(e){o(e)})})},h.put=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise(function(t,o){d.a.put(e,n).then(function(e){t(e.data)},function(e){o(e)})})},h.jsonp=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e4,o=window,r=document.body;return new Promise(function(a,i){var c=Math.round(1e5*Math.random()),u="jsonp_callback_"+c,s=document.createElement("script");s.id=c;var l="";if("object"===typeof h.requestPara){for(var d in h.requestPara)h.requestPara.hasOwnProperty(d)&&(l+=d+"="+encodeURIComponent(h.requestPara[d])+"&");l+="t="+(new Date).getTime()}else l+="t="+(new Date).getTime();var f="";if("object"===typeof n){for(var p in n)n.hasOwnProperty(p)&&(n[p]instanceof Array?f+=p+"="+encodeURIComponent(JSON.stringify(n[p]))+"&":f+=p+"="+encodeURIComponent(n[p])+"&");f=f.substr(0,f.length-1)}(f||l)&&(e=e+(e.indexOf("?")>=0?"&":"?")+f+"&"+l),s.src=e+(e.indexOf("?")>=0?"&":"?")+"callback="+u,s.onerror=function(e){i("\u5931\u8d25\uff1a\u8bf7\u6c42, ".concat(e))},r.appendChild(s),/callback=?/.test(e)&&(e=e.replace("=?","="+u)),o[u]=function(e){e?a(e):i("\u8bf7\u6c42\u5931\u8d25"),o[u]=null,delete o[u],document.getElementById(c)&&r.removeChild(s)},setTimeout(function(){document.getElementById(c)&&(console.log("\u8bf7\u6c42\u8d85\u65f6\uff1a",s.src),o[u]=null,delete o[u],r.removeChild(s))},t)})};var g=h;var v=function(e){return{type:"login/CHANGE_LOADING_STATUS",value:e}},b=function(e){return{type:"login/CHANGE_ERROR_TIPS_MESSAGE",value:e}},O=function(e,n){return function(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};g.get({url:"/api/detail",params:e,isShowResInConsole:!0,isShowLoading:!0}).then(function(e){return Promise.resolve(e)}).catch(function(e){return Promise.reject(e)})}()}};t.d(n,"b",function(){return i}),t.d(n,"a",function(){return o})},129:function(e,n,t){e.exports=t(208)},134:function(e,n,t){},139:function(e,n,t){},208:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(16),i=t.n(a),c=(t(134),t(14)),u=t(22),s=t(24),l=t(23),d=t(25),f=t(88),p=(t(139),t(36)),m=t(110),h=t(111),g=t(107),v=Object(h.combineReducers)({login:g.b}),b=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||p.c,O=Object(p.d)(v,b(Object(p.a)(m.a))),w=t(68),j=t(27),E=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("\u8def\u7531\u5207\u6362\u540e==========")}},{key:"render",value:function(){var e=this.props,n=e.location,t=e.config,r=n.pathname,a=localStorage.getItem("__config_center_token");console.log("\u8def\u7531\u5207\u6362\u524d----------".concat(a||"\u672a\u767b\u5f55")),console.log("".concat(r)),console.log("----------\u8def\u7531\u5207\u6362\u524d");var i=t.find(function(e){return e.path===r});if(i&&!i.auth&&!a){var c=i.component;return o.createElement(j.b,{component:c,exact:!0,path:r})}return a?"/login"===r?o.createElement(j.a,{to:"/"}):i?o.createElement(j.b,{component:i.component,path:r}):o.createElement(j.a,{to:"/404"}):i&&i.auth?o.createElement(j.a,{to:"/login"}):o.createElement(j.a,{to:"/404"})}}]),n}(o.Component),y=t(114),_=t.n(y),S=(t(198),t(115)),P=t(74),C=t.n(P),I=(t(200),function(e){function n(){var e,t;Object(c.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return t=Object(s.a)(this,(e=Object(l.a)(n)).call.apply(e,[this].concat(r))),C.a.start(),t}return Object(d.a)(n,e),Object(u.a)(n,[{key:"componentWillUnmount",value:function(){C.a.done()}},{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:0,right:0,bottom:0,left:0}},r.a.createElement(S.a,{size:"large",spinning:!0}))}}]),n}(o.Component)),k=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:I;return _()({loader:e,loading:n})},R=k(function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,380))}),T=k(function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,379))}),A=k(function(){return Promise.all([t.e(0),t.e(1),t.e(8)]).then(t.bind(null,377))}),N=[{path:"/",component:R,auth:!0},{path:"/home",component:R,auth:!0},{path:"/login",component:k(function(){return Promise.all([t.e(0),t.e(1),t.e(5),t.e(9)]).then(t.bind(null,378))})},{path:"/401",component:A},{path:"/404",component:T}],L=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return o.createElement(w.a,null,o.createElement(j.d,null,o.createElement(E,{config:N})))}}]),n}(o.Component),U=function(e){function n(){return Object(c.a)(this,n),Object(s.a)(this,Object(l.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(f.a,{store:O},r.a.createElement(L,null))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(207);i.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[129,3,4]]]);
//# sourceMappingURL=main.67624c9c.chunk.js.map