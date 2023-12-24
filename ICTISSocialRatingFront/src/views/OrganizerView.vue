<script setup>
import EventCard from '@/components/EventCard.vue'
import { reactive, onMounted, ref } from 'vue';
import axios from 'axios';

const newEv = reactive({
    name: ref(''),
    description: ref(''),
    startDate: ref(''),
    startTime: ref(''),
    location: ref(''),
    ratingValue: ref(0)
})

var evCat = ''

const ratings = reactive([])
axios.get('/api/rating/all')
.then(function (response) {
    response.data.map(rating => {
        ratings.push(rating)
    })
})
.catch(function (error) {
    error.response.data.errors.map(err => {
        alert(err.comment)
    })
});

function createEv(e) {
    var evDate = new Date(newEv.startDate + ' ' + newEv.startTime);
    axios.post('/api/organizer/createEv', {
        name: newEv.name,
        description: newEv.description,
        startDate: evDate,
        location: newEv.location,
        ratingValue: newEv.ratingValue,
        evCat: evCat
    })
    .then(result => {
        alert("Событие успешно создано")
        getEvs()
    })
    .catch(function (error) {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    });
}

const ratingEvent = reactive([])
function getEvs() {
    axios.get('/api/organizer/getevents')
    .then(result => {
        ratingEvent.splice(0,ratingEvent.length)
        result.data.map(ev => {
            ratingEvent.push(ev)
        })
    })
    .catch(function (error) {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    });
}
getEvs()
</script>

<template>
    <div class="container">
        <div class="sidebar">
            <h2>Создать событие</h2>
            <select v-model="evCat">
                <option disabled value="" default>Категория события</option>
                <option v-for="cat in ratings" :key="cat.uuid" :value="cat.uuid">{{ cat.name }}</option>
            </select>
            <input type="text" v-model=newEv.name placeholder="Название">
            <textarea v-model=newEv.description placeholder="Описание события"></textarea>
            <span>Дата проведения</span>
            <input type="date" v-model=newEv.startDate>
            <span>Время проведения</span>
            <input type="time" v-model=newEv.startTime>
            <input type="text" v-model=newEv.location placeholder="Место проведения">
            <span>Количество боллов</span>
            <input type="number" v-model=newEv.ratingValue min="0" max="15">
            <button @click=createEv>Создать событие</button>
        </div>

        <div class="cards-container">
            <h1 v-if='!ratingEvent[0]'>Вы не создали ни одного события</h1>
            <EventCard v-for="revent in ratingEvent" :key="revent.uuid" v-bind:ratingEvent="revent" :already_join="true"/>
        </div>
    </div>
</template>

<style scoped>
.cards-container {
    overflow-y: auto;
    padding: max(1vw, 1vh);
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    gap: max(1vw, 1vh);
}
.container {
    display: flex;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
}
.sidebar {
  padding: max(1vw, 1vh);

  flex: 1 1 300px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: max(1vw, 1vh);

  height: fit-content;

  background-color: aliceblue;
  border-radius: max(1vw, 1vh);
  border: max(0.5vw, 0.5vh) solid lavender;
}
.events {
    flex: 10 1 450px;
}

input, select {
    width: 100%;
    min-height: 4vh;

    font-size: 2vh;
    text-align: center;

    background-color: white;
    border: none;

    border-radius: max(0.5vw, 0.5vh);
    border: max(0.1vw, 0.1vh) solid lavender;
}

textarea {
    width: 100%;
    resize: vertical;
}

.sidebar button {
    width: 100%;
    min-height: 4vh;

    font-size: 2vh;
    text-align: center;

    background-color: cadetblue;
    border: none;
    cursor: pointer;

    border-radius: max(0.5vw, 0.5vh);
}
</style>