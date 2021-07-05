(this.webpackJsonppaugur=this.webpackJsonppaugur||[]).push([[1],{13:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a={SET_KEY:"SET_API_KEY",CLEAR_KEY:"CLEAR_API_KEY"},c={YOUTUBE:"SET_MEDIA_YOUTUBE",TWITTER:"SET_MEDIA_TWITTER",REDDIT:"SET_MEDIA_REDDIT",AMAZON:"SET_MEDIA_AMAZON"}},17:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={BASE:"/",ABOUT:"/about/info",SIGN_UP:"/user/register",SIGN_IN:"/user/signin",DISPLAY:"/query/all",QUERY:"/query/new",ANALYZER_TOOLS:"/tools"}},24:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={START:"START_LOADING",CANCEL:"CANCEL_LOADING"}},29:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={YOUTUBE:"Youtube",TWITTER:"Twitter",REDDIT:"Reddit",AMAZON:"Amazon"}},47:function(e,t,n){},48:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n(0),r=n(19),i=n.n(r),o=n(20),u=n(18),O=n(12),E=n(31),s=n.n(E),d=n(1),b=n(24),I={loading:!1},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.a.START:case b.a.CANCEL:return Object(d.a)(Object(d.a)({},e),{},{loading:t.payload});default:return e}},j=n(9),T={comments:[],creatorInfo:[],videoInfo:[],mediaId:""},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.b.COMMENTS:case j.a.COMMENTS:return Object(d.a)(Object(d.a)({},e),{},{comments:t.payload});case j.b.MEDIA_ID:case j.a.MEDIA_ID:return Object(d.a)(Object(d.a)({},e),{},{mediaId:t.payload});case j.b.CREATOR_INFO:case j.a.CREATOR_INFO:return Object(d.a)(Object(d.a)({},e),{},{creatorInfo:t.payload});case j.b.VIDEO_INFO:case j.a.VIDEO_INFO:return Object(d.a)(Object(d.a)({},e),{},{videoInfo:t.payload});default:return e}},A=n(13),_={apiKey:"",mediaPref:n(29).a.YOUTUBE},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A.a.SET_KEY:case A.a.CLEAR_KEY:return Object(d.a)(Object(d.a)({},e),{},{apiKey:t.payload});case A.b.YOUTUBE:case A.b.TWITTER:case A.b.REDDIT:case A.b.AMAZON:return Object(d.a)(Object(d.a)({},e),{},{mediaPref:t.payload});default:return e}},p=Object(O.c)({loadingReducer:l,mediaReducer:f,clientReducer:R}),D=n(32),N=[s.a,D.a],h=Object(O.d)(p,O.a.apply(void 0,N)),v=n.p+"static/media/loading.7005ff2e.gif",S=n(14),g=n(15);function M(){var e=Object(S.a)(["\n  padding-top: 15vw;\n  height: 25vmin;\n  padding-bottom: 20px;\n"]);return M=function(){return e},e}var C=g.b.img(M()),x=function(){return Object(a.jsx)("div",{children:Object(a.jsx)(C,{src:v,alt:"Loading"})})};function m(){var e=Object(S.a)(["\n  font-weight: bold;\n  font-size: 24px;\n"]);return m=function(){return e},e}var y=g.b.span(m()),L=function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{}),Object(a.jsx)(y,{children:"Looking... Please Wait"})]})},Y=n(4),U=n(17);function F(){var e=Object(S.a)(['\n  text-align: center;\n  color: white;\n  font-family: "Roboto";\n  font-size: 25px;\n']);return F=function(){return e},e}var w=g.b.div(F()),P=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,105))})),B=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,104))})),K=Object(c.lazy)((function(){return Promise.all([n.e(0),n.e(4),n.e(6)]).then(n.bind(null,102))})),z=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,103))})),V=function(){var e=Object(u.c)((function(e){return e.loadingReducer})).loading;return Object(a.jsx)(w,{children:e?Object(a.jsx)(L,{}):Object(a.jsxs)(c.Suspense,{fallback:Object(a.jsx)(L,{}),children:[Object(a.jsx)(Y.a,{exact:!0,path:U.a.BASE,component:P}),Object(a.jsx)(Y.a,{exact:!0,path:U.a.QUERY,component:K}),Object(a.jsx)(Y.a,{exact:!0,path:U.a.DISPLAY,component:z}),Object(a.jsx)(Y.a,{exact:!0,path:U.a.SIGN_IN,component:B})]})})};n(47);i.a.render(Object(a.jsx)(u.a,{store:h,children:Object(a.jsx)(o.a,{children:Object(a.jsx)(V,{})})}),document.getElementById("root"))},9:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var a={COMMENTS:"SET_COMMENTS",MEDIA_ID:"SET_MEDIA_ID",CREATOR_INFO:"SET_CREATOR_INFO",VIDEO_INFO:"SET_VIDEO_INFO"},c={COMMENTS:"CLEAR_COMMENTS",MEDIA_ID:"CLEAR_MEDIA_ID",CREATOR_INFO:"CLEAR_CREATOR_INFO",VIDEO_INFO:"CLEAR_VIDEO_INFO"}}},[[48,2,3]]]);
//# sourceMappingURL=main.f861de65.chunk.js.map