(this["webpackJsonpreact-materialui-navbar"]=this["webpackJsonpreact-materialui-navbar"]||[]).push([[0],{307:function(e,t,n){},324:function(e,t){},326:function(e,t){},337:function(e,t){},339:function(e,t){},366:function(e,t){},368:function(e,t){},369:function(e,t){},375:function(e,t){},377:function(e,t){},395:function(e,t){},397:function(e,t){},409:function(e,t){},412:function(e,t){},479:function(e,t,n){"use strict";n.r(t);var a=n(9),r=n(0),i=n.n(r),s=n(23),c=n.n(s),o=(n(307),n(128)),l=n(22),d=n(526),u=n(534),j=n(533),p=n(143),b=n(103),m=n(140),f=n(80),h=n(11),O=n(78),g=n(540),x=n(528),y=n(530),w=n(531),v=n(532),S=n(271),B=n.n(S),k=n(272),F=n.n(k),_=n(273),C=n.n(_),N=n(541),P=n(535),q=n(536),A=240,I=Object(d.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(A,"px)"),marginLeft:A,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:A,flexShrink:0},drawerPaper:{width:A},drawerHeader:Object(f.a)(Object(f.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));function R(e){var t=I(),n=Object(O.a)(),r=i.a.useState(!1),s=Object(m.a)(r,2),c=s[0],l=s[1];return Object(a.jsxs)("div",{className:t.root,children:[Object(a.jsx)(x.a,{}),Object(a.jsx)(y.a,{position:"fixed",className:Object(h.a)(t.appBar,Object(b.a)({},t.appBarShift,c)),children:Object(a.jsxs)(w.a,{children:[Object(a.jsx)(v.a,{style:{color:"#30F2F2"},"aria-label":"open drawer",onClick:function(){l(!0)},edge:"start",className:Object(h.a)(t.menuButton,c&&t.hide),children:Object(a.jsx)(B.a,{})}),Object(a.jsx)(p.a,{variant:"h6",noWrap:!0,children:"React Material-UI Starter App"})]})}),Object(a.jsxs)(g.a,{className:t.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:t.drawerPaper},children:[Object(a.jsx)("div",{className:t.drawerHeader,children:Object(a.jsx)(v.a,{onClick:function(){l(!1)},children:"ltr"===n.direction?Object(a.jsx)(F.a,{}):Object(a.jsx)(C.a,{})})}),Object(a.jsx)(j.a,{}),Object(a.jsx)(u.a,{children:Object(a.jsxs)(N.a,{children:[Object(a.jsxs)(P.a,{children:[" ",Object(a.jsxs)("span",{role:"img","aria-label":"home",children:[" ","\ud83c\udfe1"," "]})]}),Object(a.jsx)(q.a,{children:Object(a.jsx)(o.b,{style:{color:"teal",textDecoration:"none"},to:"/",children:"Home"})})]})})]}),Object(a.jsxs)("main",{className:Object(h.a)(t.content,Object(b.a)({},t.contentShift,c)),children:[Object(a.jsx)("div",{className:t.drawerHeader}),e.children]})]})}var E=n(537),H=Object(d.a)((function(e){return{root:{width:"80vw",backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}));var L=function(){var e=H();return Object(a.jsx)(R,{children:Object(a.jsxs)(E.a,{children:[Object(a.jsx)(p.a,{style:{color:"teal",fontFamily:"monseratt"},variant:"h2",gutterBottom:!0,children:"Home Page !!!!!!!!!!!!!!!!!!!!!!!!!"}),Object(a.jsx)(p.a,{style:{color:"grey",fontFamily:"Roboto"},variant:"h5",gutterBottom:!0,children:"Table of Contents:"}),Object(a.jsx)(u.a,{className:e.root,children:Object(a.jsx)(j.a,{variant:"inset",component:"li"})})]})})},T=Object(d.a)((function(e){return{footer:{backgroundColor:e.palette.common.primary,width:"100%",height:"3em",zIndex:1302,position:"relative",marginTop:"2em"}}}));function z(){var e=T();return Object(a.jsx)("footer",{className:e.footer})}var D=n(539),M=n(284),J="#131A40",K="#17AEBF",G="#D9042B",U=Object(M.a)({palette:{common:{primary:J,secondary:"#355B8C",error:G},primary:{main:J},secondary:{main:K},error:{main:"#081826"},warning:{main:G},info:{main:"#30F2F2"},success:{main:K}}}),W=n(84),Y=n.n(W),Q=n(129),V=n(478),X=Object(V.b)({models:{Portfolio:{name:"Portfolio",fields:{id:{name:"id",isArray:!1,type:"ID",isRequired:!0,attributes:[]},title:{name:"title",isArray:!1,type:"String",isRequired:!0,attributes:[]},description:{name:"description",isArray:!1,type:"String",isRequired:!1,attributes:[]},url:{name:"url",isArray:!1,type:"String",isRequired:!1,attributes:[]}},syncable:!0,pluralName:"Portfolios",attributes:[{type:"model",properties:{}},{type:"auth",properties:{rules:[{allow:"public",operations:["create","update","delete","read"]}]}}]}},enums:{},nonModels:{},version:"62e200f67dab0447fa86963a3bf56cda"}).Portfolio,Z=function(){var e=Object(r.useState)([]),t=Object(m.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){(function(){var e=Object(Q.a)(Y.a.mark((function e(){var t;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.a.query(X);case 2:t=e.sent,i(t),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)("div",{children:n.map((function(e){return Object(a.jsx)("h1",{children:e.title},e.id)}))})},$=function(){return Object(a.jsx)(D.a,{theme:U,children:Object(a.jsxs)(o.a,{children:[Object(a.jsx)(R,{}),Object(a.jsxs)(l.d,{children:[Object(a.jsx)(l.b,{exact:!0,path:"/",component:L}),Object(a.jsx)(l.b,{exact:!0,path:"/projects",component:Z}),Object(a.jsx)(l.a,{to:"/"})]}),Object(a.jsx)(z,{})]})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,542)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),i(e),s(e)}))},te={aws_project_region:"us-east-1",aws_appsync_graphqlEndpoint:"https://5yo3sv6dqnc6tgkem3jismbvue.appsync-api.us-east-1.amazonaws.com/graphql",aws_appsync_region:"us-east-1",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-vhgdtyr2kng5pdw6qzm2wlwzke"};n(281).default.configure(te),c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)($,{})}),document.getElementById("root")),ee()}},[[479,1,2]]]);
//# sourceMappingURL=main.1386fd1d.chunk.js.map