import{x as y,bW as $,bX as _,bT as P,k as E}from"./entry.85fce134.js";import{h as l}from"./index.cd32510b.js";import{w as f,s as x}from"./utils.3749b22d.js";import{u as S}from"./preview.f794f7f3.js";const h=(r,e)=>e.split(".").reduce((t,s)=>t&&t[s],r),w=(r,e)=>Object.keys(r).filter(e).reduce((t,s)=>Object.assign(t,{[s]:r[s]}),{}),B=r=>e=>Array.isArray(e)?e.map(t=>r(t)):r(e),m=r=>{const e=[],t=[];for(const s of r)["$","_"].includes(s)?e.push(s):t.push(s);return{prefixes:e,properties:t}},D=(r=[])=>e=>{if(r.length===0||!e)return e;const{prefixes:t,properties:s}=m(r);return w(e,n=>!s.includes(n)&&!t.includes(n[0]))},I=(r=[])=>e=>{if(r.length===0||!e)return e;const{prefixes:t,properties:s}=m(r);return w(e,n=>s.includes(n)||t.includes(n[0]))},Q=(r,e)=>{const t=new Intl.Collator(e.$locale,{numeric:e.$numeric,caseFirst:e.$caseFirst,sensitivity:e.$sensitivity}),s=Object.keys(e).filter(n=>!n.startsWith("$"));for(const n of s)r=r.sort((o,i)=>{const a=[h(o,n),h(i,n)].map(u=>{if(u!==null)return u instanceof Date?u.toISOString():u});return e[n]===-1&&a.reverse(),t.compare(a[0],a[1])});return r},v=(r,e="Expected an array")=>{if(!Array.isArray(r))throw new TypeError(e)},c=r=>Array.isArray(r)?r:[void 0,null].includes(r)?[]:[r],b=["sort","where","only","without"],k=(r,e)=>{const t={...e};for(const o of b)t[o]&&(t[o]=c(t[o]));const s=(o,i=a=>a)=>(...a)=>(t[o]=i(...a),n),n={params:()=>({...t,...t.where?{where:[...c(t.where)]}:{},...t.sort?{sort:[...c(t.sort)]}:{}}),only:s("only",c),without:s("without",c),where:s("where",o=>[...c(t.where),...c(o)]),sort:s("sort",o=>[...c(t.sort),...c(o)]),limit:s("limit",o=>parseInt(String(o),10)),skip:s("skip",o=>parseInt(String(o),10)),find:()=>r(n),findOne:()=>(t.first=!0,r(n)),findSurround:(o,i)=>(t.surround={query:o,...i},r(n)),locale:o=>n.where({_locale:o})};return n};function g(r){return JSON.stringify(r,A)}function A(r,e){return e instanceof RegExp?`--REGEX ${e.toString()}`:e}const T=r=>{let e=g(r);return e=typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e),e=e.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(e.match(/.{1,100}/g)||[]).join("/")},C=()=>async r=>{const{content:e}=y().public,t=r.params(),s=e.experimental.stripQueryParameters?f(`/query/${`${l(t)}.${e.integrity}`}/${T(t)}.json`):f(`/query/${l(t)}.${e.integrity}.json`);if(x())return(await E(()=>import("./client-db.fcae8db4.js"),["./client-db.fcae8db4.js","./entry.85fce134.js","./entry.6890bb10.css","./index.a6ef77ff.js","./preview.f794f7f3.js","./index.cd32510b.js","./utils.3749b22d.js"],import.meta.url).then(i=>i.useContentDatabase())).fetch(r);const n=await $fetch(s,{method:"GET",responseType:"json",params:e.experimental.stripQueryParameters?void 0:{_params:g(t),previewToken:S().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};function F(r,...e){const{content:t}=y().public,s=k(C(),typeof r!="string"?r:{});let n;typeof r=="string"&&(n=$(_(r,...e)));const o=s.params;return s.params=()=>{var a,u,p;const i=o();return n&&(i.where=i.where||[],i.first&&(i.where||[]).length===0?i.where.push({_path:P(n)}):i.where.push({_path:new RegExp(`^${n.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(a=i.sort)!=null&&a.length||(i.sort=[{_file:1,$numeric:!0}]),t.locales.length&&((p=(u=i.where)==null?void 0:u.find(d=>d._locale))!=null&&p._locale||(i.where=i.where||[],i.where.push({_locale:t.defaultLocale}))),i},s}export{v as a,c as b,B as c,I as d,T as e,k as f,h as g,g as j,F as q,Q as s,D as w};
