/*! For license information please see 23.ad0f4098.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[23],{6403:function(t,e,r){r.r(e),r.d(e,{default:function(){return j}});var n=r(885),a=r(4569),i=r.n(a),o=r(2791),c=r(6856),s=r(3540),l=r(2810),u=r(9692),d=r(4335),h=r(5928),f=r(4457),p=r(6871),m=r(6566),v=r(9126),g=r(292),y=r(184),x=function(t){var e=t.article,r=t.deleteArticle,a=(0,s.ZP)(e.content),i=(0,o.useState)(!1),c=(0,n.Z)(i,2),u=c[0],h=c[1],x=(0,p.s0)(),j=(0,o.useContext)(g.W).articleDispatcher,w=(0,o.useContext)(d.x).projectDispatcher;return(0,y.jsxs)("article",{className:"article-card",children:[(0,y.jsx)("div",{className:"article-image-gallery",children:e.selectedFiles.map((function(t){var r=e.selectedFiles.indexOf(t);return(0,y.jsx)("img",{src:t,alt:"Sample #".concat(r+1),className:"image-card"},(0,l.Z)())}))}),(0,y.jsxs)("div",{className:"article-summary",children:[(0,y.jsx)("h3",{className:"article-title",children:e.title}),(0,y.jsx)(m.Z,{lines:3,children:(0,y.jsx)("div",{className:"article-piece",children:a})}),(0,y.jsx)("button",{className:"view-more-btn",onClick:function(){w({type:"VIEW_MORE",data:e})},children:"View More"})]}),(0,y.jsxs)("div",{className:"article-info",children:[(0,y.jsx)("span",{className:"no-of-likes",children:"".concat(e.likes," likes")}),(0,y.jsxs)("div",{className:"right",children:[(0,y.jsx)("time",{children:(0,f.uo)(e.createdOn)}),(0,y.jsxs)("div",{className:"options",children:[(0,y.jsx)("label",{htmlFor:"options",onClick:function(){h((function(t){return!t}))},children:(0,y.jsx)(v.FQA,{})}),(0,y.jsx)("input",{type:"checkbox",id:"options"}),u&&(0,y.jsxs)("ul",{className:"options-list",children:[(0,y.jsx)("li",{className:"edit-btn",onClick:function(){var t=e.title,r=e.content,n=e.slugName,a=e.categories,i=e.selectedFiles,o=e.premiumRead,c={title:t,content:r,creator:e.creator,categories:a,articleImages:i,premiumRead:o,slugName:n,published:e.published,articleId:e._id};j({type:"UPDATE_PROPERTY",article:c}),h(!1),setTimeout((function(){x("/dashboard/new-article",{state:{edit:!0,id:e._id}})}),1e3)},children:"Edit"}),(0,y.jsx)("li",{className:"delete-btn",onClick:function(){return r(e._id)},children:"Delete"})]})]})]})]})]})},j=function(){var t=(0,o.useContext)(u.n),e=t.articles,r=t.articlesDispatcher,a=(0,o.useContext)(d.x),p=a.projectData,m=a.projectDispatcher,v=(0,o.useContext)(h.S).userData,g=(0,o.useState)([]),j=(0,n.Z)(g,2),w=j[0],b=j[1],N=(0,o.useState)([]),E=(0,n.Z)(N,2),O=E[0],_=E[1],L=function(t){i().delete("/api/articles/".concat(t),{headers:{Authorization:"Bearer ".concat(v.token)}}).then((function(e){r({type:"STORE_ARTICLES",articles:e.data}),m({type:"SET_MESSAGE",message:"Article with ID ".concat(t," has been deleted.")})})).catch((function(t){(0,f.GW)(t,m)}))};return(0,o.useEffect)((function(){e.length&&(_(e.filter((function(t){return!t.published}))),b(e.filter((function(t){return t.published}))))}),[e.length]),(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)("section",{className:"article-cards",children:[(0,y.jsx)("h1",{children:"My Articles"}),(0,y.jsxs)("div",{className:"published-articles-section articles-section",children:[(0,y.jsx)("h3",{className:"articles-title",children:"Published"}),w.length?(0,y.jsx)("section",{className:"articles",children:w.map((function(t){return(0,y.jsx)(x,{article:t,deleteArticle:L},t._id)}))}):(0,y.jsx)("div",{className:"no-articles",children:"Nothing here."})]}),(0,y.jsxs)("div",{className:"drafted-articles-section articles-section",children:[(0,y.jsx)("h3",{className:"articles-title",children:"Drafted"}),O.length?(0,y.jsx)("section",{className:"articles",children:O.map((function(t){return(0,y.jsx)(x,{article:t,deleteArticle:L},(0,l.Z)())}))}):(0,y.jsx)("div",{className:"no-articles",children:"Nothing here."})]}),(0,y.jsx)("div",{className:"copyright-card",children:"copyright @2022 chiblogger"})]}),p.view&&p.data&&(0,y.jsx)("div",{className:"article-page",children:(0,y.jsxs)("section",{className:"article-board",children:[(0,y.jsx)("div",{className:"cancel-btn",onClick:function(){m({type:"VIEW_LESS"})},children:(0,y.jsx)(c.B4e,{})}),(0,y.jsx)("h2",{className:"title",children:p.data.title}),(0,y.jsxs)("div",{className:"categories",children:[(0,y.jsx)("h6",{children:"Categories:"}),p.data.categories.map((function(t){return(0,y.jsx)("span",{className:"category",children:"category.name"})}))]}),(0,y.jsx)("div",{className:"content",children:(0,s.ZP)(p.data.content)}),(0,y.jsxs)("div",{className:"metadata",children:[(0,y.jsx)("time",{children:p.data.createdOn.split("T")[0]}),p.data.premiumRead&&(0,y.jsx)("span",{className:"premium-read",title:"This is only available to premium subscribers",children:(0,y.jsx)(c.gms,{})}),(0,y.jsx)("span",{className:"published",children:p.data.published?"Published":"Drafted"})]}),(0,y.jsx)("div",{className:"comments",children:p.data.comments.map((function(t){return(0,y.jsxs)("article",{className:"comment",children:[(0,y.jsxs)("div",{className:"comment-creator",children:[(0,y.jsx)("h6",{className:"name",children:t.user.username}),(0,y.jsx)("time",{children:t.createdOn.split("T")[0]})]}),(0,y.jsx)("div",{className:"".concat(t.type,"-type"),children:t.type}),(0,y.jsx)("h4",{className:"comment-title",children:t.title}),(0,y.jsx)("blockquote",{className:"comment-body",children:t.content}),(0,y.jsxs)("div",{className:"votes",children:[(0,y.jsxs)("span",{children:[t.upvoteCount," upvotes"]}),(0,y.jsxs)("span",{children:[t.downvoteCount," downvotes"]})]})]})}))})]})})]})}},292:function(t,e,r){r.d(e,{W:function(){return u},Z:function(){return d}});var n=r(885),a=r(2791),i=r(2982),o=r(4942),c=r(1413),s=function(t,e){switch(e.type){case"UPDATE_PROPERTY":return e.article?(0,c.Z)((0,c.Z)({},t),e.article):(0,c.Z)((0,c.Z)({},t),{},(0,o.Z)({},e.key,e.value));case"UPDATE_PHOTO":var r=(0,i.Z)(t.articleImages);return r.push(e.photoUrl),(0,c.Z)((0,c.Z)({},t),{},{articleImages:r.slice(-5)});case"CLEAR_PHOTOS":return(0,c.Z)((0,c.Z)({},t),{},{articleImages:[]});case"TOGGLE_PUBLISHED":return(0,c.Z)((0,c.Z)({},t),{},{published:e.published});case"CLEAR_ARTICLE_DATA":return e.default;default:return t}},l=r(184),u=(0,a.createContext)(),d=function(t){var e=function(){return{title:"",slugName:"",articleImages:[],content:"",premiumRead:!1,creator:"",published:!1,categories:[]}},r=(0,a.useReducer)(s,JSON.parse(sessionStorage.getItem("articleData"))||{title:"",slugName:"",articleImages:[],content:"",premiumRead:!1,creator:"",published:!1,categories:[]}),i=(0,n.Z)(r,2),o=i[0],c=i[1];return(0,a.useEffect)((function(){sessionStorage.setItem("articleData",JSON.stringify(o))}),[o]),(0,l.jsx)(u.Provider,{value:{defaultArticle:e,articleData:o,articleDispatcher:c},children:t.children})}},4457:function(t,e,r){r.d(e,{GW:function(){return s},Ix:function(){return l},bv:function(){return c},uo:function(){return u}});var n=r(4165),a=r(5861),i=r(4569),o=r.n(i),c=function(t,e){var r=t.target;e({type:"UPDATE_PROPERTY",key:r.name,value:r.value})},s=function(t,e){var r=[];t&&t.response&&(t.response.data&&t.response.data instanceof Array?r=t.response.data:t.response.statusText&&r.push(t.response.statusText)),t.message&&0===r.length&&r.push(t.message),e({type:"SET_ERROR",errors:r})},l=function(){var t=(0,a.Z)((0,n.Z)().mark((function t(e,r,a){var i,c;return(0,n.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.cloudinary.com/v1_1/ovecjoe/image/upload",(i=new FormData).append("file",e),i.append("upload_preset","chiblogger"),i.append("cloud_name","ovecjoe"),t.prev=5,t.next=8,o().post("https://api.cloudinary.com/v1_1/ovecjoe/image/upload",i);case 8:return c=t.sent,r({type:"UPDATE_PHOTO",photoUrl:c.data.url}),t.abrupt("return",c.data.url);case 13:t.prev=13,t.t0=t.catch(5),s(t.t0,a);case 16:case"end":return t.stop()}}),t,null,[[5,13]])})));return function(e,r,n){return t.apply(this,arguments)}}(),u=function(t){var e=new Date(t),r=new Date,n=r.getFullYear()-e.getFullYear();return n?"".concat(n," years ago"):(n=r.getMonth()-e.getMonth())?"".concat(n," months ago"):(n=r.getDay()-e.getDay())?"".concat(n," days ago"):(n=r.getHours()-e.getHours())?"".concat(n," hours ago"):(n=r.getMinutes()-e.getMinutes())?"".concat(n," minutes ago"):(n=r.getSeconds()-e.getSeconds(),"".concat(n," seconds ago"))}},9983:function(t,e,r){r.d(e,{w_:function(){return l}});var n=r(2791),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(a),o=function(){return o=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},o.apply(this,arguments)},c=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};function s(t){return t&&t.map((function(t,e){return n.createElement(t.tag,o({key:e},t.attr),s(t.child))}))}function l(t){return function(e){return n.createElement(u,o({attr:o({},t.attr)},e),s(t.child))}}function u(t){var e=function(e){var r,a=t.attr,i=t.size,s=t.title,l=c(t,["attr","size","title"]),u=i||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,l,{className:r,style:o(o({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),t.children)};return void 0!==i?n.createElement(i.Consumer,null,(function(t){return e(t)})):e(a)}},2810:function(t,e,r){var n;r.d(e,{Z:function(){return d}});var a=new Uint8Array(16);function i(){if(!n&&!(n="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(a)}var o=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"===typeof t&&o.test(t)},s=[],l=0;l<256;++l)s.push((l+256).toString(16).substr(1));var u=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(s[t[e+0]]+s[t[e+1]]+s[t[e+2]]+s[t[e+3]]+"-"+s[t[e+4]]+s[t[e+5]]+"-"+s[t[e+6]]+s[t[e+7]]+"-"+s[t[e+8]]+s[t[e+9]]+"-"+s[t[e+10]]+s[t[e+11]]+s[t[e+12]]+s[t[e+13]]+s[t[e+14]]+s[t[e+15]]).toLowerCase();if(!c(r))throw TypeError("Stringified UUID is invalid");return r};var d=function(t,e,r){var n=(t=t||{}).random||(t.rng||i)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var a=0;a<16;++a)e[r+a]=n[a];return e}return u(n)}},5861:function(t,e,r){function n(t,e,r,n,a,i,o){try{var c=t[i](o),s=c.value}catch(l){return void r(l)}c.done?e(s):Promise.resolve(s).then(n,a)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function c(t){n(o,a,i,c,s,"next",t)}function s(t){n(o,a,i,c,s,"throw",t)}c(void 0)}))}}r.d(e,{Z:function(){return a}})},4165:function(t,e,r){r.d(e,{Z:function(){return a}});var n=r(1002);function a(){a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(S){l=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,i=Object.create(a.prototype),o=new O(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return L()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var c=b(o,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=d(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,o),i}function d(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var h={};function f(){}function p(){}function m(){}var v={};l(v,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(_([])));y&&y!==e&&r.call(y,o)&&(v=y);var x=m.prototype=f.prototype=Object.create(v);function j(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function a(i,o,c,s){var l=d(t[i],t,o);if("throw"!==l.type){var u=l.arg,h=u.value;return h&&"object"==(0,n.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){a("next",t,c,s)}),(function(t){a("throw",t,c,s)})):e.resolve(h).then((function(t){u.value=t,c(u)}),(function(t){return a("throw",t,c,s)}))}s(l.arg)}var i;this._invoke=function(t,r){function n(){return new e((function(e,n){a(t,r,e,n)}))}return i=i?i.then(n,n):n()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=d(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function _(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:L}}function L(){return{value:void 0,done:!0}}return p.prototype=m,l(x,"constructor",m),l(m,"constructor",p),p.displayName=l(m,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},j(w.prototype),l(w.prototype,c,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new w(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},j(x),l(x,s,"Generator"),l(x,o,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;E(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}}}]);
//# sourceMappingURL=23.ad0f4098.chunk.js.map