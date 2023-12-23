<script setup>
import RatingGradeCard from '@/components/RatingGradeCard.vue'
import { reactive, onMounted } from 'vue';
import axios from 'axios';

const ratings = reactive([])

onMounted(() => {
    axios.get('http://localhost:3000/api/rating/all')
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
})

</script>

<template>
    <div class="cards-container">
        <RatingGradeCard v-for="rating in ratings" :key="rating.id" v-bind:rating="rating"/>
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