const express = require('express')
const db = require('../DataBase/models')

const eventAPI = express()

eventAPI.get('/all', (req, res) => {
    db.Events.findAll()
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.status(404).send();
        console.error(error);
    })
})
module.exports = eventAPI