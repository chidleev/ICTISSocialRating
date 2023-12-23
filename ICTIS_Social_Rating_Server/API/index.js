const express = require('express')

const userAPI = require('./user.js')
const ratingAPI = require('./rating.js')
const organizerAPI = require('./organizer.js')
const eventAPI = require('./event.js')

const API = express()

API.use('/user', userAPI)
API.use('/rating', ratingAPI)
API.use('/organizer', organizerAPI)
API.use('/eventapi', eventAPI)

module.exports = API 
