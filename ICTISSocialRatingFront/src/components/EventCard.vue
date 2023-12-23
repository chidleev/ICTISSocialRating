<script setup>
import axios from "axios"

const props = defineProps({
  ratingEvent: {
    name: String,
    description: String,
    startDate: String,
    location: String,
    ratingValue: Number,
    imgUrl: String
  },
  already_join: false
})


function joinEvent(e) {
    if (!props.already_join) {
        axios.post('/api/user/joinevent', {
            eventUuid: e.target.getAttribute('event_uuid')
        })
        .then(result => {
            alert('Вы подписались на событие!')
        })
        .catch(error => {
            error.response.data.errors.map(err => {
                alert(err.comment)
            })
        })
    }
}
</script>

<template>
  <div class="card">
    <img src="@/assets/1.jpg" alt="">
    <div class="desc">
      <h2>{{ ratingEvent.name }}</h2>
      <div class="text">{{ ratingEvent.description }}</div>
      <h3 class="bar">Дата проведения: {{ new Date(ratingEvent.startDate).toLocaleString()}}</h3>
      <h3 class="bar">Место проведения: {{ ratingEvent.location}}</h3>
      <h2 class="bar">
        Баллы: {{ ratingEvent.ratingValue || 0}}
        <button v-bind:joined=already_join @click=joinEvent v-bind:event_uuid=ratingEvent.uuid>{{already_join? 'Участвую' : 'Участвововать'}}</button>
      </h2>
    </div>
  </div>
  
</template>

<style scoped>
.card {
  padding: max(1vw, 1vh);
  flex: 1 1 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: max-content;
  background-color: cadetblue;
  border-radius: max(1vw, 1vh);
}

img {
  max-height: 150px;
  min-height: 150px;
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

.bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.bar button {
  padding: 0 1vw;
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

.bar button[joined] {
  background-color: darkgrey;
  cursor: default;
}
</style>