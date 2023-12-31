const express = require('express')
const db = require('../DataBase/models')

const ratingAPI = express()

ratingAPI.get('/all', (req, res) => {
    console.log(req.signedCookies['token'])
    db.Ratings.findAll({
        attributes: {
            exclude: ['uuid']
        }
    })
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.status(404).send();
        console.error(error);
    })
})
module.exports = ratingAPI