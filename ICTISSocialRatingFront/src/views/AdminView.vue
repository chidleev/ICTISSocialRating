<script setup>
import { onMounted, reactive, ref } from 'vue';
import { RouterView, RouterLink } from 'vue-router'
import router from '@/router';
import axios from 'axios';

const organizers = reactive([])
function getUnverify() {
    axios.get('/api/organizer/getunverify')
    .then(result => {
        organizers.splice(0,organizers.length)
        result.data.map(org => {
            organizers.push(org)
        })
    })
    .catch(function (error) {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    });
}
getUnverify()

function verifyOrg(e) {
    axios.put('/api/organizer/verifyOrg', {
        orgUuid: e.target.getAttribute('org_uuid')
    })
    .then(result => {
        alert("Организатор подтвержден")
        getUnverify()
    })
    .catch(function (error) {
        error.response.data.errors.map(err => {
            alert(err.comment)
        })
    })
}
</script>

<template>
    <div class="container">
        <div class="sidebar">
            <h2>Неподтвержденные организаторы</h2>
            <div class="organizer_card" v-for="org in organizers" :key="org.uuid">
                <div class="fio">{{ org.User.FIO }}</div>
                <button :org_uuid="org.uuid" @click=verifyOrg>Подтвердить</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

.organizer_card {
    padding: max(1vw, 1vh);

    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    background-color: cadetblue;
    border-radius: max(1vw, 1vh);
}

.organizer_card button {
    padding: max(0.5vw, 0.5vh);
    min-height: 4vh;

    font-size: 2vh;
    text-align: center;

    background-color: aliceblue;
    border: none;
    cursor: pointer;

    border-radius: max(0.5vw, 0.5vh);
}
</style>