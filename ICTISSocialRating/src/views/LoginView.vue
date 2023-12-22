<script setup>
import { reactive, ref } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios'
import router from '@/router';

const userData = reactive({
    login: '',
    password: ''
});

function login() {
    axios.post('http://10.131.56.53:3000/api/user/login', {
        'login': userData.login,
        'password': userData.password
    })
    .then(function (response) {
        console.log(response);
        router.push('/account');
    })
    .catch(function (error) {
        console.log(error);
    });
    router.push('/account');
}


</script>

<template>
    <div class="container">
        <form>
            <input type="text" @change="e => userData.login = e.target.value">
            <input type="password" @change="e => userData.password = e.target.value">
        </form>
        
        <button @click="login">Войти в аккаунт</button>
    </div>
</template>

<style scoped>
.container {
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background-color: blanchedalmond;
}

form {
    width: 20vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
}

button {
    margin-top: max(1vw, 1vh);
    width: 20vw;
    height: 4vh;
    font-size: 2vh;
}

input {
    width: 100%;
    height: 4vh;

    font-size: 2vh;
    text-align: center;
}
</style>