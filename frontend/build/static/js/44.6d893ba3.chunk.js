(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[44,982],{3695:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var s=n(4942),a=n(1413),c=n(885),o=n(3540),i=n(2791),r=n(6871),l=n(8820),u=n(7692),d=n(6355),m=n(6856),p=n(2810),h=n(4569),v=n.n(h),f=n(6323),x=n.n(f),j=n(4457),g=n(4335),N=n(5928),y=n(9692),k=n(6982),b=n(184),C=function(){var e,t,n,h,f,C,E,_=(0,i.useContext)(g.x).projectDispatcher,T=(0,i.useContext)(y.n),D=T.articles,S=T.articlesDispatcher,w=(0,i.useContext)(N.S).userData,Z=(0,r.UO)().slugName,O=(0,r.s0)(),A=(0,r.TH)(),P=(0,i.useState)(null!==(e=null===(t=D.filter((function(e){return e.published&&e.slugName===Z})))||void 0===t?void 0:t[0])&&void 0!==e?e:null),R=(0,c.Z)(P,2),U=R[0],F=R[1],M=(0,i.useState)(!1),W=(0,c.Z)(M,2),Y=W[0],G=W[1],I=(0,i.useState)({type:"",title:"",content:""}),L=(0,c.Z)(I,2),H=L[0],z=L[1],B=new(x()),q={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(w.token)}};(0,i.useEffect)((function(){var e,t=null===(e=U.likers)||void 0===e?void 0:e.indexOf(w._id);G(-1!==t)}),[U]),(0,i.useEffect)((function(){if(H.content){var e,t=B.analyze(H.content);e=t.score>0?"positive":t.score<0?"negative":"",z((function(t){return(0,a.Z)((0,a.Z)({},t),{},{type:e})}))}}),[H.content]);var J=function(e){var t=e.target,n=t.name,c=t.value;z((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,s.Z)({},n,c))}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"navi-btns",children:(0,b.jsx)(d.x_l,{className:"prev-btn",onClick:function(){return O(-1)}})}),U?(0,b.jsxs)("div",{className:"blog-article-container",children:[(0,b.jsxs)("section",{className:"right-container article-section",children:[(0,b.jsxs)("div",{className:"featured-post-info",children:[(0,b.jsxs)("div",{className:"left",children:[null!==(n=U.creator)&&void 0!==n&&n.photo?(0,b.jsx)("img",{src:U.creator.photo,alt:U.creator.username}):(0,b.jsx)("span",{className:"without-photo",children:null===(h=U.creator)||void 0===h||null===(f=h.username)||void 0===f?void 0:f[0].toUpperCase()}),(0,b.jsxs)("p",{children:["By ",(0,b.jsx)("span",{className:"author",children:U.creator.username})]}),(0,b.jsx)("span",{className:"timestamp",children:(0,j.uo)(U.createdOn)})]}),(0,b.jsx)("button",{className:"share-btn",onClick:function(){console.log(A.pathname)},children:"Share"})]}),(0,b.jsx)("h1",{className:"post-title",children:U.title}),(0,b.jsx)("div",{className:"article-photos",children:U.selectedFiles.map((function(e){return(0,b.jsx)("img",{src:e,alt:U.title},(0,p.Z)())}))}),(0,b.jsx)("article",{className:"article-content",children:(0,o.ZP)(U.content)}),(0,b.jsxs)("div",{className:"article-actions-card",children:[(0,b.jsxs)("div",{className:"likes-card",children:[(0,b.jsx)("span",{className:"like-btn",onClick:function(){v().put("/api/articles/".concat(Z,"/like"),{},q).then((function(e){F(e.data),S({type:"UPDATE_ARTICLE",article:e.data})})).catch((function(e){(0,j.GW)(e,_)}))},style:{backgroundColor:Y?"#e61b48":"#7d6904",color:Y?"#fff":"rgb(6,43,16)"},children:(0,b.jsx)(l.L7p,{})}),(0,b.jsx)("span",{className:"likes-count",children:Y?"You and ".concat(U.likes-1," other").concat(U.likes-1>1?"s":""):"".concat(U.likes," like").concat(U.likes>1?"s":"")})]}),(0,b.jsxs)("div",{className:"no-of-comments-card",children:[null===U||void 0===U||null===(C=U.comments)||void 0===C?void 0:C.length," comments"]})]}),(0,b.jsxs)("form",{className:"comment-box",onSubmit:function(e){e.preventDefault(),v().post("/api/articles/".concat(U._id,"/comments/new"),H,q).then((function(e){var t=e.data;F(t),S({type:"UPDATE_ARTICLE",article:t}),z({type:"",title:"",content:""}),_({type:"SET_MESSAGE",message:"You have added new comment to article with ID ".concat(U._id)})})).catch((function(e){(0,j.GW)(e,_)}))},children:[(0,b.jsx)("input",{type:"text",placeholder:"Comment Responsibly...",name:"content",value:H.content,onChange:J,required:!0}),(0,b.jsx)("button",{children:"Send"})]}),H.type&&(0,b.jsxs)("div",{className:"tooltip",children:["This a ",(0,b.jsx)("strong",{children:H.type})," feedback."," ",(0,b.jsxs)("span",{className:"edit-type",children:["No? Change type: ",(0,b.jsxs)("select",{value:H.type,name:"type",onChange:J,className:"funny-edit",children:[(0,b.jsx)("option",{value:"",children:"Neutral"}),(0,b.jsx)("option",{value:"positive",children:"Positive"}),(0,b.jsx)("option",{value:"negative",children:"Negative"})]})]})]})]}),(0,b.jsxs)("section",{className:"comments-container",children:[(0,b.jsxs)("h1",{className:"heading",children:["Comments",(0,b.jsx)(d.OdJ,{})]}),null!==(E=U.comments)&&void 0!==E&&E.length?(0,b.jsx)("div",{className:"comments",children:U.comments.map((function(e){return(0,b.jsxs)("article",{className:"comment-card",children:[(0,b.jsxs)("div",{className:"comment-type",children:[(0,b.jsx)("div",{className:"red-line"}),(0,b.jsx)("p",{children:e.type}),(0,b.jsx)("div",{className:"red-line"})]}),(0,b.jsx)("h4",{className:"comment-title",children:e.title||"No Title"}),(0,b.jsx)("p",{className:"comment-content",children:e.content}),(0,b.jsxs)("div",{className:"comment-data",children:[(0,b.jsxs)("p",{children:["Written by ",(0,b.jsx)("strong",{children:e.user.username})," on",(0,b.jsx)("time",{className:"created",children:" ".concat(e.createdOn.split("T")[0])})]}),(0,b.jsxs)("span",{className:"vote-btns",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)(u.WzD,{}),(0,b.jsx)("span",{className:"votes",children:e.upvoteCount})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)(u.PYY,{}),(0,b.jsx)("span",{className:"votes",children:e.downvoteCount})]})]})]}),w._id===e.user._id&&(0,b.jsxs)("div",{className:"comment-action-btns",children:[(0,b.jsx)(d.fmQ,{className:"edit"}),(0,b.jsx)(m.ZkW,{className:"del",onClick:function(){return t=e._id,void v().delete("/api/articles/".concat(U._id,"/comments/").concat(t),q).then((function(e){var n=e.data;F(n),S({type:"UPDATE_ARTICLE",article:n}),_({type:"SET_MESSAGE",message:"Comment with ID ".concat(t," has been deleted successfully.")})})).catch((function(e){(0,j.GW)(e,_)}));var t}})]})]},(0,p.Z)())}))}):(0,b.jsxs)("article",{className:"no-comment-text",children:[(0,b.jsx)(d.llv,{}),"Be the first to comment on this article."]})]})]}):(0,b.jsx)(k.default,{message:"Login or Signup to read this article"})]})}},6982:function(e,t,n){"use strict";n.r(t);var s=n(885),a=n(2791),c=n(6871),o=n(184);t.default=function(e){var t=e.message,i=e.notFound,r=(0,c.s0)(),l=(0,a.useState)(4),u=(0,s.Z)(l,2),d=u[0],m=u[1];return(0,a.useEffect)((function(){setTimeout((function(){m((function(e){return e-1}))}),2e3),i&&!d&&r("/")}),[i,d]),(0,o.jsxs)("div",{className:"article-not-found-page",children:[(0,o.jsx)("p",{className:"text",children:t||"Redirecting in ".concat(d," secs...")}),(0,o.jsx)("img",{src:n(4421),alt:"not found"})]})}},4457:function(e,t,n){"use strict";n.d(t,{GW:function(){return r},Ix:function(){return l},bv:function(){return i},uo:function(){return u}});var s=n(4165),a=n(5861),c=n(4569),o=n.n(c),i=function(e,t){var n=e.target;t({type:"UPDATE_PROPERTY",key:n.name,value:n.value})},r=function(e,t){var n=[];e&&e.response&&(e.response.data&&e.response.data instanceof Array?n=e.response.data:e.response.statusText&&n.push(e.response.statusText)),e.message&&0===n.length&&n.push(e.message),t({type:"SET_ERROR",errors:n})},l=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t,n,a){var c,i;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/ovecjoe/image/upload",(c=new FormData).append("file",t),c.append("upload_preset","chiblogger"),c.append("cloud_name","ovecjoe"),e.prev=5,e.next=8,o().post("https://api.cloudinary.com/v1_1/ovecjoe/image/upload",c);case 8:return i=e.sent,n({type:"UPDATE_PHOTO",photoUrl:i.data.url}),e.abrupt("return",i.data.url);case 13:e.prev=13,e.t0=e.catch(5),r(e.t0,a);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n,s){return e.apply(this,arguments)}}(),u=function(e){var t=new Date(e),n=new Date,s=n.getFullYear()-t.getFullYear();return s?"".concat(s," years ago"):(s=n.getMonth()-t.getMonth())?"".concat(s," months ago"):(s=n.getDay()-t.getDay())?"".concat(s," days ago"):(s=n.getHours()-t.getHours())?"".concat(s," hours ago"):(s=n.getMinutes()-t.getMinutes())?"".concat(s," minutes ago"):(s=n.getSeconds()-t.getSeconds(),"".concat(s," seconds ago"))}},7076:function(e,t,n){var s={"./en/index":3039};function a(e){var t=c(e);return n(t)}function c(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=c,e.exports=a,a.id=7076},4421:function(e,t,n){"use strict";e.exports=n.p+"static/media/not-found.8a85ca75a79d31d9834e.png"}}]);
//# sourceMappingURL=44.6d893ba3.chunk.js.map