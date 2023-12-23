<script setup>
import EventCard from '@/components/EventCard.vue'
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const ratingEvent = reactive([])

onMounted(() => {
    ratingEvent.push({
        id: 1,
        name: 'sdgss',
        description: 'sdgsgsgdsgsdgsgsdgsgsdgsdgsgs',
        startDate: new Date().toLocaleDateString(),
        location: 'Корпус А - 1 этаж',
        ratingValue: 10,
        imgUrl: null
    })

    ratingEvent.push({
        id: 1,
        name: 'sdgss',
        description: 'sdgsgsgdsgsdgsgsdgsgsdgsdgsgs',
        startDate: new Date().toLocaleDateString(),
        location: 'Корпус А - 1 этаж',
        ratingValue: 10,
        imgUrl: null
    })

    /*axios.get('http://localhost:3000/api/rating/all')
    .then(function (response) {
        response.data.map(rating => {
            ratings.push(rating)
        })
    })
    .catch(function (error) {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    });*/
})

</script>

<template>
    <div class="cards-container">
        <EventCard v-for="revent in ratingEvent" :key="revent.id" v-bind:ratingEvent="revent" v-bind:already_join="true"/>
    </div>
</template>

<style scoped>
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
</style>