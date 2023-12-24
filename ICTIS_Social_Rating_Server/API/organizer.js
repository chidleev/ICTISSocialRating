const express = require('express')
const db = require('../DataBase/models')

const organizerAPI = express()

organizerAPI.get('/become', (req, res) => {
    const errors = []

    db.Users.findOne({
        where: {
            uuid: req.signedCookies.token
        }
    })
    .then(user => {
        db.Organizers.create({
            description: user.FIO
        })
        .then(organizer => {
            organizer.setUser(user.uuid)
            .then(organizer => {
                res.status(200).send("Ваш запрос принят, ожидайте подтверждения")
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

organizerAPI.get('/getevents', (req, res) => {
    const errors = []

    db.Organizers.findOne({
        where: {
            UserUuid: req.signedCookies.token
        }
    })
    .then(org => {
        org.getEvents()
        .then(events => {
            res.json(events)
        })
        .catch(error => {
            errors.push({
                type: 'become',
                comment: 'Не удалось получить ваши события'
            })
            res.status(422).json({
                errors: errors
            })
        })
    })
    .catch(error => {
        errors.push({
            type: 'become',
            comment: 'Не удалось получить ваши события'
        })
        res.status(422).json({
            errors: errors
        })
    })
})

organizerAPI.post('/createEv', (req, res) => {
    const errors = []

    if (!Boolean(req.body.name)) {
        errors.push({
            type: 'event',
            comment: 'Не указано имя события'
        })
    }

    if (!Boolean(req.body.description)) {
        errors.push({
            type: 'event',
            comment: 'Не указано описание события'
        })
    }

    if (!Boolean(req.body.startDate)) {
        errors.push({
            type: 'event',
            comment: 'Не указана дата проведения события'
        })
    }
    
    if (!Boolean(req.body.location)) {
        errors.push({
            type: 'event',
            comment: 'Не указано место проведения события'
        })
    }

    if (!Boolean(req.body.ratingValue)) {
        errors.push({
            type: 'event',
            comment: 'Не указаны баллы события'
        })
    }

    if (!Boolean(req.body.evCat)) {
        errors.push({
            type: 'event',
            comment: 'Не указана категория события'
        })
    }

    if (errors.length > 0) {
        res.status(422).json({
            errors: errors
        })
        return
    }

    db.Events.create({
        name: req.body.name,
        description: req.body.description,
        startDate: req.body.startDate,
        location: req.body.location,
        ratingValue: req.body.ratingValue
    })
    .then(event => {
        db.Organizers.findOne({
            where: {
                UserUuid: req.signedCookies.token
            }
        })
        .then(organizer => {
            event.setOrganizer(organizer.uuid)
            .then(event => {
                
                event.setRating(req.body.evCat)
                .then(event => {
                    res.send()
                })
                .catch(error => {
                    errors.push({
                        type: 'event',
                        comment: 'Не удалось создать событие'
                    })
                    res.status(422).json({
                        errors: errors
                    })
                })
            })
            .catch(error => {
                errors.push({
                    type: 'event',
                    comment: 'Не удалось создать событие'
                })
                res.status(422).json({
                    errors: errors
                })
            })
        })
        .catch(error => {
            errors.push({
                type: 'event',
                comment: 'Не удалось создать событие'
            })
            res.status(422).json({
                errors: errors
            })
        })
    })
    .catch(error => {
        errors.push({
            type: 'event',
            comment: 'Не удалось создать событие'
        })
        res.status(422).json({
            errors: errors
        })
    })
})

organizerAPI.get('/getunverify', (req, res) => {
    const errors = []

    db.Organizers.findAll({
        where: {
            isVerify: false
        },
        include: [{
            model: db.Users,
            exclude: ["password"]
        }]
    })
    .then(orgs => {
        res.json(orgs)
    })
    .catch(error => {
        errors.push({
            type: 'event',
            comment: 'Не удалось получить неподтвержденных организаторов'
        })
        res.status(422).json({
            errors: errors
        })
    })
})

organizerAPI.put('/verifyOrg', (req, res) => {
    const errors = []

    if (!Boolean(req.body.orgUuid)) {
        errors.push({
            type: 'uuid',
            comment: 'Не указано ID подтверждаемого организатора'
        })
    }

    if (errors.length > 0) {
        res.status(422).json({
            errors: errors
        })
        return
    }

    db.Organizers.update({
        isVerify: true
    }, {
        where: { uuid: req.body.orgUuid }
    })
    .then(orgs => {
        res.send()
    })
    .catch(error => {
        errors.push({
            type: 'event',
            comment: 'Не удалось подтвердить организатора'
        })
        res.status(422).json({
            errors: errors
        })
    })
})

module.exports = organizerAPI