(this.webpackJsonppaugur=this.webpackJsonppaugur||[]).push([[5],{51:function(n,t,e){"use strict";var r=e(1),a=e(3),i=(e(0),e.p+"static/media/paugur.65210d63.svg"),o=e(14),c=e(15);function u(){var n=Object(o.a)(["\n  ","\n"]);return u=function(){return n},n}function l(){var n=Object(o.a)(["\n  height: 25vmin;\n  padding-bottom: 20px;\n"]);return l=function(){return n},n}function s(){var n=Object(o.a)(["\n  animation-name: float;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  @keyframes float {\n    0% {\n      transform: translate(0, 0px);\n    }\n    50% {\n      transform: translate(0, 15px);\n    }\n    100% {\n      transform: translate(0, -0px);\n    }\n  }\n"]);return s=function(){return n},n}var p=c.b.div(s()),b=Object(c.a)(l()),d=c.b.img(u(),(function(n){return n.isMainFocus,b}));t.a=function(n){var t=Object.assign({},n);return Object(a.jsx)(p,{children:Object(a.jsx)(d,Object(r.a)({src:i,alt:"Paugur"},t))})}},78:function(n,t,e){"use strict";e.r(t);var r=e(3),a=(e(0),e(60)),i=e.n(a),o=e(1),c=e(50),u=e(14),l=e(15);function s(){var n=Object(u.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.filled {\n    ","\n  }\n"]);return s=function(){return n},n}function p(){var n=Object(u.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 10px;\n  display: block;\n  width: 30%;\n  border: none;\n  border-radius: 0;\n  border: 1px solid grey;\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(u.a)(['\n  position: relative;\n  margin: 45px 0;\n  margin-left: 41.5vw;\n\n  input[type="password"] {\n    letter-spacing: 0.2em;\n  }\n']);return b=function(){return n},n}function d(){var n=Object(u.a)(["\n  top: -25px;\n  font-size: 18px;\n  color: ",";\n"]);return d=function(){return n},n}var f=Object(l.a)(d(),"white"),j=l.b.div(b()),x=l.b.input(p(),"black",f),O=l.b.label(s(),"gray",f),v=function(n){var t=n.inputChange,e=n.label,a=Object(c.a)(n,["inputChange","label"]);return Object(r.jsxs)(j,{children:[Object(r.jsx)(x,Object(o.a)({onChange:t},a)),e?Object(r.jsx)(O,{className:a.value.length?"filled":"",children:e}):null]})};function g(){var n=Object(u.a)(["\n  min-width: 100px;\n  height: 40px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 15px 0 15px;\n  font-size: 15px;\n  background-color: #9836f6;\n  color: white;\n  font-weight: bolder;\n  border: 1px solid #011f30;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n\n  &:hover {\n    background-color: #6423a1;\n    color: white;\n    border: 1px solid #011f30;\n    transition: background-color 0.5s ease-out;\n  }\n"]);return g=function(){return n},n}var h=l.b.button(g()),m=function(n){var t=n.label,e=Object(c.a)(n,["label"]);return Object(r.jsx)(h,Object(o.a)(Object(o.a)({},e),{},{children:t}))},y=e(17),w=e(13),k=e(29),T=e(9),C=e(24),I=function(){return{type:C.a.START,payload:!1}};function R(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]);return R=function(){return n},n}var E=l.b.div(R()),S=function(){var n=Object(y.c)((function(n){return n.mediaReducer})).mediaId,t=Object(y.c)((function(n){return n.userReducer})).apiKey,e=Object(y.b)();return Object(r.jsxs)("div",{children:[Object(r.jsx)(v,{name:"apiKey",type:"text",label:"API Key",value:t,inputChange:function(n){var t;e((t=n.target.value,{type:w.a.SET_KEY,payload:t}))}}),Object(r.jsx)(v,{name:"mediaId",type:"text",label:"Video ID",value:n,inputChange:function(n){var t;e((t=n.target.value,{type:T.b.MEDIA_ID,payload:t}))}}),Object(r.jsx)(E,{children:Object(r.jsx)(m,{onClick:function(){e({type:C.a.START,payload:!0}),function(n,t){return i()({url:"http://127.0.0.1:5000/api/youtube_extractor/"+n+"/"+t,method:"POST",headers:{"Content-Type":"application/json"},mode:"cors"})}(n,t).then((function(n){var t,r;e((t=n.data.video,{type:T.b.VIDEO_INFO,payload:t})),e(function(n){return{type:T.b.CREATOR_INFO,payload:n}}(n.data.channel)),e((r=JSON.parse(n.data.comments),{type:T.b.COMMENTS,payload:r})),e(I())})).catch((function(n){e(I()),alert("Something went wrong, Recorded "+n)}))},label:"Query"})})]})},A=function(){switch(Object(y.c)((function(n){return n.userReducer})).mediaPref){case k.a.YOUTUBE:default:return Object(r.jsx)(S,{})}},M=e(51);function N(){var n=Object(u.a)(["\n  padding-top: 4vw;\n"]);return N=function(){return n},n}var _=l.b.div(N());t.default=function(){return Object(r.jsxs)(_,{children:[Object(r.jsx)(M.a,{isMainFocus:!0}),Object(r.jsx)(A,{})]})}}}]);
//# sourceMappingURL=5.61ee9a18.chunk.js.map