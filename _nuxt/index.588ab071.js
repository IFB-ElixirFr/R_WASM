import{_ as P,f as $,l as z,h as D,r as _,c as e,m as r,F as l,o as t,a as n,d as h,t as s,i as g,w as c,b as x,j as w}from"./entry.b860696f.js";import{q as R}from"./query.a3ab411e.js";import{f as j}from"./navigation.4a39276c.js";import"./preview.cfdd299b.js";import"./utils.fa88946e.js";const A={async setup(m){let u=$().params.lang;const v=await R("/"+u).find(),{data:y}=await z("navigation",()=>j("/"+u));return{contentFolder:v,navigation:y}},methods:{changePath(m,p){D().push({path:m+"/",query:{id:p}})}}},E=["src"],L=n("br",null,null,-1),S={class:"text-subtitle-1"},T={class:"d-flex flex-wrap"},G={key:0},H={key:1},I=n("p",null,[n("b",null,"Programme")],-1),J={class:"ms-4"};function K(m,p,u,v,y,C){const N=_("v-card-title"),k=_("v-chip"),b=_("v-card-text"),B=_("v-card");return t(!0),e(l,null,r(v.navigation,(d,V)=>(t(),e("div",{key:V},[n("h1",null,[n("img",{src:d.image,alt:"logo",style:{height:"100px"}},null,8,E),h(" "+s(d.title),1)]),L,n("p",S,s(d.description),1),(t(!0),e(l,null,r(d.children,(f,q)=>(t(),e("div",{key:q},[n("h2",null,s(f.title),1),n("div",T,[(t(!0),e(l,null,r(f.children,(o,F)=>(t(),g(B,{onClick:a=>C.changePath(f._path,o._dir),key:F,width:"300px",class:"ma-5"},{default:c(()=>[x(N,null,{default:c(()=>[h(s(o.title),1)]),_:2},1024),x(b,null,{default:c(()=>[o.belt?(t(),e("div",G,[(t(!0),e(l,null,r(o.belt,(a,i)=>(t(),g(k,{key:i,class:"ma-1",size:"small",variant:a=="white"?"outlined":"tonal",color:a=="white"?"":a},{default:c(()=>[h(s(a)+" belt ",1)]),_:2},1032,["variant","color"]))),128))])):w("",!0),o.tags?(t(),e("div",H,[(t(!0),e(l,null,r(o.tags,(a,i)=>(t(),g(k,{key:i,class:"ma-1",size:"small"},{default:c(()=>[h(s(a),1)]),_:2},1024))),128))])):w("",!0),I,n("ul",J,[(t(!0),e(l,null,r(o.children,(a,i)=>(t(),e("li",{key:i},s(a.title),1))),128))])]),_:2},1024)]),_:2},1032,["onClick"]))),128))])]))),128))]))),128)}const X=P(A,[["render",K]]);export{X as default};
