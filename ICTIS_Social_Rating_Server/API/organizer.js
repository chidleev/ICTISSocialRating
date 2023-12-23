const express = require('express')
const db = require('../DataBase/models')

const organizerAPI = express()

organizerAPI.get('/become', (req, res) => {
    const errors = []

    db.Organizers.create({
        description: 'Неподтвержденный организатор'
    })
    .then(response => {
        res.status(200).send()
    })
    .catch(error => {
        errors.push({
            type: 'become',
            comment: 'Не удалось сделать запрос на назначение организатором'
        })
        res.status(422).json({
            errors: errors
        })
    })
})
module.exports = organizerAPI