import{E as s}from"./EventCard-ZzrdIa7h.js";import{a as c}from"./axios-QLjAsgXu.js";import{_ as i}from"./_plugin-vue_export-helper-x3n3nnut.js";import{r as m,j as _,o as a,c as n,f as p,F as d,k as u,e as l}from"./index-5G3fSmeW.js";/* empty css                                                                  */const f={class:"cards-container"},v={key:0},E={__name:"MyEventsView",setup(h){const r=m([]);return _(()=>{c.get("/api/user/allevents").then(function(e){e.data.map(t=>{r.push(t.Event)})}).catch(function(e){e.response.data.errors.map(t=>{alert(t.comment)})})}),(e,t)=>(a(),n("div",f,[r[0]?p("",!0):(a(),n("h1",v,"Ой, кажется вы нигде не участвуете...")),(a(!0),n(d,null,u(r,o=>(a(),l(s,{key:o.id,ratingEvent:o,already_join:!0},null,8,["ratingEvent"]))),128))]))}},M=i(E,[["__scopeId","data-v-8266afa4"]]);export{M as default};
