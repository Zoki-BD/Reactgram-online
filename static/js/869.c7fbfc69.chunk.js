"use strict";(self.webpackChunkreactgram_tailwindcss=self.webpackChunkreactgram_tailwindcss||[]).push([[869],{3287:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(2791),s=n(9271),a=n(1523),o=n(2303),c=n(6307),i=n(8155),u=n(3543),l=n(6920),d=n(184);function m(){var e=(0,r.useContext)(c.Z).user,t=(0,l.Z)(null===e||void 0===e?void 0:e.uid).user,n=(0,r.useContext)(o.Z).firebase,m=(0,s.k6)();return(0,d.jsx)("header",{className:"h-16 bg-white border-b border-gray-primary mb-8",children:(0,d.jsx)("div",{className:"container mx-auto max-w-screen-lg h-full",children:(0,d.jsxs)("div",{className:"flex justify-between h-full",children:[(0,d.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items cursor-pointer",children:(0,d.jsx)("h1",{className:"flex justify-center w-full",children:(0,d.jsx)(a.rU,{to:i.h1,"aria-label":"Instagram logo",children:(0,d.jsx)("img",{src:"/images/logo.png",alt:"Instagram",className:"mt-2 w-6/12"})})})}),(0,d.jsx)("div",{className:"text-gray-700 text-center flex items-center align-items",children:e?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.rU,{to:i.h1,"aria-label":"Dashboard",children:(0,d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"})})}),(0,d.jsx)("button",{type:"button",title:"Sign Out",onClick:function(){n.auth().signOut(),m.push(i.ym)},onKeyDown:function(e){"Enter"===e.key&&(n.auth().signOut(),m.push(i.ym))},children:(0,d.jsx)("svg",{className:"w-8 mr-6 text-black-light cursor-pointer",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"})})}),t&&(0,d.jsx)("div",{className:"flex items-center cursor-pointer",children:(0,d.jsx)(a.rU,{to:"/p/".concat(null===t||void 0===t?void 0:t.username),children:(0,d.jsx)("img",{className:"rounded-full h-8 w-8 flex",src:"/images/avatars/".concat(null===t||void 0===t?void 0:t.username,".jpg"),alt:"".concat(null===t||void 0===t?void 0:t.username," profile"),onError:function(e){e.target.src=u.h}})})})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.rU,{to:i.ym,children:(0,d.jsx)("button",{type:"button",className:"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8",children:"Log In"})}),(0,d.jsx)(a.rU,{to:i._5,children:(0,d.jsx)("button",{type:"button",className:"font-bold text-sm rounded text-blue-medium w-20 h-8",children:"Sign Up"})})]})})]})})})}},3543:function(e,t,n){n.d(t,{h:function(){return r}});var r="/images/avatars/default.png"},6920:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(5861),s=n(885),a=n(7757),o=n.n(a),c=n(2791),i=n(7606);function u(e){var t=(0,c.useState)(),n=(0,s.Z)(t,2),a=n[0],u=n[1];return(0,c.useEffect)((function(){function t(){return t=(0,r.Z)(o().mark((function e(t){var n,r,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.xD)(t);case 2:n=e.sent,r=(0,s.Z)(n,1),a=r[0],u(a||{});case 6:case"end":return e.stop()}}),e)}))),t.apply(this,arguments)}e&&function(e){t.apply(this,arguments)}(e)}),[e]),{user:a,setActiveUser:u}}},1869:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(2791),s=n(3287),a=n(4341),o=(0,r.createContext)(null),c=n(5861),i=n(885),u=n(7757),l=n.n(u),d=n(7606);var m=n(1523),f=n(184);function p(e){var t=e.username;return(0,f.jsx)("div",{className:"flex border-b border-gray-primary h-4 p-4 py-8",children:(0,f.jsx)("div",{className:"flex items-center",children:(0,f.jsxs)(m.rU,{to:"/p/".concat(t),className:"flex items-center",children:[(0,f.jsx)("img",{className:"rounded-full h-8 w-8 flex mr-3",src:"/images/avatars/".concat(t,".jpg"),alt:"".concat(t," profile picture")}),(0,f.jsx)("p",{className:"font-bold",children:t})]})})})}function x(e){var t=e.src,n=e.caption;return(0,f.jsx)("img",{src:t,alt:n})}var h=n(2303),v=n(6307);function g(e){var t=e.docId,n=e.totalLikes,s=e.likedPhoto,a=e.handleFocus,o=(0,r.useContext)(v.Z).user.uid,u=(0,r.useState)(s),d=(0,i.Z)(u,2),m=d[0],p=d[1],x=(0,r.useState)(n),g=(0,i.Z)(x,2),w=g[0],j=g[1],y=(0,r.useContext)(h.Z),b=y.firebase,N=y.FieldValue,k=function(){var e=(0,c.Z)(l().mark((function e(){return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p((function(e){return!e})),e.next=3,b.firestore().collection("photos").doc(t).update({likes:m?N.arrayRemove(o):N.arrayUnion(o)});case 3:j((function(e){return m?e-1:e+1}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("div",{className:"flex justify-between p-4",children:(0,f.jsxs)("div",{className:"flex",children:[(0,f.jsx)("svg",{onClick:k,onKeyDown:function(e){"Enter"===e.key&&k()},xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,className:"w-8 mr-4 select-none cursor-pointer focus:outline-none ".concat(m?"fill-red text-red-primary":"text-black-light"),children:(0,f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"})}),(0,f.jsx)("svg",{onClick:a,onKeyDown:function(e){"Enter"===e.key&&a()},className:"w-8 text-black-light select-none cursor-pointer focus:outline-none",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",tabIndex:0,children:(0,f.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"})})]})}),(0,f.jsx)("div",{className:"p-4 py-0",children:(0,f.jsx)("p",{className:"font-bold",children:"".concat(w,1===w?" like":" likes")})})]})}function w(e){var t=e.caption,n=e.username;return(0,f.jsxs)("div",{className:"p-4 pt-2 pb-1",children:[(0,f.jsx)("span",{className:"mr-1 font-bold",children:n}),(0,f.jsx)("span",{className:"italic",children:t})]})}var j=n(1777),y=n(2982);function b(e){var t=e.docId,n=e.comments,s=e.setComments,a=e.commentInput,o=(0,r.useState)(""),c=(0,i.Z)(o,2),u=c[0],l=c[1],d=(0,r.useContext)(h.Z),m=d.firebase,p=d.FieldValue,x=(0,r.useContext)(v.Z).user.displayName,g=function(e){return e.preventDefault(),s([].concat((0,y.Z)(n),[{displayName:x,comment:u}])),l(""),m.firestore().collection("photos").doc(t).update({comments:p.arrayUnion({displayName:x,comment:u})})};return(0,f.jsx)("div",{className:"border-t border-gray-primary",children:(0,f.jsxs)("form",{className:"flex justify-between pl-0 pr-5",method:"POST",onSubmit:function(e){return u.length>=1?g(e):e.preventDefault()},children:[(0,f.jsx)("input",{"aria-label":"Add a comment",autoComplete:"off",className:"text-sm text-gray-base w-full mr-3 py-5 px-4",type:"text",name:"add-comment",placeholder:"Add a comment...",value:u,onChange:function(e){var t=e.target;return l(t.value)},ref:a}),(0,f.jsx)("button",{className:"text-sm font-bold text-blue-medium ".concat(!u&&"opacity-25"),type:"button",disabled:u.length<1,onClick:g,children:"Post"})]})})}function N(e){var t=e.docId,n=e.comments,s=e.posted,a=e.commentInput,o=(0,r.useState)(n),c=(0,i.Z)(o,2),u=c[0],l=c[1],d=(0,r.useState)(3),p=(0,i.Z)(d,2),x=p[0],h=p[1],v=function(){h(x+3)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"p-4 pt-1 pb-4",children:[u.slice(0,x).map((function(e){return(0,f.jsxs)("p",{className:"mb-1",children:[(0,f.jsx)(m.rU,{to:"/p/".concat(e.displayName),children:(0,f.jsxs)("span",{className:"mr-1 font-bold",children:[e.displayName," "]})}),(0,f.jsxs)("span",{children:[" ",e.comment]})]},"".concat(e.comment,"-").concat(e.displayName))})),u.length>=3&&x<u.length&&(0,f.jsx)("button",{className:"text-sm text-gray-base mb-1 cursor-pointer focus:outline-none",type:"button",onClick:v,onKeyDown:function(e){"Enter"===e.key&&v()},children:"View more comments"}),(0,f.jsxs)("p",{className:"text-gray-base uppercase text-xs mt-2",children:[(0,j.Z)(s,new Date)," ago"]})]}),(0,f.jsx)(b,{docId:t,comments:u,setComments:l,commentInput:a})]})}function k(e){var t=e.content,n=(0,r.useRef)(null);return(0,f.jsxs)("div",{className:"rounded col-span-4 border bg-white border-gray-primary mb-12",children:[(0,f.jsx)(p,{username:t.username}),(0,f.jsx)(x,{src:t.imageSrc,caption:t.caption}),(0,f.jsx)(g,{docId:t.docId,totalLikes:t.likes.length,likedPhoto:t.userLikedPhoto,handleFocus:function(){return n.current.focus()}}),(0,f.jsx)(w,{caption:t.caption,username:t.username}),(0,f.jsx)(N,{docId:t.docId,comments:t.comments,posted:t.dateCreated,commentInput:n})]})}function Z(){var e=(0,r.useContext)(o).user,t=(0,r.useContext)(o).user,n=(t=void 0===t?{}:t).following,s=function(e){var t=(0,r.useState)(null),n=(0,i.Z)(t,2),s=n[0],a=n[1];return(0,r.useEffect)((function(){function t(){return(t=(0,c.Z)(l().mark((function t(){var n,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!((null===e||void 0===e||null===(n=e.following)||void 0===n?void 0:n.length)>0)){t.next=6;break}return t.next=3,(0,d.wP)(e.userId,e.following);case 3:(r=t.sent).sort((function(e,t){return t.dateCreated-e.dateCreated})),a(r);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[null===e||void 0===e?void 0:e.userId,null===e||void 0===e?void 0:e.following]),{photos:s}}(e),u=s.photos;return(0,f.jsx)("div",{className:"container col-span-2",children:void 0===n?(0,f.jsx)(a.ZP,{count:2,width:640,height:500,className:"mb-5"}):0===n.length?(0,f.jsx)("p",{className:"flex justify-center font-bold",children:"Follow other people to see Photos"}):u?u.map((function(e){return(0,f.jsx)(k,{content:e},e.docId)})):null})}var I=n(3543);function C(e){var t=e.username,n=e.fullName;return t&&n?(0,f.jsxs)(m.rU,{to:"/p/".concat(t),className:"grid grid-cols-4 gap-4 mb-6 items-center",children:[(0,f.jsx)("div",{className:"flex items-center justify-between col-span-1",children:(0,f.jsx)("img",{className:"rounded-full w-16 flex mr-3",src:"/images/avatars/".concat(t,".jpg"),alt:"",onError:function(e){e.target.src=I.h}})}),(0,f.jsxs)("div",{className:"col-span-3",children:[(0,f.jsx)("p",{className:"font-bold text",children:t}),(0,f.jsx)("p",{className:"text-sm",children:n})]})]}):(0,f.jsx)(a.ZP,{count:1,height:61})}function U(e){var t=e.profileDocId,n=e.username,s=e.profileId,a=e.userId,u=e.loggedInUserDocId,p=(0,r.useState)(!1),x=(0,i.Z)(p,2),h=x[0],v=x[1],g=(0,r.useContext)(o).setActiveUser;function w(){return w=(0,c.Z)(l().mark((function e(){var n,r,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),e.next=3,(0,d.NS)(u,s,!1);case 3:return e.next=5,(0,d.T6)(t,a,!1);case 5:return e.next=7,(0,d.xD)(a);case 7:n=e.sent,r=(0,i.Z)(n,1),o=r[0],g(o);case 11:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}return h?null:(0,f.jsxs)("div",{className:"flex flex-row items-center align-items justify-between",children:[(0,f.jsxs)("div",{className:"flex items-center justify-between",children:[(0,f.jsx)("img",{className:"rounded-full w-8 flex mr-3",src:"/images/avatars/".concat(n,".jpg"),alt:"",onError:function(e){e.target.src="/images/avatars/default.png"}}),(0,f.jsx)(m.rU,{to:"/p/".concat(n),children:(0,f.jsx)("p",{className:"font-bold text-sm",children:n})})]}),(0,f.jsx)("button",{className:"text-xs font-bold text-blue-medium",type:"button",onClick:function(){return w.apply(this,arguments)},children:"Follow"})]})}function L(e){var t=e.userId,n=e.following,s=e.loggedInUserDocId,o=(0,r.useState)(null),u=(0,i.Z)(o,2),m=u[0],p=u[1];return(0,r.useEffect)((function(){function e(){return(e=(0,c.Z)(l().mark((function e(){var r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.ve)(t,n);case 2:r=e.sent,p(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}t&&function(){e.apply(this,arguments)}()}),[t]),m?m.length>0?(0,f.jsxs)("div",{className:"rounded flex flex-col",children:[(0,f.jsx)("div",{className:"text-sm flex items-center align-items justify-between mb-2",children:(0,f.jsx)("p",{className:"font-bold text-gray-base",children:"Suggestions for you"})}),(0,f.jsx)("div",{className:"mt-4 grid gap-5",children:m.map((function(e){return(0,f.jsx)(U,{profileDocId:e.docId,username:e.username,profileId:e.userId,userId:t,loggedInUserDocId:s},e.docId)}))})]}):null:(0,f.jsx)(a.ZP,{count:1,height:150,className:"mt-5"})}function D(){var e=(0,r.useContext)(o).user,t=(e=void 0===e?{}:e).docId,n=void 0===t?"":t,s=e.fullName,a=e.username,c=e.userId,i=e.following;return(0,f.jsxs)("div",{className:"p-4",children:[(0,f.jsx)(C,{username:a,fullName:s}),(0,f.jsx)(L,{userId:c,following:i,loggedInUserDocId:n})]})}var S=n(6920);function P(e){var t=e.user,n=(0,S.Z)(t.uid),a=n.user,c=n.setActiveUser;return(0,r.useEffect)((function(){document.title="Reactgram"}),[]),(0,f.jsx)(o.Provider,{value:{user:a,setActiveUser:c},children:(0,f.jsxs)("div",{className:"bg-gray-background",children:[(0,f.jsx)(s.Z,{}),(0,f.jsxs)("div",{className:"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg",children:[(0,f.jsx)(Z,{}),(0,f.jsx)(D,{})]})]})})}},7606:function(e,t,n){n.d(t,{$K:function(){return l},dQ:function(){return m},xD:function(){return p},ve:function(){return h},NS:function(){return g},T6:function(){return j},wP:function(){return b},oJ:function(){return k},IU:function(){return I},Gm:function(){return U}});var r=n(885),s=n(2982),a=n(8683),o=n(5861),c=n(7757),i=n.n(c),u=n(422);function l(e){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").where("username","==",t.toLowerCase()).get();case 2:return n=e.sent,e.abrupt("return",n.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return f.apply(this,arguments)}function f(){return(f=(0,o.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").where("username","==",t.toLowerCase()).get();case 2:return n=e.sent,e.abrupt("return",n.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").where("userId","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,t){return v.apply(this,arguments)}function v(){return(v=(0,o.Z)(i().mark((function e(t,n){var r,o,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.w.firestore().collection("users"),r=n.length>0?r.where("userId","not-in",[].concat((0,s.Z)(n),[t])):r.where("userId","!=",t),e.next=4,r.limit(10).get();case 4:return o=e.sent,c=o.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{docId:e.id})})),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e,t,n){return w.apply(this,arguments)}function w(){return(w=(0,o.Z)(i().mark((function e(t,n,r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.w.firestore().collection("users").doc(t).update({following:r?u.G.arrayRemove(n):u.G.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function j(e,t,n){return y.apply(this,arguments)}function y(){return(y=(0,o.Z)(i().mark((function e(t,n,r){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",u.w.firestore().collection("users").doc(t).update({followers:r?u.G.arrayRemove(n):u.G.arrayUnion(n)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e,t){return N.apply(this,arguments)}function N(){return N=(0,o.Z)(i().mark((function e(t,n){var r,s,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("photos").where("userId","in",n).get();case 2:return r=e.sent,s=r.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(s.map(function(){var e=(0,o.Z)(i().mark((function e(n){var r,s,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=!1,n.likes.includes(t)&&(r=!0),e.next=4,p(n.userId);case 4:return s=e.sent,o=s[0].username,e.abrupt("return",(0,a.Z)((0,a.Z)({username:o},n),{},{userLikedPhoto:r}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)}))),N.apply(this,arguments)}function k(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,o.Z)(i().mark((function e(t){var n,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("photos").where("userId","==",t).get();case 2:return n=e.sent,r=n.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{docId:e.id})})),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e,t){return C.apply(this,arguments)}function C(){return(C=(0,o.Z)(i().mark((function e(t,n){var s,o,c,l,d;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.w.firestore().collection("users").where("username","==",t).where("following","array-contains",n).get();case 2:return s=e.sent,o=s.docs.map((function(e){return(0,a.Z)((0,a.Z)({},e.data()),{},{docId:e.id})})),c=(0,r.Z)(o,1),l=c[0],d=void 0===l?{}:l,e.abrupt("return",d.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e,t,n,r,s){return L.apply(this,arguments)}function L(){return(L=(0,o.Z)(i().mark((function e(t,n,r,s,a){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(n,s,t);case 2:return e.next=4,j(r,a,t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=869.c7fbfc69.chunk.js.map