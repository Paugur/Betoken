(this.webpackJsonppaugur=this.webpackJsonppaugur||[]).push([[6],{49:function(n,t,e){"use strict";e.d(t,"e",(function(){return c})),e.d(t,"a",(function(){return u})),e.d(t,"g",(function(){return a})),e.d(t,"c",(function(){return o})),e.d(t,"f",(function(){return i})),e.d(t,"b",(function(){return b})),e.d(t,"h",(function(){return j})),e.d(t,"d",(function(){return O}));var r=e(9),c=function(n){return{type:r.b.COMMENTS,payload:n}},u=function(){return{type:r.a.COMMENTS,payload:[]}},a=function(n){return{type:r.b.MEDIA_ID,payload:n}},o=function(){return{type:r.a.MEDIA_ID,payload:""}},i=function(n){return{type:r.b.CREATOR_INFO,payload:n}},b=function(){return{type:r.a.CREATOR_INFO,payload:[]}},j=function(n){return{type:r.b.VIDEO_INFO,payload:n}},O=function(){return{type:r.a.VIDEO_INFO,payload:[]}}},51:function(n,t,e){"use strict";e.d(t,"a",(function(){return u})),e.d(t,"e",(function(){return a})),e.d(t,"d",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"b",(function(){return b}));var r=e(13),c=e(28),u=function(n){return{type:r.a.SET_KEY,payload:n}},a=function(){return{type:r.b.YOUTUBE,payload:c.a.YOUTUBE}},o=function(){return{type:r.b.TWITTER,payload:c.a.TWITTER}},i=function(){return{type:r.b.REDDIT,payload:c.a.REDDIT}},b=function(){return{type:r.b.AMAZON,payload:c.a.AMAZON}}},96:function(n,t,e){"use strict";e.r(t);var r=e(3),c=e(0),u=e(93),a=e(1),o=e(17),i=e(28),b=e(14),j=e(15),O="#ff0202",f="#04a2f2",s="#f73e17",d="#f68f00",l=e(94);function p(){var n=Object(b.a)(["\n  display: inline-block;\n  font-size: 2em;\n"]);return p=function(){return n},n}function x(){var n=Object(b.a)(["\n  ","\n  :hover {\n    color: ",";\n  }\n"]);return x=function(){return n},n}function v(){var n=Object(b.a)(["\n  ","\n  :hover {\n    color: ",";\n  }\n"]);return v=function(){return n},n}function y(){var n=Object(b.a)(["\n  ","\n  :hover {\n    color: ",";\n  }\n"]);return y=function(){return n},n}function T(){var n=Object(b.a)(["\n  ","\n  :hover {\n    color: ",";\n  }\n"]);return T=function(){return n},n}function h(){var n=Object(b.a)(["\n  font-size: 3.5em;\n  cursor: pointer;\n  color: white;\n"]);return h=function(){return n},n}var E=Object(j.a)(h()),g=Object(j.b)(l.d)(T(),E,O),I=Object(j.b)(l.c)(y(),E,f),D=Object(j.b)(l.b)(v(),E,s),R=Object(j.b)(l.a)(x(),E,d),k=j.b.div(p()),A=function(n){var t=Object.assign({},n);return Object(r.jsx)(k,Object(a.a)(Object(a.a)({},t),{},{children:Object(r.jsx)(g,{})}))},C=function(n){var t=Object.assign({},n);return Object(r.jsx)(k,Object(a.a)(Object(a.a)({},t),{},{children:Object(r.jsx)(I,{})}))},M=function(n){var t=Object.assign({},n);return Object(r.jsx)(k,Object(a.a)(Object(a.a)({},t),{},{children:Object(r.jsx)(D,{})}))},N=function(n){var t=Object.assign({},n);return Object(r.jsx)(k,Object(a.a)(Object(a.a)({},t),{},{children:Object(r.jsx)(R,{})}))},U=function(n){var t=Object.assign({},n);switch(Object(o.c)((function(n){return n.userReducer})).mediaPref){case i.a.YOUTUBE:return Object(r.jsx)(A,Object(a.a)({},t));case i.a.TWITTER:return Object(r.jsx)(C,Object(a.a)({},t));case i.a.REDDIT:return Object(r.jsx)(M,Object(a.a)({},t));case i.a.AMAZON:return Object(r.jsx)(N,Object(a.a)({},t));default:return Object(r.jsx)(A,Object(a.a)({},t))}},w=e(51),_=e(49),m=e(83),Y=e.n(m);function B(){var n=Object(b.a)(["\n  font-size: 1.2em;\n"]);return B=function(){return n},n}function W(){var n=Object(b.a)(["\n  text-align: center;\n"]);return W=function(){return n},n}function Z(){var n=Object(b.a)(["\n  background-color: black;\n  color: white;\n  position: absolute;\n  text-align: center;\n  top: 20%;\n  left: 29%;\n  width: 40%;\n  padding: 20px;\n  border-radius: 5px;\n  border: 2px solid black;\n  :focus {\n    outline: none;\n  }\n"]);return Z=function(){return n},n}var F=Object(j.b)(Y.a)(Z()),S=j.b.div(W()),z=Object(j.b)(U)(B()),P=function(n){var t=n.toggle,e=Object(o.b)(),c=function(n){switch(t(),e(Object(_.a)()),e(Object(_.b)()),e(Object(_.c)()),e(Object(_.d)()),n){case i.a.YOUTUBE:e(Object(w.e)());break;case i.a.TWITTER:e(Object(w.d)());break;case i.a.REDDIT:e(Object(w.c)());break;case i.a.AMAZON:e(Object(w.b)())}};return Object(r.jsxs)(S,{children:[Object(r.jsx)("h1",{children:"Choose Prefered Media"}),Object(r.jsx)(A,{onClick:function(){return c(i.a.YOUTUBE)}}),Object(r.jsx)(C,{onClick:function(){return c(i.a.TWITTER)}}),Object(r.jsx)(M,{onClick:function(){return c(i.a.REDDIT)}}),Object(r.jsx)(N,{onClick:function(){return c(i.a.AMAZON)}})]})},J=function(){var n=Object(c.useState)(!1),t=Object(u.a)(n,2),e=t[0],a=t[1],o=function(){a(!e)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(z,{onClick:o}),Object(r.jsx)(F,{isOpen:e,onRequestClose:o,contentLabel:"Change Media Preference",ariaHideApp:!1,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.25)"}},children:Object(r.jsx)(P,{toggle:o})})]})};function V(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 20px;\n"]);return V=function(){return n},n}function q(){var n=Object(b.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n"]);return q=function(){return n},n}var H=j.b.footer(q()),K=j.b.div(V());t.default=function(){return Object(r.jsx)(H,{children:Object(r.jsx)(K,{children:Object(r.jsx)(J,{})})})}}}]);
//# sourceMappingURL=6.fa8e1b05.chunk.js.map