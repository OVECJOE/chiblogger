"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[321],{3764:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(4942),r=n(1413),s=n(885),o=n(6355),c=n(2791),i=n(4569),u=n.n(i),l=n(4457),m=n(4335),h=n(5928),d=n(184),p=function(){var e=(0,c.useState)({firstName:"",email:"",message:""}),t=(0,s.Z)(e,2),n=t[0],i=t[1],p=(0,c.useContext)(m.x).projectDispatcher,f=(0,c.useContext)(h.S).userData,g={headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(f.token)}},x=function(e){var t=e.target,n=t.name,s=t.value;i((function(e){return(0,r.Z)((0,r.Z)({},e),{},(0,a.Z)({},n,s))}))};return(0,d.jsxs)("footer",{className:"App__footer",children:[(0,d.jsxs)("form",{className:"contact-form",method:"POST",onSubmit:function(e){e.preventDefault(),u().post("/api/notifications",n,g).then((function(e){var t=e.data;p({type:"SET_MESSAGE",message:"".concat(t.message," Ticket ID: ").concat(t.notificationId)}),i({firstName:"",email:"",message:""})})).catch((function(e){return(0,l.GW)(e,p)}))},children:[(0,d.jsx)("h2",{className:"form-title",children:"Contact Form"}),(0,d.jsx)("label",{htmlFor:"first-name",children:"Enter Your First Name:"}),(0,d.jsx)("input",{type:"text",placeholder:"First Name e.g John",name:"firstName",value:n.firstName,onChange:x,id:"first-name",required:!0}),(0,d.jsx)("label",{htmlFor:"email",children:"Enter Your Email:"}),(0,d.jsx)("input",{type:"email",placeholder:"Email e.g. xyz@gmail.com",name:"email",value:n.email,onChange:x,id:"email",required:!0}),(0,d.jsx)("label",{htmlFor:"message",children:"Enter Your Message:"}),(0,d.jsx)("textarea",{placeholder:"Your Message",name:"message",value:n.message,onChange:x,id:"message",required:!0}),(0,d.jsx)("button",{children:"Send Message"})]}),(0,d.jsxs)("div",{className:"connection-card",children:[(0,d.jsx)("p",{children:"Wanna reach out to me via social links? Choose anyone below."}),(0,d.jsxs)("div",{className:"social-links",children:[(0,d.jsx)("a",{href:"https://linkedin.com",children:(0,d.jsx)(o.ltd,{})}),(0,d.jsx)("a",{href:"https://instagram.com",children:(0,d.jsx)(o.Zf_,{})}),(0,d.jsx)("a",{href:"https://twitter.com",children:(0,d.jsx)(o.fWC,{})}),(0,d.jsx)("a",{href:"https://facebook.com",children:(0,d.jsx)(o.sAh,{})})]})]})]})}},2321:function(e,t,n){n.r(t);var a=n(3764),r=n(184);t.default=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{children:"I am the learn page"}),(0,r.jsx)(a.Z,{})]})}},4457:function(e,t,n){n.d(t,{GW:function(){return i},Ix:function(){return u},bv:function(){return c},uo:function(){return l}});var a=n(4165),r=n(5861),s=n(4569),o=n.n(s),c=function(e,t){var n=e.target;t({type:"UPDATE_PROPERTY",key:n.name,value:n.value})},i=function(e,t){var n=[];e&&e.response&&(e.response.data&&e.response.data instanceof Array?n=e.response.data:e.response.statusText&&n.push(e.response.statusText)),e.message&&0===n.length&&n.push(e.message),t({type:"SET_ERROR",errors:n})},u=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(t,n,r){var s,c,u;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_UPLOAD_IMAGE_URL,(c=new FormData).append("file",t),c.append("upload_preset","chiblogger"),c.append("cloud_name","ovecjoe"),e.prev=5,e.next=8,o().post(s,c);case 8:return u=e.sent,n({type:"UPDATE_PHOTO",photoUrl:u.data.url}),e.abrupt("return",u.data.url);case 13:e.prev=13,e.t0=e.catch(5),i(e.t0,r);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n,a){return e.apply(this,arguments)}}(),l=function(e){var t=new Date(e),n=new Date,a=n.getFullYear()-t.getFullYear();return a?"".concat(a," years ago"):(a=n.getMonth()-t.getMonth())?"".concat(a," months ago"):(a=n.getDay()-t.getDay())?"".concat(a," days ago"):(a=n.getHours()-t.getHours())?"".concat(a," hours ago"):(a=n.getMinutes()-t.getMinutes())?"".concat(a," minutes ago"):(a=n.getSeconds()-t.getSeconds(),"".concat(a," seconds ago"))}}}]);
//# sourceMappingURL=321.a5765e1b.chunk.js.map