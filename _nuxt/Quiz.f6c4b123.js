import{_ as C,q as M,r,o as l,f as n,w as c,a as u,b as v,d,c as m,F as _,g as h,j as p,t as S}from"./entry.85fce134.js";const q={props:{choices:Array,type:String,question:String},data(){return{radios:"",color:"#E8EAF6",message:"",checkedNames:M([])}},setup(o){var e=new Date().valueOf();return e="editorArea"+e,{id:e}},methods:{async submit(){if(this.type=="simple"){var o=!1;for(const e of this.choices)e.value==this.radios&&e.valid&&(this.color="green",this.message="Bonne réponse !",o=!0);o||(this.color="red",this.message="Mauvaise réponse !")}else if(this.type=="multiple"){var o=!0;for(const s of this.choices)if(s.valid&&this.checkedNames.indexOf(s.value)==-1){o=!1;break}o?(this.color="green",this.message="Bonne réponse !"):(this.color="red",this.message="Mauvaise réponse !")}}}},w=["innerHTML"],A={key:1},E={class:"text-right"};function F(o,e,s,f,a,g){const b=r("v-icon"),k=r("v-radio"),y=r("v-radio-group"),x=r("v-checkbox"),V=r("v-btn"),N=r("v-card");return l(),n(N,{color:a.color,class:"pa-4 my-4",id:f.id},{default:c(()=>[u("h3",null,[v(b,null,{default:c(()=>[d("mdi-help-box-multiple")]),_:1}),d(" Quiz")]),u("p",{class:"text-subtitle-1",innerHTML:o.$mdRenderer.render(s.question)},null,8,w),s.type=="simple"?(l(),n(y,{key:0,modelValue:a.radios,"onUpdate:modelValue":e[0]||(e[0]=t=>a.radios=t)},{default:c(()=>[(l(!0),m(_,null,h(s.choices,(t,i)=>(l(),n(k,{key:i,label:t.value,value:t.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])):p("",!0),s.type=="multiple"?(l(),m("div",A,[(l(!0),m(_,null,h(s.choices,(t,i)=>(l(),n(x,{"hide-details":"true",key:i,label:t.value,value:t.value,id:i,modelValue:a.checkedNames,"onUpdate:modelValue":e[1]||(e[1]=B=>a.checkedNames=B)},null,8,["label","value","id","modelValue"]))),128))])):p("",!0),u("div",E,[v(V,{onClick:g.submit},{default:c(()=>[d("Submit")]),_:1},8,["onClick"])]),u("p",null,S(a.message),1)]),_:1},8,["color","id"])}const T=C(q,[["render",F]]);export{T as default};
