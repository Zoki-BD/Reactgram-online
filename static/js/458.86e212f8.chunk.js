"use strict";(self.webpackChunkreactgram_tailwindcss=self.webpackChunkreactgram_tailwindcss||[]).push([[458],{2458:function(e,r,t){t.r(r),t.d(r,{default:function(){return m}});var n=t(5861),a=t(885),s=t(7757),u=t.n(s),o=t(2791),c=t(9271),i=t(1523),l=t(2303),p=t(8155),d=t(7606),f=t(184);function m(){var e=(0,c.k6)(),r=(0,o.useContext)(l.Z).firebase,t=(0,o.useState)(""),s=(0,a.Z)(t,2),m=s[0],h=s[1],x=(0,o.useState)(""),w=(0,a.Z)(x,2),y=w[0],b=w[1],v=(0,o.useState)(""),g=(0,a.Z)(v,2),Z=g[0],k=g[1],j=(0,o.useState)(""),I=(0,a.Z)(j,2),N=I[0],S=I[1],C=(0,o.useState)(""),E=(0,a.Z)(C,2),P=E[0],U=E[1],L=""===N||""===Z,A=function(){var t=(0,n.Z)(u().mark((function t(n){var a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,(0,d.$K)(m);case 3:if(t.sent){t.next=25;break}return t.prev=5,t.next=8,r.auth().createUserWithEmailAndPassword(Z,N);case 8:return a=t.sent,t.next=11,a.user.updateProfile({displayName:m});case 11:return console.log(m),t.next=14,r.firestore().collection("users").add({userId:a.user.uid,username:m.toLowerCase(),fullName:y,emailAddress:Z.toLowerCase(),following:["2"],followers:[],dateCreated:Date.now()});case 14:e.push(p.h1),t.next=23;break;case 17:t.prev=17,t.t0=t.catch(5),b(""),k(""),S(""),U(t.t0.message);case 23:t.next=27;break;case 25:h(""),U("That username is already taken, please try another.");case 27:case"end":return t.stop()}}),t,null,[[5,17]])})));return function(e){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){document.title="Sign Up - Reactgram"}),[]),(0,f.jsxs)("div",{className:"container flex mx-auto max-w-screen-md items-center h-screen",children:[(0,f.jsx)("div",{className:"flex w-3/5",children:(0,f.jsx)("img",{src:"/images/iphone-with-profile.jpg",alt:"iPhone with Instagram app"})}),(0,f.jsxs)("div",{className:"flex flex-col w-2/5",children:[(0,f.jsxs)("div",{className:"flex flex-col items-center bg-white p-4 border border-gray-primary mb-4 rounded",children:[(0,f.jsx)("h1",{className:"flex justify-center w-full",children:(0,f.jsx)("img",{src:"/images/logo.png",alt:"Instagram",className:"mt-2 w-6/12 mb-4"})}),P&&(0,f.jsx)("p",{className:"mb-4 text-xs text-red-primary",children:P}),(0,f.jsxs)("form",{onSubmit:A,method:"POST",children:[(0,f.jsx)("input",{"aria-label":"Enter your username",type:"text",placeholder:"Username",className:"text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(e){var r=e.target;return h(r.value)},value:m}),(0,f.jsx)("input",{"aria-label":"Enter your full name",type:"text",placeholder:"Full name",className:"text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(e){var r=e.target;return b(r.value)},value:y}),(0,f.jsx)("input",{"aria-label":"Enter your email address",type:"text",placeholder:"Email address",className:"text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(e){var r=e.target;return k(r.value)},value:Z}),(0,f.jsx)("input",{"aria-label":"Enter your password",type:"password",placeholder:"Password",className:"text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2",onChange:function(e){var r=e.target;return S(r.value)},value:N}),(0,f.jsx)("button",{disabled:L,type:"submit",className:"bg-blue-medium text-white w-full rounded h-8 font-bold\n            ".concat(L&&"opacity-50"),children:"Sign Up"})]})]}),(0,f.jsx)("div",{className:"flex justify-center items-center flex-col w-full bg-white p-4 rounded border border-gray-primary",children:(0,f.jsxs)("p",{className:"text-sm",children:["Have an account?"," ",(0,f.jsx)(i.rU,{to:p.ym,className:"font-bold text-blue-medium",children:"Login"})]})})]})]})}},7606:function(e,r,t){t.d(r,{$K:function(){return l},dQ:function(){return d},xD:function(){return m},ve:function(){return x},NS:function(){return y},T6:function(){return v},wP:function(){return Z},oJ:function(){return j},IU:function(){return N},Gm:function(){return C}});var n=t(885),a=t(2982),s=t(8683),u=t(5861),o=t(7757),c=t.n(o),i=t(422);function l(e){return p.apply(this,arguments)}function p(){return(p=(0,u.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.w.firestore().collection("users").where("username","==",r.toLowerCase()).get();case 2:return t=e.sent,e.abrupt("return",t.docs.length>0);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return f.apply(this,arguments)}function f(){return(f=(0,u.Z)(c().mark((function e(r){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.w.firestore().collection("users").where("username","==",r.toLowerCase()).get();case 2:return t=e.sent,e.abrupt("return",t.docs.map((function(e){return(0,s.Z)((0,s.Z)({},e.data()),{},{docId:e.id})})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return h.apply(this,arguments)}function h(){return(h=(0,u.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.w.firestore().collection("users").where("userId","==",r).get();case 2:return t=e.sent,n=t.docs.map((function(e){return(0,s.Z)((0,s.Z)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,r){return w.apply(this,arguments)}function w(){return(w=(0,u.Z)(c().mark((function e(r,t){var n,u,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.w.firestore().collection("users"),n=t.length>0?n.where("userId","not-in",[].concat((0,a.Z)(t),[r])):n.where("userId","!=",r),e.next=4,n.limit(10).get();case 4:return u=e.sent,o=u.docs.map((function(e){return(0,s.Z)((0,s.Z)({},e.data()),{},{docId:e.id})})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e,r,t){return b.apply(this,arguments)}function b(){return(b=(0,u.Z)(c().mark((function e(r,t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.w.firestore().collection("users").doc(r).update({following:n?i.G.arrayRemove(t):i.G.arrayUnion(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e,r,t){return g.apply(this,arguments)}function g(){return(g=(0,u.Z)(c().mark((function e(r,t,n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.w.firestore().collection("users").doc(r).update({followers:n?i.G.arrayRemove(t):i.G.arrayUnion(t)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,r){return k.apply(this,arguments)}function k(){return k=(0,u.Z)(c().mark((function e(r,t){var n,a,o;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.w.firestore().collection("photos").where("userId","in",t).get();case 2:return n=e.sent,a=n.docs.map((function(e){return(0,s.Z)((0,s.Z)({},e.data()),{},{docId:e.id})})),e.next=6,Promise.all(a.map(function(){var e=(0,u.Z)(c().mark((function e(t){var n,a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=!1,t.likes.includes(r)&&(n=!0),e.next=4,m(t.userId);case 4:return a=e.sent,u=a[0].username,e.abrupt("return",(0,s.Z)((0,s.Z)({username:u},t),{},{userLikedPhoto:n}));case 7:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 6:return o=e.sent,e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)}))),k.apply(this,arguments)}function j(e){return I.apply(this,arguments)}function I(){return(I=(0,u.Z)(c().mark((function e(r){var t,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.w.firestore().collection("photos").where("userId","==",r).get();case 2:return t=e.sent,n=t.docs.map((function(e){return(0,s.Z)((0,s.Z)({},e.data()),{},{docId:e.id})})),e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(e,r){return S.apply(this,arguments)}function S(){return(S=(0,u.Z)(c().mark((function e(r,t){var a,u,o,l,p;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.w.firestore().collection("users").where("username","==",r).where("following","array-contains",t).get();case 2:return a=e.sent,u=a.docs.map((function(e){return(0,s.Z)((0,s.Z)({},e.data()),{},{docId:e.id})})),o=(0,n.Z)(u,1),l=o[0],p=void 0===l?{}:l,e.abrupt("return",p.userId);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function C(e,r,t,n,a){return E.apply(this,arguments)}function E(){return(E=(0,u.Z)(c().mark((function e(r,t,n,a,s){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t,a,r);case 2:return e.next=4,v(n,s,r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2982:function(e,r,t){t.d(r,{Z:function(){return s}});var n=t(907);var a=t(181);function s(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,a.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=458.86e212f8.chunk.js.map