import{a as c}from"./axios-QLjAsgXu.js";/* empty css                                                                  */import{_ as d}from"./_plugin-vue_export-helper-x3n3nnut.js";import{o as l,c as g,a as e,t as n,g as u}from"./index-6tQDCaWq.js";const v={class:"card"},m=["src"],_={class:"desc"},h={class:"text"},E={class:"bar"},f={class:"bar"},S={class:"bar"},j=["joined","event_uuid"],b={__name:"EventCard",props:{ratingEvent:{uuid:String,name:String,description:String,startDate:String,location:String,ratingValue:Number,imgUrl:String,RatingUuid:String},already_join:!1},setup(t){const r=t;function s(i){r.already_join||c.post("/api/user/joinevent",{eventUuid:i.target.getAttribute("event_uuid")}).then(a=>{alert("Вы подписались на событие!")}).catch(a=>{a.response.data.errors.map(o=>{alert(o.comment)})})}return(i,a)=>(l(),g("div",v,[e("img",{src:`./assets/${t.ratingEvent.RatingUuid}.png`,alt:""},null,8,m),e("div",_,[e("h2",null,n(t.ratingEvent.name),1),e("div",h,n(t.ratingEvent.description),1),e("h3",E,"Дата проведения: "+n(new Date(t.ratingEvent.startDate).toLocaleString()),1),e("h3",f,"Место проведения: "+n(t.ratingEvent.location),1),e("h2",S,[u(" Баллы: "+n(t.ratingEvent.ratingValue||0)+" ",1),e("button",{joined:t.already_join,onClick:s,event_uuid:t.ratingEvent.uuid},n(t.already_join?"Участвую":"Участвововать"),9,j)])])]))}},V=d(b,[["__scopeId","data-v-c98cf880"]]);export{V as E};
