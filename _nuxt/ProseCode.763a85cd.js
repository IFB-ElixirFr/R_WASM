import{a as x}from"./index.853b8c0b.js";import{u as v}from"./useCommandStore.0bc2297b.js";import{B,C as c,r as w,o as a,c as n,t as i,j as s,D as t,A as D,E,a as g,b as S,w as p,d as m,f as N,_ as V}from"./entry.85fce134.js";const z={class:"container"},A={key:0,class:"filename-text"},P={class:"bottom-container"},j={class:"copy-container mb-1"},F={key:0,class:"copied-text"},R=B({__name:"ProseCode",props:{code:{default:""},language:{default:null},filename:{default:null},highlights:{default:()=>[]},meta:{default:null}},setup(_){const o=_,{copy:f,copied:b,text:T}=x(),k=v(),l={vue:{text:"vue",background:"#42b883",color:"white"},r:{text:"r",background:"#2164B6",color:"white"},bash:{text:"bash",background:"#3E474A",color:"white"},python:{text:"py",background:"linear-gradient(to bottom right, #2F6E9D, #F6D652)",color:"white"},ruby:{text:"ruby",background:"#A41600",color:"white"},js:{text:"JS",background:"#E9D34B",color:"black"}},r=c(()=>{var e;return o.language?(e=l[o.language])==null?void 0:e.text:null}),C=c(()=>{var e;return o.language?(e=l[o.language])==null?void 0:e.background:null}),y=c(()=>{var e;return o.language?(e=l[o.language])==null?void 0:e.color:null});function h(){k.updateCommand(o.code)}return(e,d)=>{const u=w("v-btn");return a(),n("div",z,[e.filename?(a(),n("span",A,i(e.filename),1)):s("",!0),t(r)?(a(),n("span",{key:1,style:D({background:t(C),color:t(y)}),class:"language-text"},i(t(r)),5)):s("",!0),E(e.$slots,"default"),g("div",P,[g("div",j,[t(b)?(a(),n("span",F,"Copied code!")):s("",!0),S(u,{onClick:d[0]||(d[0]=$=>t(f)(e.code)),size:"x-small","prepend-icon":"mdi-content-copy"},{default:p(()=>[m("Copy Code")]),_:1}),e.meta!="noRun"?(a(),N(u,{key:1,onClick:h,size:"x-small",color:"success","prepend-icon":"mdi-play",class:"ms-2"},{default:p(()=>[m("Run Code")]),_:1})):s("",!0)])])])}}});const q=V(R,[["__scopeId","data-v-ebe2fe76"]]);export{q as default};
