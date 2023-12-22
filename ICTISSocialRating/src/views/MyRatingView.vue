<script setup>
import RatingGradeCard from '@/components/RatingGradeCard.vue'
const ratings = [
    {
        id: 1,
        name: "Спорт",
        value: 50,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 2,
        name: "Наука",
        value: 60,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 3,
        name: "Волонтерство",
        value: 40,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 4,
        name: "Исскуство",
        value: 20,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 4,
        name: "Исскуство",
        value: 20,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 4,
        name: "Исскуство",
        value: 20,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 4,
        name: "Исскуство",
        value: 20,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 4,
        name: "Исскуство",
        value: 20,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 4,
        name: "Исскуство",
        value: 20,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 4,
        name: "Исскуство",
        value: 20,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    },
    {
        id: 4,
        name: "Исскуство",
        value: 20,
        desc: "dsgfs dsfg dg dsfdfg fdgsf fdgdsgsfdg dgfsdfgf dgfdsgg ffdsdfs fgdsfgdg dgfdgf dgdf"
    }
]
</script>

<template>
    <div class="cards-container">
        <RatingGradeCard v-for="rating in ratings" :key="rating.id" v-bind:rating="rating"/>
    </div>
</template>

<style scoped>
  .cards-container {
    padding: max(1vw, 1vh);
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: start;
    flex-wrap: wrap;
    gap: max(1vw, 1vh);
  }
</style>