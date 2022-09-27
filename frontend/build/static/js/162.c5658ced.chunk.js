"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[162],{3764:function(e,t,s){s.d(t,{Z:function(){return p}});var a=s(4942),n=s(1413),r=s(885),i=s(6355),c=s(2791),o=s(4569),l=s.n(o),u=s(4457),d=s(4335),h=s(5928),m=s(184),p=function(){var e=(0,c.useState)({firstName:"",email:"",message:""}),t=(0,r.Z)(e,2),s=t[0],o=t[1],p=(0,c.useContext)(d.x).projectDispatcher,x=(0,c.useContext)(h.S).userData,f={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(x.token)}},g=function(e){var t=e.target,s=t.name,r=t.value;o((function(e){return(0,n.Z)((0,n.Z)({},e),{},(0,a.Z)({},s,r))}))};return(0,m.jsxs)("footer",{className:"App__footer",children:[(0,m.jsxs)("form",{className:"contact-form",method:"POST",onSubmit:function(e){e.preventDefault(),l().post("/api/notifications",s,f).then((function(e){var t=e.data;p({type:"SET_MESSAGE",message:"".concat(t.message," Ticket ID: ").concat(t.notificationId)}),o({firstName:"",email:"",message:""})})).catch((function(e){return(0,u.GW)(e,p)}))},children:[(0,m.jsx)("h2",{className:"form-title",children:"Contact Form"}),(0,m.jsx)("label",{htmlFor:"first-name",children:"Enter Your First Name:"}),(0,m.jsx)("input",{type:"text",placeholder:"First Name e.g John",name:"firstName",value:s.firstName,onChange:g,id:"first-name",required:!0}),(0,m.jsx)("label",{htmlFor:"email",children:"Enter Your Email:"}),(0,m.jsx)("input",{type:"email",placeholder:"Email e.g. xyz@gmail.com",name:"email",value:s.email,onChange:g,id:"email",required:!0}),(0,m.jsx)("label",{htmlFor:"message",children:"Enter Your Message:"}),(0,m.jsx)("textarea",{placeholder:"Your Message",name:"message",value:s.message,onChange:g,id:"message",required:!0}),(0,m.jsx)("button",{children:"Send Message"})]}),(0,m.jsxs)("div",{className:"connection-card",children:[(0,m.jsx)("p",{children:"Wanna reach out to me via social links? Choose anyone below."}),(0,m.jsxs)("div",{className:"social-links",children:[(0,m.jsx)("a",{href:"https://linkedin.com",children:(0,m.jsx)(i.ltd,{})}),(0,m.jsx)("a",{href:"https://instagram.com",children:(0,m.jsx)(i.Zf_,{})}),(0,m.jsx)("a",{href:"https://twitter.com",children:(0,m.jsx)(i.fWC,{})}),(0,m.jsx)("a",{href:"https://facebook.com",children:(0,m.jsx)(i.sAh,{})})]})]})]})}},7162:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});var a=s(885),n=s(6871),r=s(2791),i=s(4569),c=s.n(i),o=s(3540),l=s(6566),u=s(6355),d=s(4457),h=s(184),m=function(e){var t=e.categorizedArticles,s=e.setRandomArticle;return(0,h.jsxs)("div",{className:"articles-container",children:[t.map((function(e){return(0,h.jsxs)("article",{className:"post-card",onClick:function(){return function(e){"object"===typeof e&&Object.keys(e).length>0&&s(e)}(e)},children:[(0,h.jsx)("img",{src:e.selectedFiles[0],alt:e.title}),(0,h.jsxs)("div",{className:"post-info",children:[(0,h.jsx)("span",{className:"timestamp",children:(0,d.uo)(e.createdOn)}),(0,h.jsx)("h4",{className:"headline",children:e.title}),(0,h.jsx)("span",{className:"author",children:e.creator.username})]})]},e._id)})),!t.length&&(0,h.jsxs)("div",{className:"no-article",children:[(0,h.jsx)(u.Ftr,{}),"Empty!"]})]})},p=s(3764),x=s(9692),f=s(4335),g=s(5928),j=function(){var e,t,i,j=(0,r.useContext)(x.n).articles,v=(0,r.useContext)(f.x).projectDispatcher,N=(0,r.useContext)(g.S).userData,y=(0,r.useState)([]),b=(0,a.Z)(y,2),w=b[0],C=b[1],k=(0,r.useState)("latest"),S=(0,a.Z)(k,2),E=S[0],A=S[1],F=(0,r.useState)((function(){return Math.floor(Math.random()*j.length)})),M=(0,a.Z)(F,1)[0],Z=(0,r.useState)(j.filter((function(e){return e.published}))[M]),_=(0,a.Z)(Z,2),D=_[0],T=_[1],O=(0,n.s0)(),P=function(e){var t=e.target.id;A((function(e){return e!==t?t:e}))},Y=function(e){return E===e?"active":""};return(0,r.useEffect)((function(){var e=j.filter((function(e){return e.published}));if("popular"===E)c().get("/api/users").then((function(t){var s=t.data.length;C(e.filter((function(e){return e.likes>=Math.ceil(s/4)})))})).catch((function(e){(0,d.GW)(e,v)}));else{C(e.filter((function(e){return new Date(e.createdOn).getUTCMilliseconds()<=6048e5})))}}),[j,E]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("main",{className:"App__home",children:[(0,h.jsxs)("section",{className:"hero-section",children:[(0,h.jsxs)("div",{className:"left-card",children:[(0,h.jsxs)("h2",{className:"title",children:[(0,h.jsx)("span",{className:"green-text",children:"CHI-Blogger"})," | Everything about ",(0,h.jsx)("span",{className:"green-text",children:"Health Fitness"})]}),(0,h.jsxs)("article",{className:"content",children:[(0,h.jsxs)("p",{children:["Welcome",(0,h.jsx)("span",{className:"red-text",children:(null===N||void 0===N?void 0:N.username)&&" ".concat(N.username)}),"! You are in the right place. ",(0,h.jsx)("span",{className:"red-text",children:"Health fitness"})," is our language here. Explore around, read our articles, and watch yourself grow healthwise!"]}),(0,h.jsxs)("p",{className:"tooltip",children:["Look above... The ",(0,h.jsx)("span",{className:"green-text",children:"Learn"})," tab takes you to a page where you can consume daily health fitness tips and advices to help you grow. The"," ",(0,h.jsx)("span",{className:"green-text",children:"About"})," tab gives you more insights about this platform."]})]})]}),(0,h.jsxs)("div",{className:"right-card",children:[(0,h.jsxs)("div",{className:"left",children:[(0,h.jsx)("img",{src:s(3655),alt:"hero sample 1"}),(0,h.jsx)("img",{src:s(6294),alt:"hero sample 2"})]}),(0,h.jsx)("div",{className:"right",children:(0,h.jsx)("img",{src:s(2723),alt:"hero sample 3"})})]})]}),(0,h.jsxs)("section",{className:"posts-container",children:[(0,h.jsxs)("div",{className:"left-container",children:[(0,h.jsxs)("ul",{className:"category-types",children:[(0,h.jsx)("li",{className:Y("latest"),onClick:P,id:"latest",children:"Latest"}),(0,h.jsx)("li",{className:Y("popular"),onClick:P,id:"popular",children:"Popular"})]}),(0,h.jsx)(m,{categorizedArticles:w,setRandomArticle:T})]}),(0,h.jsx)("div",{className:"right-container",children:D?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"featured-post-info",children:[(0,h.jsxs)("div",{className:"left",children:[null!==(e=D.creator)&&void 0!==e&&e.photo?(0,h.jsx)("img",{src:D.creator.photo,alt:D.creator.username}):(0,h.jsx)("span",{className:"without-photo",children:null===(t=D.creator)||void 0===t||null===(i=t.username)||void 0===i?void 0:i[0].toUpperCase()}),(0,h.jsxs)("p",{children:["By ",(0,h.jsx)("span",{className:"author",children:D.creator.username})]}),(0,h.jsx)("span",{className:"timestamp",children:(0,d.uo)(D.createdOn)})]}),(0,h.jsx)("button",{className:"share-btn",disabled:!0,children:"Share"})]}),(0,h.jsx)("h1",{className:"post-title",children:D.title}),(0,h.jsx)("img",{src:D.selectedFiles[0],alt:D.title}),(0,h.jsx)(l.Z,{lines:4,children:(0,h.jsx)("article",{className:"article-overview",children:(0,o.ZP)(D.content)})}),(0,h.jsxs)("button",{className:"view-more",onClick:function(){return D._id,void(null!==N&&void 0!==N&&N.username?O("/articles/".concat(D.slugName)):(0,d.GW)({message:"Signup or Login to View More..."},v))},children:["View More ",(0,h.jsx)(u.z5B,{})]})]}):(0,h.jsxs)("article",{style:{color:"rgb(12, 93, 12)",fontSize:"calc(15px + 1vmin)",textAlign:"center",margin:"auto",fontFamily:"'Mochiy Pop P One', sans-serif"},children:[(0,h.jsx)("span",{style:{color:"maroon"},children:"No Article At The Moment,"})," ","You will be notified when a new article is published by the admin."]})})]})]}),(0,h.jsx)(p.Z,{})]})}},4457:function(e,t,s){s.d(t,{GW:function(){return o},Ix:function(){return l},bv:function(){return c},uo:function(){return u}});var a=s(4165),n=s(5861),r=s(4569),i=s.n(r),c=function(e,t){var s=e.target;t({type:"UPDATE_PROPERTY",key:s.name,value:s.value})},o=function(e,t){var s=[];e&&e.response&&(e.response.data&&e.response.data instanceof Array?s=e.response.data:e.response.statusText&&s.push(e.response.statusText)),e.message&&0===s.length&&s.push(e.message),t({type:"SET_ERROR",errors:s})},l=function(){var e=(0,n.Z)((0,a.Z)().mark((function e(t,s,n){var r,c;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/ovecjoe/image/upload",(r=new FormData).append("file",t),r.append("upload_preset","chiblogger"),r.append("cloud_name","ovecjoe"),e.prev=5,e.next=8,i().post("https://api.cloudinary.com/v1_1/ovecjoe/image/upload",r);case 8:return c=e.sent,s({type:"UPDATE_PHOTO",photoUrl:c.data.url}),e.abrupt("return",c.data.url);case 13:e.prev=13,e.t0=e.catch(5),o(e.t0,n);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,s,a){return e.apply(this,arguments)}}(),u=function(e){var t=new Date(e),s=new Date,a=s.getFullYear()-t.getFullYear();return a?"".concat(a," years ago"):(a=s.getMonth()-t.getMonth())?"".concat(a," months ago"):(a=s.getDay()-t.getDay())?"".concat(a," days ago"):(a=s.getHours()-t.getHours())?"".concat(a," hours ago"):(a=s.getMinutes()-t.getMinutes())?"".concat(a," minutes ago"):(a=s.getSeconds()-t.getSeconds(),"".concat(a," seconds ago"))}},3655:function(e,t,s){e.exports=s.p+"static/media/img-1.e6f82d95234dcdeafc88.jpg"},2723:function(e,t,s){e.exports=s.p+"static/media/img-2.0386a6acd62e81933265.jpg"},6294:function(e,t,s){e.exports=s.p+"static/media/img-3.803dd30fd4798423ccb9.jpg"}}]);
//# sourceMappingURL=162.c5658ced.chunk.js.map