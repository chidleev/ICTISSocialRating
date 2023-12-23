<script setup>
import { RouterView, RouterLink } from 'vue-router'
import axios from 'axios';

function toBecomeOrganizer() {
    axios.get('/api/organizer/become')
    .then(result => {})
    .catch(error => {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    })
}
</script>

<template>
    <div class="container">
        <header>
            <h1>Текущие события</h1>
            <button @click="toBecomeOrganizer">Стать организатором</button>
            <RouterLink to="/account">Мой аккаунт</RouterLink>
        </header>
    </div>
</template>

<style scoped>
.container {
    padding: max(1vw, 1vh);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-content: stretch;
}

header {
    padding: max(1vw, 1vh);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    background-color: aquamarine;
    border-radius: max(0.5vw, 0.5vh);
}

a, header button {
    width: 20vw;
    height: 5vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2vh;
    text-align: center;
    text-decoration: none;

    background-color: white;
    border: none;

    border-radius: max(0.5vw, 0.5vh);
    cursor:pointer;
}
</style>