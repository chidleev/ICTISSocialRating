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
    
</template>

<style scoped>
  
</style>