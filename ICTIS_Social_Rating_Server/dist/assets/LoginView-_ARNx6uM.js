import{a as s}from"./axios-QLjAsgXu.js";import{r as g,o as u,c,a as n,b as a}from"./index-5G3fSmeW.js";import{_ as d}from"./_plugin-vue_export-helper-x3n3nnut.js";const _={class:"container"},m={class:"login"},f={class:"register"},h={__name:"LoginView",setup(b){const t=g({FIO:"",login:"",password:"",register_login:"",register_password:"",bad_login:!0});function i(){s.post("/api/user/login",{login:t.login,password:t.password}).then(function(r){a.push("/account")}).catch(function(r){r.response.data.errors.map(e=>{alert(e.comment)})})}function l(r){t.register_login=r.target.value,s.post("/api/user/checkLogin",{login:t.register_login}).then(function(e){t.bad_login=!1,document.getElementById("register_login").removeAttribute("bad_login",!0)}).catch(function(e){t.bad_login=!0,document.getElementById("register_login").setAttribute("bad_login",!0),e.response.data.errors.map(o=>{alert(o.comment)})})}function p(){t.bad_login||s.post("/api/user/register",{FIO:t.FIO,login:t.register_login,password:t.register_password}).then(function(r){a.push("/account")}).catch(function(r){r.response.data.errors.map(e=>{alert(e.comment)})})}return(r,e)=>(u(),c("div",_,[n("div",m,[n("input",{type:"text",onChange:e[0]||(e[0]=o=>t.login=o.target.value),placeholder:"Логин"},null,32),n("input",{type:"password",onChange:e[1]||(e[1]=o=>t.password=o.target.value),placeholder:"Пароль"},null,32),n("button",{onClick:i},"Войти в аккаунт")]),n("div",f,[n("input",{id:"register_login",type:"text",onChange:l,placeholder:"Логин"},null,32),n("input",{type:"password",onChange:e[2]||(e[2]=o=>t.register_password=o.target.value),placeholder:"Пароль"},null,32),n("input",{type:"text",onChange:e[3]||(e[3]=o=>t.FIO=o.target.value),placeholder:"ФИО"},null,32),n("button",{onClick:p},"Зарегистрироваться")])]))}},y=d(h,[["__scopeId","data-v-9a6c09bf"]]);export{y as default};
