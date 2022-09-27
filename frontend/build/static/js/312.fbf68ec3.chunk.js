/*! For license information please see 312.fbf68ec3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[312],{1312:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var r=n(885),o=n(6871),i=n(2791),a=n(4569),c=n.n(a),u=n(1958),s=n(4457),l=n(4335),f=n(413),h=n(184),p=function(t){var e=t.token,n=(0,i.useContext)(l.x).projectDispatcher,a=(0,i.useContext)(f.c).notificationsDispatcher,p=(0,o.UO)().id,d=(0,o.s0)(),v=(0,i.useState)(null),y=(0,r.Z)(v,2),g=y[0],m=y[1],w={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(e)}};(0,i.useEffect)((function(){c().get("/api/notifications/".concat(p),w).then((function(t){return m(t.data)})).catch((function(t){(0,s.GW)(t,n),d(-1)}))}),[e,p]);return(0,h.jsxs)("div",{className:"notification-container",children:[g?(0,h.jsxs)("section",{className:"notification-section",children:[(0,h.jsxs)("h1",{className:"heading",children:["Message from ",g.firstName]}),(0,h.jsxs)("p",{className:"email-link",children:["To reply message via email, click"," ",(0,h.jsx)("a",{href:"mailto:".concat(g.email),children:"here"})]}),(0,h.jsx)("blockquote",{className:"message",children:(0,h.jsx)("q",{children:g.message})}),(0,h.jsx)("a",{href:"mailto:".concat(g.email),className:"reply-btn",children:"Reply"}),(0,h.jsx)("button",{className:"delete-btn",onClick:function(){return function(t){c().delete("/api/notifications/".concat(t),w).then((function(e){a({type:"REMOVE_NOTIFICATION",id:e.data._id}),n({type:"SET_MESSAGE",message:"Successfully Deleted Notification with ID ".concat(t,"!")}),d(-1)})).catch((function(t){return(0,s.GW)(t,n)}))}(g._id)},children:"Delete Message"})]}):(0,h.jsx)(u.Z,{}),(0,h.jsx)("button",{className:"back-btn",onClick:function(){return d(-1)},children:"<- Go Back"})]})}},4457:function(t,e,n){n.d(e,{GW:function(){return u},Ix:function(){return s},bv:function(){return c},uo:function(){return l}});var r=n(4165),o=n(5861),i=n(4569),a=n.n(i),c=function(t,e){var n=t.target;e({type:"UPDATE_PROPERTY",key:n.name,value:n.value})},u=function(t,e){var n=[];t&&t.response&&(t.response.data&&t.response.data instanceof Array?n=t.response.data:t.response.statusText&&n.push(t.response.statusText)),t.message&&0===n.length&&n.push(t.message),e({type:"SET_ERROR",errors:n})},s=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e,n,o){var i,c,s;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_UPLOAD_IMAGE_URL,(c=new FormData).append("file",e),c.append("upload_preset","chiblogger"),c.append("cloud_name","ovecjoe"),t.prev=5,t.next=8,a().post(i,c);case 8:return s=t.sent,n({type:"UPDATE_PHOTO",photoUrl:s.data.url}),t.abrupt("return",s.data.url);case 13:t.prev=13,t.t0=t.catch(5),u(t.t0,o);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,n,r){return t.apply(this,arguments)}}(),l=function(t){var e=new Date(t),n=new Date,r=n.getFullYear()-e.getFullYear();return r?"".concat(r," years ago"):(r=n.getMonth()-e.getMonth())?"".concat(r," months ago"):(r=n.getDay()-e.getDay())?"".concat(r," days ago"):(r=n.getHours()-e.getHours())?"".concat(r," hours ago"):(r=n.getMinutes()-e.getMinutes())?"".concat(r," minutes ago"):(r=n.getSeconds()-e.getSeconds(),"".concat(r," seconds ago"))}},5861:function(t,e,n){function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void n(s)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}n.d(e,{Z:function(){return o}})},4165:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(1002);function o(){o=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(T){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new O(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=_(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=f(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,a),i}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var h={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(j([])));m&&m!==e&&n.call(m,a)&&(y=m);var w=v.prototype=p.prototype=Object.create(y);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==(0,r.Z)(h)&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var i;this._invoke=function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}}function _(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,h;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return d.prototype=v,s(w,"constructor",v),s(v,"constructor",d),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},x(E.prototype),s(E.prototype,c,(function(){return this})),t.AsyncIterator=E,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new E(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),s(w,u,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}}}]);
//# sourceMappingURL=312.fbf68ec3.chunk.js.map