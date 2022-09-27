"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[624],{3624:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(4942),s=t(1413),o=t(885),r=t(6355),i=t(2791),c=t(4569),u=t.n(c),l=t(5928),d=t(4335),p=t(4457),h=t(184),f=function(){var e=(0,i.useContext)(l.S),n=e.userData,t=e.userDispatcher,c=(0,i.useContext)(d.x).projectDispatcher,f=(0,i.useState)(!0),m=(0,o.Z)(f,2),v=m[0],w=m[1],g=(0,i.useState)({state:!1,newPassword:"",confirmPassword:""}),x=(0,o.Z)(g,2),j=x[0],y=x[1],b=(0,i.useState)(!1),P=(0,o.Z)(b,2),C=P[0],E=P[1],S=(0,i.useState)({}),N=(0,o.Z)(S,2),R=N[0],k=N[1],Z=function(e){var n=e.target,t=n.name,o=n.value;y((function(e){return(0,s.Z)((0,s.Z)({},e),{},(0,a.Z)({},t,o))}))},D=function(e){(0,p.bv)(e,t)};return(0,h.jsxs)("section",{className:"profile-section",children:[C&&(0,h.jsxs)("form",{className:"select-photo-card",onSubmit:function(e){e.preventDefault(),(0,p.Ix)(R,t,c).then((function(e){console.log(e),u().post("/api/users/upload-photo",{photo:e},{headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n.token)}}).then((function(e){t({type:"STORE_USER",user:e.data}),E(!1)})).catch((function(e){(0,p.GW)(e,c)}))})).catch((function(e){(0,p.GW)(e,c)}))},children:[(0,h.jsx)("label",{htmlFor:"select-photo",children:"Select a photo:"}),(0,h.jsx)("input",{type:"file",accept:"image/png, image/jpeg",onChange:function(e){var n=e.target.files[0];k(n)}}),(0,h.jsx)("button",{children:"Upload"})]}),(0,h.jsxs)("div",{className:"profile-pic",children:[n.photo?(0,h.jsx)("img",{src:n.photo,alt:n.username}):(0,h.jsx)("div",{className:"no-photo",children:n.username&&n.username[0].toUpperCase()}),(0,h.jsx)(r.ffH,{onClick:function(){return E(!0)}})]}),(0,h.jsxs)("div",{className:"profile-info",children:[(0,h.jsxs)("span",{className:"input-edit",children:[v?"View":"Edit"," Mode ",(0,h.jsx)(r.ffH,{onClick:function(){return w((function(e){return!e}))}})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"username",children:"Username"}),(0,h.jsx)("div",{className:"edit-box",children:(0,h.jsx)("input",{type:"text",name:"username",value:n.username,onChange:D,disabled:v})})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("label",{htmlFor:"email",children:"Email"}),(0,h.jsx)("div",{className:"edit-box",children:(0,h.jsx)("input",{type:"email",name:"email",value:n.email,onChange:D,disabled:v})})]}),(0,h.jsx)("hr",{}),(0,h.jsxs)("div",{className:"pass-edit",children:[!j.state&&(0,h.jsx)("div",{className:"disable-pass-edit",children:(0,h.jsx)(r.ffH,{onClick:function(){return y((function(e){return(0,s.Z)((0,s.Z)({},e),{},{state:!e.state})}))}})}),(0,h.jsx)("label",{htmlFor:"new-password",children:"New Password"}),(0,h.jsx)("input",{type:"password",name:"newPassword",placeholder:"Enter New Password",onChange:Z,value:j.newPassword,id:"new-password"}),(0,h.jsx)("label",{htmlFor:"confirm-password",children:"Confirm Password"}),(0,h.jsx)("input",{type:"password",name:"confirmPassword",placeholder:"Confirm New Password",onChange:Z,value:j.confirmPassword,id:"confirm-password"})]})]}),(0,h.jsx)("button",{onClick:function(){var e=Object.values(j).every((function(e){return e})),a={username:n.username,email:n.email};if(e){if(j.newPassword!==j.confirmPassword){return void(0,p.GW)({message:"Given passwords not equal"},c)}a.password=j.newPassword}u().post("/api/users/update-admin",a,{headers:{"Content-type":"application/json",Authorization:"Bearer ".concat(n.token)}}).then((function(e){t({type:"STORE_USER",user:e.data})})).catch((function(e){(0,p.GW)(e,c)})),y({state:!1,newPassword:"",confirmPassword:""}),setTimeout((function(){c({type:"REMOVE_ERROR"})}),4e3)},children:"Save Changes"})]})}},4457:function(e,n,t){t.d(n,{GW:function(){return c},Ix:function(){return u},bv:function(){return i},uo:function(){return l}});var a=t(4165),s=t(5861),o=t(4569),r=t.n(o),i=function(e,n){var t=e.target;n({type:"UPDATE_PROPERTY",key:t.name,value:t.value})},c=function(e,n){var t=[];e&&e.response&&(e.response.data&&e.response.data instanceof Array?t=e.response.data:e.response.statusText&&t.push(e.response.statusText)),e.message&&0===t.length&&t.push(e.message),n({type:"SET_ERROR",errors:t})},u=function(){var e=(0,s.Z)((0,a.Z)().mark((function e(n,t,s){var o,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/ovecjoe/image/upload",(o=new FormData).append("file",n),o.append("upload_preset","chiblogger"),o.append("cloud_name","ovecjoe"),e.prev=5,e.next=8,r().post("https://api.cloudinary.com/v1_1/ovecjoe/image/upload",o);case 8:return i=e.sent,t({type:"UPDATE_PHOTO",photoUrl:i.data.url}),e.abrupt("return",i.data.url);case 13:e.prev=13,e.t0=e.catch(5),c(e.t0,s);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(n,t,a){return e.apply(this,arguments)}}(),l=function(e){var n=new Date(e),t=new Date,a=t.getFullYear()-n.getFullYear();return a?"".concat(a," years ago"):(a=t.getMonth()-n.getMonth())?"".concat(a," months ago"):(a=t.getDay()-n.getDay())?"".concat(a," days ago"):(a=t.getHours()-n.getHours())?"".concat(a," hours ago"):(a=t.getMinutes()-n.getMinutes())?"".concat(a," minutes ago"):(a=t.getSeconds()-n.getSeconds(),"".concat(a," seconds ago"))}}}]);
//# sourceMappingURL=624.90f47526.chunk.js.map