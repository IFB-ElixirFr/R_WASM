import{_ as E,a as $}from"./flag-icons.min.e798bf7e.js";import{_ as G,m as H,h as I,i as D,r as c,c as i,g as y,F as b,o as n,f as w,w as e,b as t,a as s,t as d,j as m,d as p,n as J}from"./entry.85fce134.js";import{f as K}from"./navigation.d4a9cb2e.js";import{u as M}from"./index.853b8c0b.js";import"./index.cd32510b.js";import"./query.37f779ca.js";import"./utils.3749b22d.js";import"./preview.f794f7f3.js";const O={async setup(_){const o=H(),l=o.path.replaceAll("all/","");let a=o.params.lang;const{data:x}=await I("navigation",()=>K(l));return{navigation:x,lang:a}},methods:{changePath(_){var o=_.replace("/_dir",""),l=o.split("/");l=l[l.length-1];const a=D();o.startsWith("/")||(o="/"+o),a.push({path:o.replace(l,""),query:{id:l}})},changePathStep(_){const o=_.split("/"),l=o[o.length];var a=_.replace(l,"");a.startsWith("/")||(a="/"+a),console.log(a),D().push({path:a,query:{id:l}})},changeColor(_,o="grey"){const a=M("my-progression-store",{},localStorage,{mergeDefaults:!0});return _ in a.value?a.value[_].status=="started"?"blue":"green":o}}},Q={class:"text-h2 mdi mdi-school dividerline",style:{color:"#0080bc"}},U={class:"text-black text-h6",style:{"font-weight":"normal"}},X=["src"],Y={class:"d-flex flex-wrap"},Z={class:"text-h6 mb-3"},tt={class:"mb-2"},et={key:0},ot={key:0},at={key:0},nt={key:0},st={key:1},lt=s("p",{class:"mt-4 mb-1"},[s("b",null,"Description")],-1),rt=s("br",null,null,-1),ct=s("p",null,[s("b",null,"Progression")],-1),it={class:"overflow-y-auto",style:{width:"100%"}};function _t(_,o,l,a,x,h){const g=c("v-sheet"),f=c("v-col"),C=c("v-row"),N=c("v-badge"),k=c("v-icon"),P=E,S=$,B=c("v-spacer"),V=c("v-timeline-item"),j=c("v-timeline"),q=c("v-btn"),z=c("v-card-actions"),A=c("v-card-text"),F=c("v-card");return n(!0),i(b,null,y(a.navigation,(L,R)=>(n(),i("div",{key:R},[(n(!0),i(b,null,y(L.children,(u,T)=>(n(),w(g,{key:T,class:"pa-9",style:{overflow:"auto",margin:"0"}},{default:e(()=>[t(C,{"no-gutters":""},{default:e(()=>[t(f,null,{default:e(()=>[t(g,{class:"pa-2 ma-2"},{default:e(()=>[s("p",Q," Learn "+d(u.title),1)]),_:2},1024),t(g,{class:"pa-2 ma-2"},{default:e(()=>[s("h3",U,d(u.description),1)]),_:2},1024)]),_:2},1024),t(f,{cols:"2"},{default:e(()=>[t(g,{class:"pa-6 rounded-lg justify-center"},{default:e(()=>[u.image?(n(),i("img",{key:0,src:u.image,alt:"logo",style:{height:"150px",display:"block","margin-left":"auto","margin-right":"auto"}},null,8,X)):m("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024),s("div",Y,[(n(!0),i(b,null,y(u.children,(r,W)=>(n(),w(F,{outlined:"",elevation:"3",key:W,width:"350px",class:"ma-3 rounded-lg"},{default:e(()=>[t(A,{class:"d-flex flex-column",style:{height:"100%"}},{default:e(()=>[t(N,{dot:"",color:h.changeColor(r._path,"white")},{default:e(()=>[s("p",Z,[s("strong",null,d(r.title),1)])]),_:2},1032,["color"]),s("div",tt,[r.author?(n(),i("div",et,[t(k,{class:"me-2"},{default:e(()=>[p("mdi-account-edit")]),_:1}),p(" "+d(r.author),1)])):m("",!0),t(C,null,{default:e(()=>[t(f,null,{default:e(()=>[r.language?(n(),i("div",ot,[t(k,{class:"me-2"},{default:e(()=>[p("mdi-account-voice")]),_:1}),s("span",{class:J("ma-1 fi fi-"+r.language)},null,2)])):m("",!0)]),_:2},1024),t(f,null,{default:e(()=>[r.duration?(n(),i("div",at,[t(k,{class:"me-2"},{default:e(()=>[p("mdi-clock-time-five-outline")]),_:1}),p(" "+d(r.duration),1)])):m("",!0)]),_:2},1024)]),_:2},1024)]),r.belt?(n(),i("div",nt,[t(P,{belts:r.belt},null,8,["belts"])])):m("",!0),r.tags?(n(),i("div",st,[t(S,{tags:r.tags},null,8,["tags"])])):m("",!0),t(B),lt,s("p",null,d(u.description),1),rt,ct,s("div",it,[t(j,{"truncate-line":"both",direction:"horizontal"},{default:e(()=>[(n(!0),i(b,null,y(u.steps,v=>(n(),w(V,{key:v,"dot-color":h.changeColor("/"+v),onClick:ut=>h.changePathStep(v)},null,8,["dot-color","onClick"]))),128))]),_:2},1024)]),t(z,{class:"justify-center"},{default:e(()=>[t(q,{onClick:v=>h.changePath(u._path),class:"bg-primary lighten-4 mx-1"},{default:e(()=>[p("Start Now")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))])]),_:2},1024))),128))]))),128)}const bt=G(O,[["render",_t]]);export{bt as default};
