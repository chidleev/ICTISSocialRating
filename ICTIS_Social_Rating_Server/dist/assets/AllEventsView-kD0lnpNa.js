import{E as m}from"./EventCard-2Sne-vRo.js";import{a as c}from"./axios-QLjAsgXu.js";import{_}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as u,h,k as v,o as n,c as i,a,d as f,w as g,F as l,i as k,e as E,j as x,p as w,g as B}from"./index-n__5Vdt2.js";import"./1-u5AQWYhB.js";/* empty css                                                                  */const V=o=>(w("data-v-eec81369"),o=o(),B(),o),C={class:"container"},I=V(()=>a("h1",null,"Текущие события",-1)),L={class:"cards-container"},N={__name:"AllEventsView",setup(o){function p(){c.get("http://localhost:3000/api/organizer/become").then(e=>{alert(e.data)}).catch(e=>{e.response.data.errors.map(t=>{alert(t.comment)})})}const r=u([]);return c.get("http://localhost:3000/api/event/all").then(function(e){e.data.map(t=>{r.push(t)})}).catch(function(e){e.response.data.errors.map(t=>{alert(t.comment)})}),h(()=>{}),(e,t)=>{const d=v("RouterLink");return n(),i(l,null,[a("div",C,[a("header",null,[I,a("button",{onClick:p},"Стать организатором"),f(d,{to:"/account"},{default:g(()=>[E("Мой аккаунт")]),_:1})])]),a("div",L,[(n(!0),i(l,null,k(r,s=>(n(),x(m,{key:s.id,ratingEvent:s},null,8,["ratingEvent"]))),128))])],64)}}},j=_(N,[["__scopeId","data-v-eec81369"]]);export{j as default};