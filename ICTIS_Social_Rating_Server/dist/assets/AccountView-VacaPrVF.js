import{_ as d}from"./1-u5AQWYhB.js";import{r as p,o as l,c as h,a as t,d as e,w as c,u as a,b as m,e as n,R as r,f,p as v,g}from"./index-hsHq-StX.js";import{_ as w,a as x}from"./_plugin-vue_export-helper-qh_91w3R.js";const _=o=>(v("data-v-1017a73e"),o=o(),g(),o),V={class:"container"},k={class:"sidebar"},I={class:"account-data"},b=_(()=>t("h1",null,"Мой аккаунт",-1)),A=_(()=>t("img",{src:d,alt:"Avatarka"},null,-1)),B={class:"content"},N={__name:"AccountView",setup(o){p([]);function u(){x.get("http://localhost:3000/api/user/logout").then(function(s){m.push("/login")}).catch(function(s){s.response.data.errors.map(i=>{alert(i.comment)})})}return(s,i)=>(l(),h("div",V,[t("div",k,[t("div",I,[b,A,e(a(r),{to:"/account"},{default:c(()=>[n("Мой рейтинг")]),_:1}),e(a(r),{to:"/account/myevents"},{default:c(()=>[n("Мои события")]),_:1}),e(a(r),{to:"/event"},{default:c(()=>[n("Все события")]),_:1})]),t("button",{onClick:u},"Выйти")]),t("div",B,[e(a(f))])]))}},y=w(N,[["__scopeId","data-v-1017a73e"]]);export{y as default};
