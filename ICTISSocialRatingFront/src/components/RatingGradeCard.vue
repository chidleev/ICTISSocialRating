<script setup>
const props = defineProps({
  rating: {
    uuid: String,
    name: String,
    value: Number,
    desc: String
  }
})
</script>

<template>
  <div class="card">
    <img :src="'/img/' + rating.uuid + '.png'" alt="">
    <div class="desc">
      <h2>{{ rating.name }}</h2>
      <div class="text">{{ rating.description }}</div>
      <h2 class="bar">Баллы: {{ rating.value || 0}}</h2>
    </div>
  </div>
  
</template>

<style scoped>
.card {
  padding: max(1vw, 1vh);
  flex: 1 1 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  max-height: 25vh;
  min-height: 200px;
  background-color: cadetblue;
  border-radius: max(1vw, 1vh);
}

img {
  max-width: 150px;
  max-height: 150px;
  border-radius: max(1vw, 1vh);
}

div.desc {
  padding: max(0.5vw, 0.5vh);
  height: 100%;
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>