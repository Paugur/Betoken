(this.webpackJsonppaugur=this.webpackJsonppaugur||[]).push([[5],{104:function(t,n,r){"use strict";r.r(n),r.d(n,"SignInAPI",(function(){return G}));var e=r(3),o=r(72),i=r.n(o);function a(t,n,r,e,o,i,a){try{var c=t[i](a),u=c.value}catch(s){return void r(s)}c.done?n(u):Promise.resolve(u).then(e,o)}var c=r(71),u=r(0),s=r(59),l=r.n(s),f=r(53),h=r(57),p=r(58),d=r(18),b=r(54),v=r(51),g=r(17),j=r(14),y=r(15),x=r(52);function m(){var t=Object(j.a)(["\n  transform: translate(0%, -60%);\n"]);return m=function(){return t},t}function O(){var t=Object(j.a)(["\n  font-size: 15px;\n"]);return O=function(){return t},t}function w(){var t=Object(j.a)(["\n  position: relative;\n  font-weight: bold;\n  font-size: ","px;\n  color: ",";\n"]);return w=function(){return t},t}function L(){var t=Object(j.a)(["\n  transform: translate(32%, -18%);\n"]);return L=function(){return t},t}function k(){var t=Object(j.a)(["\n  display: flex;\n  justify-content: center;\n"]);return k=function(){return t},t}function E(){var t=Object(j.a)(["\n  position: absolute;\n  padding-top: 20px;\n  width: 35%;\n  height: 60%;\n  left: 30vw;\n  top: 2vw;\n  overflow: hidden;\n  background: rgba(35, 21, 120, 0.73);\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 11px;\n"]);return E=function(){return t},t}var S=y.b.div(E()),_=y.b.div(k()),P=y.b.div(L()),z=y.b.span(w(),(function(t){var n=t.size;return null===n?36:n}),(function(t){var n=t.color;return n})),N=Object(y.b)(x.a)(O()),T=y.b.div(m()),G=function(t,n){return l()({url:f.a+"api/log-login-attempt/",method:"POST",data:{"user-id":t,"user-password":n},headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(t){return t.data})).catch((function(t){alert("Something went wrong, Recorded "+t)}))};n.default=function(){var t=Object(u.useState)(""),n=Object(c.a)(t,2),r=n[0],o=n[1],s=Object(u.useState)(""),l=Object(c.a)(s,2),f=l[0],j=l[1],y=Object(u.useState)(!1),x=Object(c.a)(y,2),m=x[0],O=x[1],w=Object(d.b)(),L=function(){var t,n=(t=i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return w(Object(b.b)()),t.next=3,G(r,f);case 3:n=t.sent,O(!n["login-success"]),console.log(n["user-dict"]),w(Object(b.a)());case 7:case"end":return t.stop()}}),t)})),function(){var n=this,r=arguments;return new Promise((function(e,o){var i=t.apply(n,r);function c(t){a(i,e,o,c,u,"next",t)}function u(t){a(i,e,o,c,u,"throw",t)}c(void 0)}))});return function(){return n.apply(this,arguments)}}();return Object(e.jsxs)(S,{children:[Object(e.jsx)(v.a,{}),Object(e.jsx)(z,{color:"white",children:"Sign In"}),Object(e.jsxs)(P,{children:[Object(e.jsx)(h.a,{name:"username",type:"text",label:"Username",value:r,size:"large",inputChange:function(t){o(t.target.value)}}),Object(e.jsx)(h.a,{name:"password",type:"password",label:"Password",value:f,size:"large",inputChange:function(t){j(t.target.value)}})]}),Object(e.jsxs)(T,{children:[m?Object(e.jsx)(z,{size:20,color:"red",children:"Wrong credentials, try again."}):Object(e.jsx)(z,{size:20,color:"red"}),Object(e.jsx)(_,{children:Object(e.jsx)(p.a,{onClick:L,label:"Sign In"})}),Object(e.jsx)(N,{to:g.a.SIGN_UP,children:"New User? Click here to Register"})]})]})}},51:function(t,n,r){"use strict";var e=r(1),o=r(3),i=(r(0),r.p+"static/media/paugur.65210d63.svg"),a=r(14),c=r(15);function u(){var t=Object(a.a)(["\n  ","\n"]);return u=function(){return t},t}function s(){var t=Object(a.a)(["\n  height: 15vmin;\n  padding-bottom: 20px;\n"]);return s=function(){return t},t}function l(){var t=Object(a.a)(["\n  height: 25vmin;\n  padding-bottom: 20px;\n"]);return l=function(){return t},t}function f(){var t=Object(a.a)(["\n  animation-name: float;\n  animation-duration: 3s;\n  animation-iteration-count: infinite;\n  animation-timing-function: ease-in-out;\n  @keyframes float {\n    0% {\n      transform: translate(0, 0px);\n    }\n    50% {\n      transform: translate(0, 15px);\n    }\n    100% {\n      transform: translate(0, -0px);\n    }\n  }\n"]);return f=function(){return t},t}var h=c.b.div(f()),p=Object(c.a)(l()),d=Object(c.a)(s()),b=c.b.img(u(),(function(t){return t.isMainFocus?p:d}));n.a=function(t){var n=Object.assign({},t);return Object(o.jsx)(h,{children:Object(o.jsx)(b,Object(e.a)({src:i,alt:"Paugur"},n))})}},52:function(t,n,r){"use strict";var e=r(1),o=r(3),i=r(50),a=(r(0),r(14)),c=r(15),u=r(20);function s(){var t=Object(a.a)(["\n  padding: 20px;\n  text-decoration: none;\n  ","\n"]);return s=function(){return t},t}function l(){var t=Object(a.a)(["\n  cursor: pointer;\n  color: white;\n"]);return l=function(){return t},t}function f(){var t=Object(a.a)(["\n  cursor: not-allowed;\n  color: gray;\n"]);return f=function(){return t},t}var h=Object(c.a)(f()),p=Object(c.a)(l()),d=Object(c.b)(u.b)(s(),(function(t){return t.disabled?h:p}));n.a=function(t){var n=t.children,r=t.disabled,a=Object(i.a)(t,["children","disabled"]);return r?Object(o.jsx)(d,{as:"div",disabled:!0,children:n}):Object(o.jsx)(d,Object(e.a)(Object(e.a)({},a),{},{children:n}))}},53:function(t,n,r){"use strict";r.d(n,"a",(function(){return e}));var e="http://127.0.0.1:5000/"},54:function(t,n,r){"use strict";r.d(n,"b",(function(){return o})),r.d(n,"a",(function(){return i}));var e=r(24),o=function(){return{type:e.a.START,payload:!0}},i=function(){return{type:e.a.START,payload:!1}}},57:function(t,n,r){"use strict";var e=r(3),o=r(1),i=r(50),a=(r(0),r(14)),c=r(15);function u(){var t=Object(a.a)(["\n  color: ",";\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n\n  &.filled {\n    ","\n  }\n"]);return u=function(){return t},t}function s(){var t=Object(a.a)(["\n  background: none;\n  background-color: white;\n  color: ",";\n  font-size: 18px;\n  padding: 10px 10px 10px 10px;\n  display: block;\n  ","\n  border: none;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  border-radius: 7px;\n  margin: 25px 0;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus ~ label {\n    ","\n  }\n"]);return s=function(){return t},t}function l(){var t=Object(a.a)(['\n  position: relative;\n  margin: 45px 0;\n\n  input[type="password"] {\n    letter-spacing: 0.2em;\n  }\n']);return l=function(){return t},t}function f(){var t=Object(a.a)(["\n  width: 35%;\n"]);return f=function(){return t},t}function h(){var t=Object(a.a)(["\n  width: 20%;\n"]);return h=function(){return t},t}function p(){var t=Object(a.a)(["\n  width: 15%;\n"]);return p=function(){return t},t}function d(){var t=Object(a.a)(["\n  top: -25px;\n  font-size: 18px;\n  color: ",";\n"]);return d=function(){return t},t}var b=Object(c.a)(d(),"white"),v=Object(c.a)(p()),g=Object(c.a)(h()),j=Object(c.a)(f()),y=c.b.div(l()),x=c.b.input(s(),"black",(function(t){var n=t.size;switch(n){case"small":return v;case"large":return j;default:return g}}),b),m=c.b.label(u(),"gray",b);n.a=function(t){var n=t.inputChange,r=t.label,a=Object(i.a)(t,["inputChange","label"]);return Object(e.jsxs)(y,{children:[Object(e.jsx)(x,Object(o.a)({onChange:n},a)),r?Object(e.jsx)(m,{className:a.value.length?"filled":"",children:r}):null]})}},58:function(t,n,r){"use strict";var e=r(1),o=r(3),i=r(50),a=(r(0),r(14));function c(){var t=Object(a.a)(["\n  min-width: 100px;\n  height: 40px;\n  letter-spacing: 0.5px;\n  line-height: 35px;\n  padding: 0 15px 0 15px;\n  font-size: 15px;\n  background-color: #9836f6;\n  color: white;\n  font-weight: bolder;\n  border: 1px solid #011f30;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n\n  &:hover {\n    background-color: #6423a1;\n    color: white;\n    border: 1px solid #011f30;\n    transition: background-color 0.5s ease-out;\n  }\n"]);return c=function(){return t},t}var u=r(15).b.button(c());n.a=function(t){var n=t.label,r=Object(i.a)(t,["label"]);return Object(o.jsx)(u,Object(e.a)(Object(e.a)({},r),{},{children:n}))}},72:function(t,n,r){t.exports=r(73)},73:function(t,n,r){var e=function(t){"use strict";var n,r=Object.prototype,e=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,r){return Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(N){u=function(t,n,r){return t[n]=r}}function s(t,n,r,e){var o=n&&n.prototype instanceof v?n:v,i=Object.create(o.prototype),a=new _(e||[]);return i._invoke=function(t,n,r){var e=f;return function(o,i){if(e===p)throw new Error("Generator is already running");if(e===d){if("throw"===o)throw i;return z()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===b)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(e===f)throw e=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);e=p;var u=l(t,n,r);if("normal"===u.type){if(e=r.done?d:h,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(e=d,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,n,r){try{return{type:"normal",arg:t.call(n,r)}}catch(N){return{type:"throw",arg:N}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",b={};function v(){}function g(){}function j(){}var y={};y[i]=function(){return this};var x=Object.getPrototypeOf,m=x&&x(x(P([])));m&&m!==r&&e.call(m,i)&&(y=m);var O=j.prototype=v.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function L(t,n){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"===typeof f&&e.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,e){function i(){return new n((function(n,o){r(t,e,n,o)}))}return o=o?o.then(i,i):i()}}function k(t,r){var e=t.iterator[r.method];if(e===n){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=n,k(t,r),"throw"===r.method))return b;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var o=l(e,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,b;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=n),r.delegate=null,b):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function S(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(e.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=n,r.done=!0,r};return a.next=a}}return{next:z}}function z(){return{value:n,done:!0}}return g.prototype=O.constructor=j,j.constructor=g,g.displayName=u(j,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"===typeof t&&t.constructor;return!!n&&(n===g||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,j):(t.__proto__=j,u(t,c,"GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},w(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(n,r,e,o,i){void 0===i&&(i=Promise);var a=new L(s(n,r,e,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(O),u(O,c,"Generator"),O[i]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var n=[];for(var r in t)n.push(r);return n.reverse(),function r(){for(;n.length;){var e=n.pop();if(e in t)return r.value=e,r.done=!1,r}return r.done=!0,r}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&e.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(e,o){return c.type="throw",c.arg=t,r.next=e,o&&(r.method="next",r.arg=n),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=e.call(a,"catchLoc"),s=e.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,b):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),b},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),b}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc===t){var e=r.completion;if("throw"===e.type){var o=e.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:P(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=n),b}},t}(t.exports);try{regeneratorRuntime=e}catch(o){Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=5.2afc0948.chunk.js.map