(this.webpackJsonppaugur=this.webpackJsonppaugur||[]).push([[5],{51:function(n,t,e){"use strict";e.d(t,"a",(function(){return r}));var r="http://127.0.0.1:5000/"},52:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return a}));var r=e(23),o=function(){return{type:r.a.START,payload:!0}},a=function(){return{type:r.a.START,payload:!1}}},54:function(n,t,e){"use strict";var r=e(3),o=e(1),a=e(50),i=(e(0),e(14)),c=e(15);function u(){var n=Object(i.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.filled {\n    ","\n  }\n"]);return u=function(){return n},n}function l(){var n=Object(i.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 10px;\n  display: block;\n  ","\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 7px;\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return l=function(){return n},n}function s(){var n=Object(i.a)(['\n  position: relative;\n  margin: 45px 0;\n\n  input[type="password"] {\n    letter-spacing: 0.2em;\n  }\n']);return s=function(){return n},n}function b(){var n=Object(i.a)(["\n  width: 35%;\n"]);return b=function(){return n},n}function f(){var n=Object(i.a)(["\n  width: 20%;\n"]);return f=function(){return n},n}function p(){var n=Object(i.a)(["\n  width: 15%;\n"]);return p=function(){return n},n}function d(){var n=Object(i.a)(["\n  top: -25px;\n  font-size: 18px;\n  color: ",";\n"]);return d=function(){return n},n}var j=Object(c.a)(d(),"white"),h=Object(c.a)(p()),g=Object(c.a)(f()),x=Object(c.a)(b()),v=c.b.div(s()),O=c.b.input(l(),"black",(function(n){var t=n.size;switch(t){case"small":return h;case"large":return x;default:return g}}),j),y=c.b.label(u(),"gray",j);t.a=function(n){var t=n.inputChange,e=n.label,i=Object(a.a)(n,["inputChange","label"]);return Object(r.jsxs)(v,{children:[Object(r.jsx)(O,Object(o.a)({onChange:t},i)),e?Object(r.jsx)(y,{className:i.value.length?"filled":"",children:e}):null]})}},55:function(n,t,e){"use strict";var r=e(1),o=e(3),a=e(50),i=(e(0),e(14));function c(){var n=Object(i.a)(["\n  min-width: 100px;\n  height: 40px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 15px 0 15px;\n  font-size: 15px;\n  background-color: #9836f6;\n  color: white;\n  font-weight: bolder;\n  border: 1px solid #011f30;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n\n  &:hover {\n    background-color: #6423a1;\n    color: white;\n    border: 1px solid #011f30;\n    transition: background-color 0.5s ease-out;\n  }\n"]);return c=function(){return n},n}var u=e(15).b.button(c());t.a=function(n){var t=n.label,e=Object(a.a)(n,["label"]);return Object(o.jsx)(u,Object(r.a)(Object(r.a)({},e),{},{children:t}))}},82:function(n,t,e){"use strict";e.r(t),e.d(t,"SignInAPI",(function(){return S}));var r=e(3);function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function a(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(n)){var e=[],r=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(r=(i=c.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(u){o=!0,a=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return e}}(n,t)||function(n,t){if(n){if("string"===typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(n,t):void 0}}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=e(0),c=e(56),u=e.n(c),l=e(51),s=e(54),b=e(55),f=e(18),p=e(52),d=e(14),j=e(15);function h(){var n=Object(d.a)(["\n  font-weight: bold;\n  font-size: 36px;\n  color: ",";\n"]);return h=function(){return n},n}function g(){var n=Object(d.a)(["\n  transform: translate(32%, 50%);\n"]);return g=function(){return n},n}function x(){var n=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n"]);return x=function(){return n},n}function v(){var n=Object(d.a)(["\n  position: absolute;\n  padding-top: 20px;\n  width: 40%;\n  height: 80%;\n  left: 30vw;\n  top: 2vw;\n  background: rgba(35, 21, 120, 0.73);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 11px;\n"]);return v=function(){return n},n}var O=j.b.div(v()),y=j.b.div(x()),w=j.b.div(g()),m=j.b.span(h(),(function(n){var t=n.color;return t})),S=function(n,t){return u()({url:l.a+"api/log-login-attempt/",method:"POST",data:{"user-id":n,"user-password":t},headers:{"Content-Type":"application/json"},mode:"cors"})};t.default=function(){var n=a(Object(i.useState)(""),2),t=n[0],e=n[1],o=a(Object(i.useState)(""),2),c=o[0],u=o[1],l=a(Object(i.useState)(""),2),d=l[0],j=l[1],h=Object(f.b)();return Object(r.jsxs)(O,{children:[Object(r.jsx)(m,{color:"white",children:"Sign In"}),Object(r.jsx)(w,{children:Object(r.jsx)(s.a,{name:"username",type:"text",label:"Username",value:t,size:"large",inputChange:function(n){e(n.target.value)}})}),Object(r.jsx)(w,{children:Object(r.jsx)(s.a,{name:"password",type:"password",label:"Password",value:c,size:"large",inputChange:function(n){u(n.target.value)}})}),Object(r.jsx)(y,{children:Object(r.jsx)(b.a,{onClick:function(){h(Object(p.b)()),S(t,c).then((function(n){!1===n.data?(j("Wrong Credentials, try again"),console.log(n)):(j(""),console.log(n)),h(Object(p.a)())})).catch((function(n){h(Object(p.a)()),alert("Something went wrong, Recorded "+n)}))},label:"Sign In"})}),Object(r.jsx)(m,{color:"red",children:d})]})}}}]);
//# sourceMappingURL=5.09f43dbf.chunk.js.map