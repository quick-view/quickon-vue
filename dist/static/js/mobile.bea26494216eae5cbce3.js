webpackJsonp([5],{CWtc:function(e,t){},Qoap:function(e,t,a){"use strict";var o=a("uXeI"),n=a.n(o),s=a("mtWM"),i=a.n(s),r=a("mw3O"),c=a.n(r),d=a("dyOy"),l=a.n(d),u=a("Y4FN"),p=a.n(u);function h(e,t,a){return-1===e.indexOf("?")?e+="?":e+="&",e+=t+"="+a}const m="1004",g="5",f=1,v=i.a.create({baseURL:"https://api.huishoubao.com"});v.interceptors.request.use((e,t)=>{const a=p.a.get("token");a&&(e.url=h(e.url,"token",a)),e.url=h(e.url,"version",f),e.url=h(e.url,"pid",m),e.url=h(e.url,"platform",g),e.url=h(e.url,"timestamp",Date.parse(new Date));const o=((e,t)=>{const a=Object.assign({},e,t),o=[];for(const e in a)o.push(e+a[e]);let s=o.sort().join("");return s=`${s}b7cab12b2b81385dd2cccb8ce67e4998`,n()(s).toLowerCase()})(l()(e.url,!0).query,e.data);return e.url=h(e.url,"sign",o),"post"===e.method&&(e.data=c.a.stringify(e.data),e.headers||(e.headers={}),e.headers["Content-Type"]="application/x-www-form-urlencoded"),e}),v.interceptors.response.use(e=>e.data,e=>e);var C=v;t.a={checkLoginStatus:()=>C.get("/api/user/checkLoginStatus"),getCode:(e,t)=>C.post("/api/user/getCode",{tel:e,imgCode:t}),login:(e,t="",a=10)=>C.post("/api/user/login",{tel:e,code:t,validDays:a}),addCoupon:({id:e,isCouponParcel:t=0,couponInfoShow:a=1})=>C.post("/api/coupon/addByUser",{id:e,isCouponParcel:t,couponInfoShow:a}),createUploadSign:({fileName:e,path:t="/iosjc/dev/",customPath:a="/kl/",uploadWay:o="tencentUpload"})=>C.post(`/api/upload/getSign?path=${t}&customPath=${a}&uploadWay=${o}&fileName=${e}`)}},eWyf:function(e,t){},eh36:function(e,t){},hW8u:function(e,t){},iuGr:function(e,t){},lZHg:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=a("7+uW"),s=a("Dd8w"),i=a.n(s),r=a("NYxO"),c=a("Xxa5"),d=a.n(c),l=a("exGp"),u=a.n(l),p=(a("eqfM"),a("/QYm")),h=(a("MY4N"),a("0zAV")),m=(a("3Lne"),a("SSsa")),g=(a("i0mo"),a("Hkar")),f=(a("OWWB"),a("1fWZ")),v=a("Y4FN"),C=a.n(v),b=a("Qoap"),w=a("bOdI"),y=a.n(w),_={components:(o={},y()(o,h.a.name,h.a),y()(o,m.a.name,m.a),o),props:{url:""},data:function(){return{imgCode:""}},methods:{handleClick:function(){this.$emit("confirm",this.imgCode)}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.url?a("div",{staticClass:"code-pop"},[a("div",{staticClass:"body"},[a("span",{staticClass:"btn-close"},[e._v("X")]),e._v(" "),a("div",{staticClass:"form-item"},[a("van-field",{staticClass:"code-field",attrs:{placeholder:"短信验证码"},model:{value:e.imgCode,callback:function(t){e.imgCode=t},expression:"imgCode"}}),e._v(" "),a("img",{attrs:{src:e.url,alt:""}})],1),e._v(" "),a("van-button",{staticClass:"code-btn",attrs:{disabled:!e.imgCode.length,type:"primary",block:""},on:{click:e.handleClick}},[e._v("确认")])],1)]):e._e()},staticRenderFns:[]};var P=a("VU/8")(_,k,!1,function(e){a("eWyf")},"data-v-6efc6af8",null).exports;n.default.use(h.a).use(m.a).use(g.a).use(f.a);var L={components:{CodePop:P},props:{onLogin:Function},data:function(){return{tel:"",code:"",imgCode:"",loading:!1,codeUrl:"",showCodePop:!1}},computed:i()({},Object(r.b)({token:function(e){return e.user.token}}),{disabled:function(){return 11!==this.tel.length||this.code.length<6},redirect:function(){return this.$route.query.redirect}}),created:function(){this.$route.query.authType&&(this.authType=this.$route.query.authType)},methods:{handleGetCode:function(){var e=this;b.a.getCode(this.tel,this.imgCode).then(function(t){0==+t._errCode&&(t._data.captchaUrl?(e.codeUrl=t._data.captchaUrl,e.showCodePop=!0):Object(p.a)("验证码已发送"))})},handleLogin:function(){var e=this;return u()(d.a.mark(function t(){return d.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.$store.dispatch("user/login",{tel:e.tel,code:e.code});case 1:case"end":return t.stop()}},t,e)}))()},handleClose:function(){this.$store.commit("user/setShowLogin",!1)},handleConfirmImgCode:function(e){this.imgCode=e,this.showCodePop=!1,this.handleGetCode()}}},x={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"view view-login"},[a("div",{staticClass:"btn-close",on:{click:e.handleClose}},[e._v("X")]),e._v(" "),a("div",{staticClass:"form"},[a("van-cell-group",[a("div",{staticClass:"form-item"},[a("van-field",{staticClass:"tel-input",attrs:{placeholder:"手机号码"},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}}),e._v(" "),a("van-button",{staticClass:"code-button",attrs:{type:"primary",size:"small",disabled:11!==e.tel.length},on:{click:e.handleGetCode}},[e._v("获取验证码")])],1),e._v(" "),a("van-field",{attrs:{placeholder:"短信验证码"},model:{value:e.code,callback:function(t){e.code=t},expression:"code"}})],1),e._v(" "),a("van-button",{staticClass:"button",attrs:{type:"primary",size:"large",loading:e.loading,disabled:e.disabled},on:{click:e.handleLogin}},[e._v("立即登录")])],1),e._v(" "),e.showCodePop?a("div",[a("CodePop",{attrs:{url:e.codeUrl},on:{confirm:e.handleConfirmImgCode}})],1):e._e()])},staticRenderFns:[]};var D={name:"App",components:{LoginPop:a("VU/8")(L,x,!1,function(e){a("CWtc")},"data-v-c8a7e734",null).exports},computed:i()({},Object(r.b)({showLogin:function(e){return e.user.showLogin}}))},O={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("transition",{attrs:{name:"slide"}},[this.showLogin?t("login-pop"):this._e()],1)],1)},staticRenderFns:[]};var S=a("VU/8")(D,O,!1,function(e){a("iuGr")},"data-v-768c24f6",null).exports,$=a("/ocq");n.default.use($.a);var U=new $.a({routes:[{path:"/",name:"welcome",component:()=>a.e(0).then(a.bind(null,"PCxD"))},{path:"/demo",name:"demo",component:()=>a.e(2).then(a.bind(null,"n+aD"))},{path:"/rich-text",name:"rich-text",component:()=>a.e(1).then(a.bind(null,"LRlk"))}]}),I=a("Fd2+");var W={namespaced:!0,state:{token:C.a.get("token"),userInfo:C.a.get("userInfo"),showLogin:!1},mutations:{setShowLogin(e,t){e.showLogin=t},setToken(e,t){e.token=t,C.a.set("token",t)},setUserInfo(e,t){e.userInfo=t,C.a.set("userInfo",t)}},actions:{login:({commit:e},{tel:t,code:a})=>b.a.login(t,a).then(t=>{0==+t._errCode?(e("setUserInfo",t._data),e("setToken",t._data.token),e("setShowLogin",!1)):Object(I.a)(t._errStr)})}},j=a("rmYS"),E=a("dyOy"),T=a.n(E);n.default.use(r.a);var q=new r.a.Store({state:{editKey:"",pageData:{title:"",widget:[]}},mutations:{setPageData(e,t){const{widget:a}=t;a.forEach(e=>{e.style&&Object.keys(e.style).forEach(t=>{t||delete e.style[t]})}),e.pageData=t},setEditKey(e,t){e.editKey=t}},actions:{getPageData({commit:e}){const t=T()(window.location.href,!0).query;t.pageId?j.a.getPageDetails(t.pageId).then(t=>{(t=t.data).data.widget=JSON.parse(t.data.widget),e("setPageData",t.data)}):e("setPageData",C.a.get("editProps"))}},modules:{user:W}}),F=(a("uciz"),a("Lw6n")),N=a.n(F);console.log(new N.a),n.default.config.productionTip=!1,new n.default({el:"#app",store:q,router:U,components:{App:S},template:"<App />"}),window.addEventListener("message",e=>{"reload"===e.data.type&&q.commit("setPageData",C.a.get("editProps")),"setEditKey"===e.data.type&&q.commit("setEditKey",C.a.get("editKey"))},!1)},nOtf:function(e,t){},nsZj:function(e,t){},px3J:function(e,t){},rmYS:function(e,t,a){"use strict";var o=a("mtWM");const n=a.n(o).a.create({baseURL:"http://kbapi.airtlab.com"});t.a={getPageDetails:e=>n.get(`/api/page/${e}`),getRichTextDetails:e=>n.get(`/api/richText/${e}`)}},uciz:function(e,t){}},["lZHg"]);
//# sourceMappingURL=mobile.bea26494216eae5cbce3.js.map