(this.webpackJsonppaugur=this.webpackJsonppaugur||[]).push([[0],{13:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a={SET_KEY:"SET_API_KEY",CLEAR_KEY:"CLEAR_API_KEY"},c={YOUTUBE:"SET_MEDIA_YOUTUBE",TWITTER:"SET_MEDIA_TWITTER",REDDIT:"SET_MEDIA_REDDIT",AMAZON:"SET_MEDIA_AMAZON"}},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={START:"START_LOADING",CANCEL:"CANCEL_LOADING"}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={YOUTUBE:"Youtube",TWITTER:"Twitter",REDDIT:"Reddit",AMAZON:"Amazon"}},46:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n(18),i=n.n(r),o=n(22),u=n(17),O=n(12),d=n(30),s=n.n(d),E=n(1),b=n(23),j={loading:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.START:case b.a.CANCEL:return Object(E.a)(Object(E.a)({},e),{},{loading:t.payload});default:return e}},I=n(9),T={comments:[],creatorInfo:[],videoInfo:[],mediaId:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I.b.COMMENTS:case I.a.COMMENTS:return Object(E.a)(Object(E.a)({},e),{},{comments:t.payload});case I.b.MEDIA_ID:case I.a.MEDIA_ID:return Object(E.a)(Object(E.a)({},e),{},{mediaId:t.payload});case I.b.CREATOR_INFO:case I.a.CREATOR_INFO:return Object(E.a)(Object(E.a)({},e),{},{creatorInfo:t.payload});case I.b.VIDEO_INFO:case I.a.VIDEO_INFO:return Object(E.a)(Object(E.a)({},e),{},{videoInfo:t.payload});default:return e}},_=n(13),A={apiKey:"",mediaPref:n(28).a.YOUTUBE},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _.a.SET_KEY:case _.a.CLEAR_KEY:return Object(E.a)(Object(E.a)({},e),{},{apiKey:t.payload});case _.b.YOUTUBE:case _.b.TWITTER:case _.b.REDDIT:case _.b.AMAZON:return Object(E.a)(Object(E.a)({},e),{},{mediaPref:t.payload});default:return e}},R=Object(O.c)({loadingReducer:l,mediaReducer:f,userReducer:p}),h=n(31),D=[s.a,h.a],v=Object(O.d)(R,O.a.apply(void 0,D)),N=n.p+"static/media/loading.7005ff2e.gif",x=n(14),M=n(15);function C(){var e=Object(x.a)(["\n  padding-top: 15vw;\n  height: 25vmin;\n  padding-bottom: 20px;\n"]);return C=function(){return e},e}var g=M.b.img(C()),m=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(g,{src:N,alt:"Loading"})})};function y(){var e=Object(x.a)(["\n  font-weight: bold;\n  font-size: 24px;\n"]);return y=function(){return e},e}var S=M.b.span(y()),L=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(m,{}),Object(a.jsx)(S,{children:"Looking... Please Wait"})]})},F=n(4);function Y(){var e=Object(x.a)(['\n  text-align: center;\n  color: white;\n  font-family: "Roboto";\n  font-size: 25px;\n']);return Y=function(){return e},e}var U=M.b.div(Y()),w=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,98))})),z=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,99))})),K=Object(c.lazy)((function(){return Promise.all([n.e(3),n.e(5)]).then(n.bind(null,95))})),P=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,97))})),B=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(6)]).then(n.bind(null,96))})),V=function(){var e=Object(u.c)((function(e){return e.loadingReducer})).loading;return Object(a.jsx)(U,{children:e?Object(a.jsx)(L,{}):Object(a.jsxs)(c.Suspense,{fallback:Object(a.jsx)(L,{}),children:[Object(a.jsx)(F.a,{exact:!1,path:"/",component:w}),Object(a.jsx)(F.a,{exact:!0,path:"/",component:z}),Object(a.jsx)(F.a,{exact:!0,path:"/search",component:K}),Object(a.jsx)(F.a,{exact:!0,path:"/display",component:P}),Object(a.jsx)(F.a,{exact:!1,path:"/",component:B})]})})};n(46);i.a.render(Object(a.jsx)(u.a,{store:v,children:Object(a.jsx)(o.a,{children:Object(a.jsx)(V,{})})}),document.getElementById("root"))},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a={COMMENTS:"SET_COMMENTS",MEDIA_ID:"SET_MEDIA_ID",CREATOR_INFO:"SET_CREATOR_INFO",VIDEO_INFO:"SET_VIDEO_INFO"},c={COMMENTS:"CLEAR_COMMENTS",MEDIA_ID:"CLEAR_MEDIA_ID",CREATOR_INFO:"CLEAR_CREATOR_INFO",VIDEO_INFO:"CLEAR_VIDEO_INFO"}}},[[47,1,2]]]);
//# sourceMappingURL=main.bbe87c00.chunk.js.map