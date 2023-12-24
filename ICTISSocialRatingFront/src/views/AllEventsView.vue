<script setup>
import EventCard from '@/components/EventCard.vue'
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const myEvs = reactive([])

axios.get('/api/user/allevents')
.then(function (response) {
    response.data.map(ev => {
        myEvs.push(ev.Event)
    })
})
.catch(function (error) {
    error.response.data.errors.map(err => {
        alert(err.comment)
    })
});

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

const chekers = reactive({
    isAdmin: false,
    isOrganizer: false
})

axios.get('/api/user/check')
    .then(function (response) {
        chekers.isAdmin = (response.data.isAdmin)
        chekers.isOrganizer = (response.data.isOrganizer)
    })
    .catch(function (error) {});
</script>

<template>
    <div class="container">
        <header>
            <h2>Текущие события</h2>
            <button v-if='!chekers.isOrganizer' @click="toBecomeOrganizer">Стать организатором</button>
            <RouterLink to="/account">Мой аккаунт</RouterLink>
        </header>
    </div>

    <div class="cards-container">
        <EventCard v-for="revent in ratingEvent" :key="revent.uuid" v-bind:ratingEvent="revent" :userEvs='myEvs'/>
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
    align-items: center;
    background-color: cadetblue;
    border-radius: max(0.5vw, 0.5vh);
}

a, header button {
    padding: 0 max(1vw, 1vh);
    margin: 0 max(0.5vw, 0.5vh);

    width: fit-content;
    height: 5vh;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2vh;
    text-align: center;
    text-decoration: none;

    background-color: aliceblue;
    border: none;

    border-radius: max(0.5vw, 0.5vh);
    cursor:pointer;
}
</style>