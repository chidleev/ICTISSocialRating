<script setup>
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios'
import router from '@/router';

const userData = reactive({
    FIO: '',
    login: '',
    password: '',
    register_login: '',
    register_password: '',
    bad_login: true
});

function login() {
    axios.post('/api/user/login', {
        'login': userData.login,
        'password': userData.password
    })
    .then(function (response) {
        router.push('/account');
    })
    .catch(function (error) {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    });
}

function checkLogin(e) {
    
    userData.register_login = e.target.value;
    axios.post('/api/user/checkLogin', {
        'login': userData.register_login
    })
    .then(function (response) {
        userData.bad_login = false;
        document.getElementById('register_login').removeAttribute('bad_login', true);
    })
    .catch(function (error) {
        userData.bad_login = true;
        document.getElementById('register_login').setAttribute('bad_login', true);
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    });
}

function register() {
    if (!userData.bad_login) {
        axios.post('/api/user/register', {
            'FIO': userData.FIO,
            'login': userData.register_login,
            'password': userData.register_password
        })
        .then(function (response) {
            router.push('/account');
        })
        .catch(function (error) {
            error.response.data.errors.map(err => {
                alert(err.comment)
            })
        });
    }
}
</script>

<template>
    <div class="container">
        <div class="login">
            <input type="text" @change="e => userData.login = e.target.value" placeholder="Логин">
            <input type="password" @change="e => userData.password = e.target.value" placeholder="Пароль">
            <button @click="login">Войти в аккаунт</button>
        </div>
        
        <div class="register">
            <input id="register_login" type="text" @change="checkLogin" placeholder="Логин">
            <input type="password" @change="e => userData.register_password = e.target.value" placeholder="Пароль">
            <input type="text" @change="e => userData.FIO = e.target.value" placeholder="ФИО">
            <button @click="register">Зарегистрироваться</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    background-color: aliceblue;

    @media (orientation: portrait) {
        flex-direction: column;
    }
}

.login, .register{
    padding: max(1vw, 1vh);
    width: 25vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    background-color: cadetblue;
    border-radius: max(0.5vw, 0.5vh);

    @media (orientation: portrait) {
        width: 60vw;
    }
}

button {
    margin-top: max(1vw, 1vh);
    width: 100%;
    height: 4vh;
    font-size: 2vh;
    background-color: aliceblue;
    border: none;

    border-radius: max(0.5vw, 0.5vh);
    cursor:pointer;

    @media (orientation: portrait) {
        width: 100%;
    }
}

input {
    width: 100%;
    height: 4vh;

    font-size: 2vh;
    text-align: center;

    background-color: white;
    border: none;

    border-radius: max(0.5vw, 0.5vh);
}

input[bad_login] {
    background-color: darkred;
}
</style>