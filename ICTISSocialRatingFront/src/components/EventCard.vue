<script setup>
const props = defineProps({
  ratingEvent: {
    name: String,
    description: String,
    startDate: String,
    location: String,
    ratingValue: Number,
    imgUrl: String
  }
})
</script>

<template>
  <div class="card">
    <div class="desc">
      <h2>Мероприятие: {{ ratingEvent.name }}</h2>
      <div class="text">{{ ratingEvent.description }}</div>
      <h3 class="bar">Дата проведения: {{ ratingEvent.startDate}}</h3>
      <h3 class="bar">Место проведения: {{ ratingEvent.location}}</h3>
      <h2 class="bar">Баллы: {{ ratingEvent.ratingValue || 0}}</h2>
    </div>
    <img src="@/assets/1.jpg" alt="">
  </div>
  
</template>

<style scoped>
.card {
  padding: max(1vw, 1vh);
  flex: 1 1 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 25vh;
  min-height: 200px;
  background-color: burlywood;
  border-radius: max(1vw, 1vh);
}

img {
  max-height: 150px;
  border-radius: max(1vw, 1vh);
}

div.desc {
  padding: max(0.5vw, 0.5vh);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>