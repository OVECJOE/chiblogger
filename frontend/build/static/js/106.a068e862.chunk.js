"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[106],{1106:function(e,r,t){t.r(r),t.d(r,{default:function(){return c}});var s=t(3504),a=t(6871),i=t(292),n=t(184),c=function(){return(0,n.jsx)(i.Z,{children:(0,n.jsxs)("main",{className:"dashboard",children:[(0,n.jsxs)("section",{className:"nav-section",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(s.rU,{to:"/dashboard",children:"Notifications"}),(0,n.jsx)("div",{className:"line-stroke"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.rU,{to:"/dashboard/new-article",children:"Add New Article"}),(0,n.jsx)("div",{className:"line-stroke"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.rU,{to:"/dashboard/articles",children:"My Articles"}),(0,n.jsx)("div",{className:"line-stroke"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(s.rU,{to:"/dashboard/profile",children:"My Profile"}),(0,n.jsx)("div",{className:"line-stroke"})]})]}),(0,n.jsx)(a.j3,{})]})})}},292:function(e,r,t){t.d(r,{W:function(){return o},Z:function(){return u}});var s=t(885),a=t(2791),i=t(2982),n=t(4942),c=t(1413),l=function(e,r){switch(r.type){case"UPDATE_PROPERTY":return r.article?(0,c.Z)((0,c.Z)({},e),r.article):(0,c.Z)((0,c.Z)({},e),{},(0,n.Z)({},r.key,r.value));case"UPDATE_PHOTO":var t=(0,i.Z)(e.articleImages);return t.push(r.photoUrl),(0,c.Z)((0,c.Z)({},e),{},{articleImages:t.slice(-5)});case"CLEAR_PHOTOS":return(0,c.Z)((0,c.Z)({},e),{},{articleImages:[]});case"TOGGLE_PUBLISHED":return(0,c.Z)((0,c.Z)({},e),{},{published:r.published});case"CLEAR_ARTICLE_DATA":return r.default;default:return e}},d=t(184),o=(0,a.createContext)(),u=function(e){var r=function(){return{title:"",slugName:"",articleImages:[],content:"",premiumRead:!1,creator:"",published:!1,categories:[]}},t=(0,a.useReducer)(l,JSON.parse(sessionStorage.getItem("articleData"))||{title:"",slugName:"",articleImages:[],content:"",premiumRead:!1,creator:"",published:!1,categories:[]}),i=(0,s.Z)(t,2),n=i[0],c=i[1];return(0,a.useEffect)((function(){sessionStorage.setItem("articleData",JSON.stringify(n))}),[n]),(0,d.jsx)(o.Provider,{value:{defaultArticle:r,articleData:n,articleDispatcher:c},children:e.children})}}}]);
//# sourceMappingURL=106.a068e862.chunk.js.map