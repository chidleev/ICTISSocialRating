import{E as m}from"./EventCard-Z1Xjq9-O.js";import{_,a as c}from"./_plugin-vue_export-helper-qh_91w3R.js";import{r as u,k as h,o as n,c as i,a,d as v,w as f,F as l,i as g,e as k,j as E,p as x,g as w}from"./index-1pJZnmWX.js";import"./1-u5AQWYhB.js";/* empty css                                                                  */const B=o=>(x("data-v-b76588f1"),o=o(),w(),o),V={class:"container"},b=B(()=>a("h1",null,"Текущие события",-1)),C={class:"cards-container"},I={__name:"AllEventsView",setup(o){function p(){c.get("http://localhost:3000/api/organizer/become").then(t=>{alert(t.data)}).catch(t=>{t.response.data.errors.map(e=>{alert(e.comment)})})}const s=u([]);return c.get("http://localhost:3000/api/eventapi/all").then(t=>{t.data.map(e=>{s.push(e)})}).catch(function(t){t.response.data.errors.map(e=>{alert(e.comment)})}),(t,e)=>{const d=h("RouterLink");return n(),i(l,null,[a("div",V,[a("header",null,[b,a("button",{onClick:p},"Стать организатором"),v(d,{to:"/account"},{default:f(()=>[k("Мой аккаунт")]),_:1})])]),a("div",C,[(n(!0),i(l,null,g(s,r=>(n(),E(m,{key:r.uuid,ratingEvent:r},null,8,["ratingEvent"]))),128))])],64)}}},F=_(I,[["__scopeId","data-v-b76588f1"]]);export{F as default};
