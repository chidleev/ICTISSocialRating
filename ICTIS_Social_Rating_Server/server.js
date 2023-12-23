const express = require('express')
const path = require('path')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const API = require('./API')
const DB = require('./DataBase/models')

const app = express()
const port = 3000

app.use(cors({origin: '*'}))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser('My secret key :D'))

app.use('/api', API)
app.use((req, res, next) => {
    if (req.url.indexOf('.') == -1) {
        req.url = '/'
    }
    next()
})
app.use(express.static(path.join(__dirname, 'dist')))

app.all('*', (req, res) => {
    res.status(404).send('Fuck Off')
})

DB.client.sync(/*{force: true}*/).then(() => {
    console.log('---> Sync Database')
 
    /*DB.Users.create({
        login: "admin",
        password: "admin",
        FIO: "Иванов Иван Иванович",
        isAdmin: true
    }).then(user => {
        DB.Organizers.create({
            description: "Лучший организатор"
        }).then(organizer => {
            organizer.setUser(user.dataValues.uuid).then(organizer => {
                DB.Ratings.create({
                    name: 'Спорт',
                    description: 'Баллы в данной категории можно получить за участие в спортивных мероприятиях'
                }).then(rating => {
                    DB.Events.create({
                        name: "Шахматы",
                        description: "Турнир по шахматам",
                        startDate: new Date(),
                        location: 'Корпус И - 1 этаж',
                        ratingValue: 999
                    }).then(event => {
                        event.setRating(rating.dataValues.uuid).then(event => {
                            event.setOrganizer(organizer.dataValues.uuid).then(event => {

                            }).catch(error => console.log(error))
                        }).catch(error => console.log(error))
                    }).catch(error => console.log(error))
                }).catch(error => console.log(error))
            }).catch(error => console.log(error))
        }).catch(error => console.log(error))
    }).catch(error => console.log(error))*/

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}!`)
    })
}).catch(error => console.log(error))
