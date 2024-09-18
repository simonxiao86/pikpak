var de=Object.defineProperty;var U=Object.getOwnPropertySymbols;var pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))pe.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))me.call(t,o)&&H(e,o,t[o]);return e};import{d as I,u as _e,r as f,o as G,a as K,b as v,c as Y,w as c,e as i,f as n,N as he,g as ge,h as fe,z as ve,i as ke,j as Ee,k as Z,l as ye,m as Fe,n as we,p as Ae,q as xe,s as E,t as Ce,v as be,x as De,y,A as N,B as Ie,C as Ne,D as b,E as h,F as q,G as Pe,H as Le,I as P,L as Se,J as X,K as $e,M as Be,O as Oe,P as Te,Q as Ve,R as Re,S as je,T as Me,U as Q,V as ze,W as Je,X as Ue,Y as He,Z as We,_ as Ge,$ as Ke,a0 as Ye,a1 as Ze,a2 as qe,a3 as Xe,a4 as Qe}from"./vendor.0d5d26a8.js";const et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};et();const tt=I({setup(e){return window.$message=_e(),(t,o)=>null}}),ot=["https://ppak.fantasy-world-x.workers.dev"],at=I({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return G(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(ot))}),(o,s)=>{const a=K("router-view");return v(),Y(n(Ee),{locale:n(ve),"date-locale":n(ke),"theme-overrides":t.value},{default:c(()=>[i(n(fe),null,{default:c(()=>[i(n(he),null,{default:c(()=>[i(n(ge),null,{default:c(()=>[i(tt),i(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),st="modulepreload",ee={},nt="/pikpak/",p=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${nt}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":st,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((x,_)=>{u.addEventListener("load",x),u.addEventListener("error",_)})})).then(()=>t())};var it="/pikpak/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const s=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(s.length>0){const a=Math.floor(Math.random()*s.length);e.url=s[a]+"/"+e.url}}return e});let w=!1;m.interceptors.response.use(e=>e,e=>{var s;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const a=window.localStorage.getItem("pikpakLoginData"),r=a?JSON.parse(a):{};return r.username&&r.password&&!w?(console.log("wait",o.url),w=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),w=!1,m(o))).catch(()=>(D.push("/login"),!1))):r.username&&r.password&&w?new Promise((u,x)=>{const _=setInterval(()=>{w||(clearInterval(_),u(m(o)))},100)}):(D.push("/login"),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const te=Z.create({});te.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const Dt=te,oe=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const rt=h("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[h("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),h("div",{class:"logo-box__text"},"PikPak")],-1),ut={key:0,class:"content-bottom"},lt=y("\u4F1A\u5458\u7801"),ct={style:{"margin-bottom":"0"}},dt=h("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5\uFFE5119\u8D2D\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361",-1),pt=y(" 2021\u5E7412\u670823\u65E5~2021\u5E7412\u670831\u65E5 \u30101\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A119\u5143\uFF01\u539F\u4EF7450\u5143\u3011 2022\u5E741\u67081\u65E5\u8D77\uFF1A 1\u5E74PikPak\u4F53\u9A8C\u4F1A\u5458\u4EC5\u552E\uFF1A169\u5143\uFF01\u539F\u4EF7450\u5143\u3011 -\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u5B98\u65B9\u4EE3\u7406\u5546\u5206\u9500\uFF0C\u611F\u8C22\u652F\u6301 "),mt={class:"bottom-user-info"},_t={key:0,src:it,class:"user-info-avatar"},ht={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},gt={class:"user-info-name"},ft={key:0},vt={class:"action"},kt=y(" \u9000\u51FA\u767B\u5F55 "),Et=h("p",null,[h("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),yt=y("\u6DFB\u52A0"),Ft=I({setup(e){const t=f(!1),o=l=>()=>Q(P,null,{default:()=>Q(l)}),s=ye(),a=Fe(),r=f([{label:"\u6587\u4EF6",key:"list",icon:o(Ke)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u9080\u8BF7",key:"invited",icon:o(He)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(We)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ge)}]),u=f(),x=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},_=f(),L=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{_.value=l.data}).catch(l=>{console.log(l)})},k=f(),ae=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var d;k.value=(d=l.data)==null?void 0:d.data})},se=(l,d)=>{console.log(d),s.push("/"+d.key)};G(()=>{x(),L(),ae()});const C=f(),F=f(!1),ne=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:C.value,data:{}}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),L()}).catch(l=>{console.log(l)}).finally(()=>{F.value=!1})},S=f(!1),ie=l=>{S.value=l<800,t.value||(t.value=l<800)};we(a,()=>{S.value&&(t.value=!0)});const re=Ae(),ue=()=>{re.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(l=>{console.log(l)})}})};return(l,d)=>{const le=K("router-view"),ce=xe("resize");return v(),E(Me,null,[Ce(i(n(X),{"has-sider":"",onResize:ie},{default:c(()=>[i(n(be),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:d[1]||(d[1]=g=>t.value=!0),onExpand:d[2]||(d[2]=g=>t.value=!1),bordered:""},{default:c(()=>{var g,$,B,O,T,V,R,j,M,z,J;return[rt,i(n(De),{options:r.value,value:String(n(a).name),"onUpdate:value":se},null,8,["options","value"]),t.value?b("",!0):(v(),E("div",ut,[y(N(n(oe)((g=_.value)==null?void 0:g.quota.usage))+" / "+N(n(oe)(($=_.value)==null?void 0:$.quota.limit))+" ",1),i(n(Ie),{type:"primary",onClick:d[0]||(d[0]=xt=>F.value=!0)},{default:c(()=>[lt]),_:1}),((B=_.value)==null?void 0:B.quota)?(v(),Y(n(Ne),{key:0,type:"line",percentage:Number((((O=_.value)==null?void 0:O.quota.usage)/((T=_.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((V=k.value)==null?void 0:V.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):b("",!0),h("p",ct,[i(n(q),{width:600,placement:"right"},{trigger:c(()=>[dt]),default:c(()=>[pt]),_:1})])])),t.value?b("",!0):(v(),E("div",{key:1,class:Pe(["sider-bottom",{vip:((R=k.value)==null?void 0:R.status)==="ok"}])},[h("div",mt,[((j=k.value)==null?void 0:j.status)==="ok"?(v(),E("img",_t)):(v(),E("img",ht)),h("div",gt,[y(N((M=u.value)==null?void 0:M.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),E("div",ft,[i(n(Le),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):b("",!0)]),h("div",vt,[i(n(q),null,{trigger:c(()=>[i(n(P),{onClick:ue},{default:c(()=>[i(n(Se))]),_:1})]),default:c(()=>[kt]),_:1})])])],2))]}),_:1},8,["collapsed"]),i(n(X),null,{default:c(()=>[i(n($e),{style:{height:"100vh"}},{default:c(()=>[i(n(Be),{style:{"max-height":"100vh"}},{default:c(()=>[i(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ce]]),i(n(je),{show:F.value,"onUpdate:show":d[5]||(d[5]=g=>F.value=g)},{default:c(()=>[i(n(Oe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[i(n(P),{onClick:d[3]||(d[3]=g=>F.value=!1)},{default:c(()=>[i(n(Te))]),_:1})]),action:c(()=>[i(n(Ve),{block:!0,type:"primary",disabled:!C.value,onClick:ne},{default:c(()=>[yt]),_:1},8,["disabled"])]),default:c(()=>[i(n(Re),{placeholder:"\u4F1A\u5458\u7801",value:C.value,"onUpdate:value":d[4]||(d[4]=g=>C.value=g)},null,8,["value"]),Et]),_:1})]),_:1},8,["show"])],64)}}}),wt=[{path:"/",name:"home",component:Ft,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>p(()=>import("./list.1c0cbb1d.js"),["assets/list.1c0cbb1d.js","assets/list.764e0448.css","assets/vendor.0d5d26a8.js","assets/clipboard.f3c3206f.js"])},{path:"video",name:"video",component:()=>p(()=>import("./list.1c0cbb1d.js"),["assets/list.1c0cbb1d.js","assets/list.764e0448.css","assets/vendor.0d5d26a8.js","assets/clipboard.f3c3206f.js"])},{path:"image",name:"image",component:()=>p(()=>import("./list.1c0cbb1d.js"),["assets/list.1c0cbb1d.js","assets/list.764e0448.css","assets/vendor.0d5d26a8.js","assets/clipboard.f3c3206f.js"])},{path:"trash",name:"trash",component:()=>p(()=>import("./trash.5301dea0.js"),["assets/trash.5301dea0.js","assets/trash.99a3677d.css","assets/vendor.0d5d26a8.js"])},{path:"setting",name:"setting",component:()=>p(()=>import("./setting.8baf9c99.js"),["assets/setting.8baf9c99.js","assets/setting.f947579c.css","assets/vendor.0d5d26a8.js"])},{path:"invited",name:"invited",component:()=>p(()=>import("./invited.0823fc7a.js"),["assets/invited.0823fc7a.js","assets/invited.74b24e1e.css","assets/clipboard.f3c3206f.js","assets/vendor.0d5d26a8.js"])},{path:"share",name:"share",component:()=>p(()=>import("./share.041f567f.js"),["assets/share.041f567f.js","assets/share.4f9c11c6.css","assets/vendor.0d5d26a8.js"])}]},{path:"/t/:id?",name:"test",component:()=>p(()=>import("./test.4b5184a9.js"),["assets/test.4b5184a9.js","assets/vendor.0d5d26a8.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>p(()=>import("./shareInfo.a275c827.js"),["assets/shareInfo.a275c827.js","assets/shareInfo.678356c6.css","assets/vendor.0d5d26a8.js"])},{path:"/login",name:"login",component:()=>p(()=>import("./login.4eb18ec0.js"),["assets/login.4eb18ec0.js","assets/login.a8b45006.css","assets/vendor.0d5d26a8.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>p(()=>import("./sms.c3ae9dc3.js"),["assets/sms.c3ae9dc3.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.0d5d26a8.js"])},{path:"/register",name:"register",component:()=>p(()=>import("./register.c1d3b85c.js"),["assets/register.c1d3b85c.js","assets/register.5588ce76.css","assets/vendor.0d5d26a8.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>p(()=>import("./testtest.70a15808.js"),["assets/testtest.70a15808.js","assets/vendor.0d5d26a8.js"])}],At=Ye({history:Ze(),routes:wt});var D=At;const A=qe(at);A.directive("resize",{mounted(e,t,o){e.$$erd=Xe({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,r=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(a,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});A.config.globalProperties.$http=m;A.use(D);A.use(Qe,{router:D,siteIdList:[1280510106]});A.mount("#app");export{oe as b,m as i,Dt as n,ot as p};
