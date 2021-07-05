(this.webpackJsonppaugur=this.webpackJsonppaugur||[]).push([[6],{102:function(n,t,e){"use strict";e.r(t);var r=e(3),c=e(0),a=e(59),i=e.n(a),o=e(53),u=e(57),b=e(58),s=e(18),j=e(13),l=e(29),f=e(9),O=e(54),d=e(14),p=e(15);function x(){var n=Object(d.a)(["\n  transform: translate(40%, 0%);\n"]);return x=function(){return n},n}function v(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n"]);return v=function(){return n},n}function h(){var n=Object(d.a)(["\n  overflow: hidden;\n"]);return h=function(){return n},n}var g=p.b.div(h()),y=p.b.div(v()),m=p.b.div(x()),T=function(){var n=Object(s.c)((function(n){return n.mediaReducer})).mediaId,t=Object(s.c)((function(n){return n.clientReducer})).apiKey,e=Object(s.b)();return Object(r.jsxs)(g,{children:[Object(r.jsxs)(m,{children:[Object(r.jsx)(u.a,{name:"apiKey",type:"text",label:"API Key",value:t,inputChange:function(n){var t;e((t=n.target.value,{type:j.a.SET_KEY,payload:t}))}}),Object(r.jsx)(u.a,{name:"mediaId",type:"text",label:"Video ID",value:n,inputChange:function(n){var t;e((t=n.target.value,{type:f.b.MEDIA_ID,payload:t}))}})]}),Object(r.jsx)(y,{children:Object(r.jsx)(b.a,{onClick:function(){e(Object(O.b)()),function(n,t){return i()({url:o.a+"api/youtube-extractor/"+n+"/"+t,method:"POST",headers:{"Content-Type":"application/json"},mode:"cors"})}(n,t).then((function(n){var t,r;e((t=n.data.video,{type:f.b.VIDEO_INFO,payload:t})),e(function(n){return{type:f.b.CREATOR_INFO,payload:n}}(n.data.channel)),e((r=JSON.parse(n.data.comments),{type:f.b.COMMENTS,payload:r})),e(Object(O.a)())})).catch((function(n){e(Object(O.a)()),alert("Something went wrong, Recorded "+n)}))},label:"Query"})})]})},w=function(){switch(Object(s.c)((function(n){return n.clientReducer})).mediaPref){case l.a.YOUTUBE:default:return Object(r.jsx)(T,{})}},C=e(51),E=e(56);function I(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 20px;\n"]);return I=function(){return n},n}function k(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);return k=function(){return n},n}function R(){var n=Object(d.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n"]);return R=function(){return n},n}var A=p.b.footer(R()),D=p.b.div(k()),M=p.b.div(I()),N=function(n){var t=n.leftComponents,e=n.rightComponents;return Object(r.jsxs)(A,{children:[Object(r.jsx)(D,{children:t}),Object(r.jsx)(M,{children:e})]})},U=e(71),S=e(1),z="#ff0202",P="#04a2f2",Y="#f73e17",_="#f68f00",B=e(101);function F(){var n=Object(d.a)(["\n  display: inline-block;\n  font-size: 2em;\n"]);return F=function(){return n},n}function W(){var n=Object(d.a)(["\n  ","\n  :hover {\n    color: ",";\n  }\n"]);return W=function(){return n},n}function Z(){var n=Object(d.a)(["\n  ","\n  :hover {\n    color: ",";\n  }\n"]);return Z=function(){return n},n}function K(){var n=Object(d.a)(["\n  ","\n  :hover {\n    color: ",";\n  }\n"]);return K=function(){return n},n}function J(){var n=Object(d.a)(["\n  ","\n  :hover {\n    color: ",";\n  }\n"]);return J=function(){return n},n}function V(){var n=Object(d.a)(["\n  font-size: 3.5em;\n  cursor: pointer;\n  color: white;\n"]);return V=function(){return n},n}var L=Object(p.a)(V()),q=Object(p.b)(B.d)(J(),L,z),H=Object(p.b)(B.c)(K(),L,P),Q=Object(p.b)(B.b)(Z(),L,Y),G=Object(p.b)(B.a)(W(),L,_),X=p.b.div(F()),$=function(n){var t=Object.assign({},n);return Object(r.jsx)(X,Object(S.a)(Object(S.a)({},t),{},{children:Object(r.jsx)(q,{})}))},nn=function(n){var t=Object.assign({},n);return Object(r.jsx)(X,Object(S.a)(Object(S.a)({},t),{},{children:Object(r.jsx)(H,{})}))},tn=function(n){var t=Object.assign({},n);return Object(r.jsx)(X,Object(S.a)(Object(S.a)({},t),{},{children:Object(r.jsx)(Q,{})}))},en=function(n){var t=Object.assign({},n);return Object(r.jsx)(X,Object(S.a)(Object(S.a)({},t),{},{children:Object(r.jsx)(G,{})}))},rn=function(n){var t=Object.assign({},n);switch(Object(s.c)((function(n){return n.clientReducer})).mediaPref){case l.a.YOUTUBE:return Object(r.jsx)($,Object(S.a)({},t));case l.a.TWITTER:return Object(r.jsx)(nn,Object(S.a)({},t));case l.a.REDDIT:return Object(r.jsx)(tn,Object(S.a)({},t));case l.a.AMAZON:return Object(r.jsx)(en,Object(S.a)({},t));default:return Object(r.jsx)($,Object(S.a)({},t))}},cn=e(91),an=e.n(cn);function on(){var n=Object(d.a)(["\n  font-size: 1.2em;\n"]);return on=function(){return n},n}function un(){var n=Object(d.a)(["\n  text-align: center;\n"]);return un=function(){return n},n}function bn(){var n=Object(d.a)(["\n  background-color: black;\n  color: white;\n  position: absolute;\n  text-align: center;\n  top: 20%;\n  left: 29%;\n  width: 40%;\n  padding: 20px;\n  border-radius: 5px;\n  border: 2px solid black;\n  :focus {\n    outline: none;\n  }\n"]);return bn=function(){return n},n}var sn=Object(p.b)(an.a)(bn()),jn=p.b.div(un()),ln=Object(p.b)(rn)(on()),fn=function(n){var t=n.toggle,e=Object(s.b)(),c=function(n){switch(t(),e({type:f.a.COMMENTS,payload:[]}),e({type:f.a.CREATOR_INFO,payload:[]}),e({type:f.a.MEDIA_ID,payload:""}),e({type:f.a.VIDEO_INFO,payload:[]}),n){case l.a.YOUTUBE:e({type:j.b.YOUTUBE,payload:l.a.YOUTUBE});break;case l.a.TWITTER:e({type:j.b.TWITTER,payload:l.a.TWITTER});break;case l.a.REDDIT:e({type:j.b.REDDIT,payload:l.a.REDDIT});break;case l.a.AMAZON:e({type:j.b.AMAZON,payload:l.a.AMAZON})}};return Object(r.jsxs)(jn,{children:[Object(r.jsx)("h1",{children:"Choose Prefered Media"}),Object(r.jsx)($,{onClick:function(){return c(l.a.YOUTUBE)}}),Object(r.jsx)(nn,{onClick:function(){return c(l.a.TWITTER)}}),Object(r.jsx)(tn,{onClick:function(){return c(l.a.REDDIT)}}),Object(r.jsx)(en,{onClick:function(){return c(l.a.AMAZON)}})]})},On=function(){var n=Object(c.useState)(!1),t=Object(U.a)(n,2),e=t[0],a=t[1],i=function(){a(!e)};return Object(r.jsxs)("div",{children:[Object(r.jsx)(ln,{onClick:i}),Object(r.jsx)(sn,{isOpen:e,onRequestClose:i,contentLabel:"Change Media Preference",ariaHideApp:!1,style:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.25)"}},children:Object(r.jsx)(fn,{toggle:i})})]})},dn=e(52),pn=e(17);function xn(){var n=Object(d.a)(["\n  overflow: hidden;\n"]);return xn=function(){return n},n}var vn=p.b.div(xn());t.default=function(){return Object(r.jsxs)(vn,{children:[Object(r.jsx)(E.a,{rightComponents:Object(r.jsx)(dn.a,{to:pn.a.DISPLAY,children:"Analyze"})}),Object(r.jsx)(C.a,{isMainFocus:!0}),Object(r.jsx)(w,{}),Object(r.jsx)(N,{rightComponents:Object(r.jsx)(On,{})})]})}},51:function(n,t,e){"use strict";var r=e(1),c=e(3),a=(e(0),e.p+"static/media/paugur.65210d63.svg"),i=e(14),o=e(15);function u(){var n=Object(i.a)(["\n  ","\n"]);return u=function(){return n},n}function b(){var n=Object(i.a)(["\n  height: 15vmin;\n  padding-bottom: 20px;\n"]);return b=function(){return n},n}function s(){var n=Object(i.a)(["\n  height: 25vmin;\n  padding-bottom: 20px;\n"]);return s=function(){return n},n}function j(){var n=Object(i.a)(["\n  animation-name: float;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  @keyframes float {\n    0% {\n      transform: translate(0, 0px);\n    }\n    50% {\n      transform: translate(0, 15px);\n    }\n    100% {\n      transform: translate(0, -0px);\n    }\n  }\n"]);return j=function(){return n},n}var l=o.b.div(j()),f=Object(o.a)(s()),O=Object(o.a)(b()),d=o.b.img(u(),(function(n){return n.isMainFocus?f:O}));t.a=function(n){var t=Object.assign({},n);return Object(c.jsx)(l,{children:Object(c.jsx)(d,Object(r.a)({src:a,alt:"Paugur"},t))})}},52:function(n,t,e){"use strict";var r=e(1),c=e(3),a=e(50),i=(e(0),e(14)),o=e(15),u=e(20);function b(){var n=Object(i.a)(["\n  padding: 20px;\n  text-decoration: none;\n  ","\n"]);return b=function(){return n},n}function s(){var n=Object(i.a)(["\n  cursor: pointer;\n  color: white;\n"]);return s=function(){return n},n}function j(){var n=Object(i.a)(["\n  cursor: not-allowed;\n  color: gray;\n"]);return j=function(){return n},n}var l=Object(o.a)(j()),f=Object(o.a)(s()),O=Object(o.b)(u.b)(b(),(function(n){return n.disabled?l:f}));t.a=function(n){var t=n.children,e=n.disabled,i=Object(a.a)(n,["children","disabled"]);return e?Object(c.jsx)(O,{as:"div",disabled:!0,children:t}):Object(c.jsx)(O,Object(r.a)(Object(r.a)({},i),{},{children:t}))}},53:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="http://127.0.0.1:5000/"},54:function(n,t,e){"use strict";e.d(t,"b",(function(){return c})),e.d(t,"a",(function(){return a}));var r=e(24),c=function(){return{type:r.a.START,payload:!0}},a=function(){return{type:r.a.START,payload:!1}}},56:function(n,t,e){"use strict";var r=e(3),c=(e(0),e(14)),a=e(15);function i(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n"]);return i=function(){return n},n}function o(){var n=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n"]);return o=function(){return n},n}function u(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return u=function(){return n},n}var b=a.b.div(u()),s=a.b.div(o()),j=a.b.div(i());t.a=function(n){var t=n.leftComponents,e=n.rightComponents;return Object(r.jsxs)(b,{children:[Object(r.jsx)(s,{children:t}),Object(r.jsx)(j,{children:e})]})}},57:function(n,t,e){"use strict";var r=e(3),c=e(1),a=e(50),i=(e(0),e(14)),o=e(15);function u(){var n=Object(i.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.filled {\n    ","\n  }\n"]);return u=function(){return n},n}function b(){var n=Object(i.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 10px;\n  display: block;\n  ","\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 7px;\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return b=function(){return n},n}function s(){var n=Object(i.a)(['\n  position: relative;\n  margin: 45px 0;\n\n  input[type="password"] {\n    letter-spacing: 0.2em;\n  }\n']);return s=function(){return n},n}function j(){var n=Object(i.a)(["\n  width: 35%;\n"]);return j=function(){return n},n}function l(){var n=Object(i.a)(["\n  width: 20%;\n"]);return l=function(){return n},n}function f(){var n=Object(i.a)(["\n  width: 15%;\n"]);return f=function(){return n},n}function O(){var n=Object(i.a)(["\n  top: -25px;\n  font-size: 18px;\n  color: ",";\n"]);return O=function(){return n},n}var d=Object(o.a)(O(),"white"),p=Object(o.a)(f()),x=Object(o.a)(l()),v=Object(o.a)(j()),h=o.b.div(s()),g=o.b.input(b(),"black",(function(n){var t=n.size;switch(t){case"small":return p;case"large":return v;default:return x}}),d),y=o.b.label(u(),"gray",d);t.a=function(n){var t=n.inputChange,e=n.label,i=Object(a.a)(n,["inputChange","label"]);return Object(r.jsxs)(h,{children:[Object(r.jsx)(g,Object(c.a)({onChange:t},i)),e?Object(r.jsx)(y,{className:i.value.length?"filled":"",children:e}):null]})}},58:function(n,t,e){"use strict";var r=e(1),c=e(3),a=e(50),i=(e(0),e(14));function o(){var n=Object(i.a)(["\n  min-width: 100px;\n  height: 40px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 15px 0 15px;\n  font-size: 15px;\n  background-color: #9836f6;\n  color: white;\n  font-weight: bolder;\n  border: 1px solid #011f30;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n\n  &:hover {\n    background-color: #6423a1;\n    color: white;\n    border: 1px solid #011f30;\n    transition: background-color 0.5s ease-out;\n  }\n"]);return o=function(){return n},n}var u=e(15).b.button(o());t.a=function(n){var t=n.label,e=Object(a.a)(n,["label"]);return Object(c.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:t}))}}}]);
//# sourceMappingURL=6.c7db0692.chunk.js.map