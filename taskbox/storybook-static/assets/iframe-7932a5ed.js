import"../sb-preview/runtime.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const _ of e.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}})();const p="modulepreload",R=function(r,n){return new URL(r,n).href},O={},o=function(n,s,c){if(!s||s.length===0)return n();const t=document.getElementsByTagName("link");return Promise.all(s.map(e=>{if(e=R(e,c),e in O)return;O[e]=!0;const _=e.endsWith(".css"),d=_?'[rel="stylesheet"]':"";if(!!c)for(let l=t.length-1;l>=0;l--){const a=t[l];if(a.href===e&&(!_||a.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${d}`))return;const i=document.createElement("link");if(i.rel=_?"stylesheet":p,_||(i.as="script",i.crossOrigin=""),i.href=e,document.head.appendChild(i),_)return new Promise((l,a)=>{i.addEventListener("load",l),i.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},{createChannel:f}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:T}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:m}=__STORYBOOK_MODULE_PREVIEW_API__,u=f({page:"preview"});m.setChannel(u);window.__STORYBOOK_ADDONS_CHANNEL__=u;if(window.CONFIG_TYPE==="DEVELOPMENT"){const r=T({});m.setServerChannel(r),window.__STORYBOOK_SERVER_CHANNEL__=r}const P={"./src/components/InboxScreen.stories.jsx":async()=>o(()=>import("./InboxScreen.stories-0f076c7c.js"),["./InboxScreen.stories-0f076c7c.js","./Task.stories-daa126e0.js","./index-8db94870.js","./_commonjsHelpers-042e6b4d.js","./TaskList.stories-bb22b4e7.js","./index-8ce4a492.js","./index-35566a86.js","./index-3639c647.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),"./src/components/Task.stories.jsx":async()=>o(()=>import("./Task.stories-daa126e0.js").then(r=>r.b),["./Task.stories-daa126e0.js","./index-8db94870.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),"./src/components/TaskList.stories.jsx":async()=>o(()=>import("./TaskList.stories-bb22b4e7.js").then(r=>r.b),["./TaskList.stories-bb22b4e7.js","./Task.stories-daa126e0.js","./index-8db94870.js","./_commonjsHelpers-042e6b4d.js","./index-8ce4a492.js"],import.meta.url)};async function E(r){return P[r]()}E.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:S,PreviewWeb:L,ClientApi:w}=__STORYBOOK_MODULE_PREVIEW_API__,h=async()=>{const r=await Promise.all([o(()=>import("./config-1f862867.js"),["./config-1f862867.js","./index-d475d2ea.js","./index-8db94870.js","./_commonjsHelpers-042e6b4d.js","./_getPrototype-d883cfb7.js","./index-8ce4a492.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-5ef354f3.js"),["./preview-5ef354f3.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),o(()=>import("./preview-cf94addb.js"),[],import.meta.url),o(()=>import("./preview-a60aa466.js"),[],import.meta.url),o(()=>import("./preview-770cc08b.js"),["./preview-770cc08b.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-2cd4e1a1.js"),["./preview-2cd4e1a1.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-d8c963a4.js"),["./preview-d8c963a4.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),o(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),o(()=>import("./preview-bc596eab.js"),["./preview-bc596eab.js","./index-d475d2ea.js","./index-3639c647.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),o(()=>import("./preview-5e2c5df3.js"),["./preview-5e2c5df3.js","./_commonjsHelpers-042e6b4d.js","./_commonjs-dynamic-modules-302442b1.js","./index-35566a86.js","./preview-d412bf87.css"],import.meta.url)]);return S(r)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new L;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new w({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:E,getProjectAnnotations:h});export{o as _};
//# sourceMappingURL=iframe-7932a5ed.js.map
