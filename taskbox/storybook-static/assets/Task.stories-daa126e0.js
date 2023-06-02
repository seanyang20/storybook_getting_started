import{r as A}from"./index-8db94870.js";var S={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=A,O=Symbol.for("react.element"),D=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,j=E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function y(s,e,r){var a,n={},p=null,u=null;r!==void 0&&(p=""+r),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(u=e.ref);for(a in e)I.call(e,a)&&!R.hasOwnProperty(a)&&(n[a]=e[a]);if(s&&s.defaultProps)for(a in e=s.defaultProps,e)n[a]===void 0&&(n[a]=e[a]);return{$$typeof:O,type:s,key:p,ref:u,props:n,_owner:j.current}}i.Fragment=D;i.jsx=y;i.jsxs=y;S.exports=i;var v=S.exports;const o=v.jsx,d=v.jsxs;function N({task:{id:s,title:e,state:r},onArchiveTask:a,onPinTask:n}){return d("div",{className:`list-item ${r}`,children:[d("label",{htmlFor:"checked","aria-label":`archiveTask-${s}`,className:"checkbox",children:[o("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${s}`,checked:r==="TASK_ARCHIVED"}),o("span",{className:"checkbox-custom",onClick:()=>a(s)})]}),o("label",{htmlFor:"title","aria-label":e,className:"title",children:o("input",{type:"text",value:e,readOnly:!0,name:"title",placeholder:"Input title"})}),r!=="TASK_ARCHIVED"&&o("button",{className:"pin-button",onClick:()=>n(s),id:`pinTask-${s}`,"aria-label":`pinTask-${s}`,children:o("span",{className:"icon-star"})},`pinTask-${s}`)]})}N.__docgenInfo={description:"",methods:[],displayName:"Task"};const P={component:N,title:"Task",tags:["autodocs"]},t={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},c={args:{task:{...t.args.task,state:"TASK_PINNED"}}},l={args:{task:{...t.args.task,state:"TASK_ARCHIVED"}}};var m,k,_;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(_=(k=t.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var T,f,h;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,b,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const $=["Default","Pinned","Archived"],K=Object.freeze(Object.defineProperty({__proto__:null,Archived:l,Default:t,Pinned:c,__namedExportsOrder:$,default:P},Symbol.toStringTag,{value:"Module"}));export{t as D,N as T,o as a,K as b,d as j};
//# sourceMappingURL=Task.stories-daa126e0.js.map
