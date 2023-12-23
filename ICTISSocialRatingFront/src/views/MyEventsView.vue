<script setup>
import EventCard from '@/components/EventCard.vue'
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const ratingEvent = reactive([])

onMounted(() => {
    axios.get('/api/user/allevents')
    .then(function (response) {
        response.data.map(ev => {
            ratingEvent.push(ev.Event)
        })
    })
    .catch(function (error) {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    });
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