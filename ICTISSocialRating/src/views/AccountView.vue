<script setup>
import { RouterView, RouterLink } from 'vue-router'
import router from '@/router';

function logout() {
    router.push('/login');
}
</script>

<template>
    <div class="container">
        <div class="sidebar">
            <div class="account-data">
                <h1>Мой аккаунт</h1>
                <img src="@/assets/1.jpg" alt="Avatarka">
                <RouterLink to="/account">Мой рейтинг</RouterLink>
                <RouterLink to="/account/myevents">Мои события</RouterLink>
                <RouterLink to="/event">Все события</RouterLink>
            </div>
            
            <button @click="logout">Выйти</button>
        </div>

        <div class="content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<style scoped>
.container {
    min-height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    flex-wrap: wrap;
}

.sidebar {
    position: sticky;
    top:0;
    height: 100vh;
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    background-color: aquamarine;
    border-radius: 0 max(1vw, 1vh) max(1vw, 1vh) 0;
}

.account-data {
    padding: max(1vw, 1vh);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: max(1vw, 1vh);
}

.account-data img {
    max-width: min(40vw, 70%);
    border-radius: max(1vw, 1vh);
}

.account-data a, .sidebar button {
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
}

.sidebar button {
    margin-bottom: max(1vw, 1vh);
}

.content {
    flex: 4 1 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
}
</style>