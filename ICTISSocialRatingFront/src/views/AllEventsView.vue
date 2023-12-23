<script setup>
import EventCard from '@/components/EventCard.vue'
import { reactive, onMounted } from 'vue';
import axios from 'axios';

function toBecomeOrganizer() {
    axios.get('/api/organizer/become')
    .then(result => {
        alert(result.data)
    })
    .catch(error => {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    })
}

const ratingEvent = reactive([])
axios.get('/api/eventapi/all')
.then(result => {
    result.data.map(ev => {
        ratingEvent.push(ev)
    })
})
.catch(function (error) {
    error.response.data.errors.map(err => {
        alert(err.comment)
    })
});

</script>

<template>
    <div class="container">
        <header>
            <h1>Текущие события</h1>
            <button @click="toBecomeOrganizer">Стать организатором</button>
            <RouterLink to="/account">Мой аккаунт</RouterLink>
        </header>
    </div>

    <div class="cards-container">
        <EventCard v-for="revent in ratingEvent" :key="revent.uuid" v-bind:ratingEvent="revent"/>
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

.cards-container {
    overflow-y: auto;
    padding: max(1vw, 1vh);
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    gap: max(1vw, 1vh);
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