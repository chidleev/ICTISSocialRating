const express = require('express')
const db = require('../DataBase/models')

const userAPI = express()

userAPI.post('/checkLogin', (req, res) => {
    const errors = []

    if (!Boolean(req.body.login)) {
        errors.push({
            type: 'login',
            comment: 'Вы не ввели логин'
        })
    }

    if (errors.length > 0) {
        res.status(422).json({
            errors: errors
        })
        return
    }

    db.Users.findOne({
        where: { login: req.body.login }
    })
        .then(user => {
            if (user == null) {
                res.sendStatus(200)
            }
            else {
                errors.push({
                    type: 'login',
                    comment: 'Пользователь с таким логином уже существует'
                })
                res.status(422).json({
                    errors: errors
                })
            }
        })
})

userAPI.post('/register', (req, res) => {
    const errors = []

    if (!Boolean(req.body.login)) {
        errors.push({
            type: 'login',
            comment: 'Вы не ввели логин'
        })
    }

    if (!Boolean(req.body.password)) {
        errors.push({
            type: 'password',
            comment: 'Вы не ввели пароль'
        })
    }

    if (!Boolean(req.body.FIO)) {
        errors.push({
            type: 'name',
            comment: 'Вы не ввели свое ФИО'
        })
    }

    if (errors.length > 0) {
        res.status(422).json({
            errors: errors
        })
        return
    }

    db.Users.create({
        login: req.body.login,
        password: req.body.password,
        FIO: req.body.FIO
    })
        .then(user => {
            res.cookie('token', `${user.uuid}`, {
                signed: true,
                maxAge: 604800000
            }).sendStatus(201)
        })
        .catch(error => {
            console.log(error);
            errors.push({
                type: 'login',
                comment: 'Ошибка базы данных: мы не смогли Вас зарегестрировать'
            })
            res.status(400).json({
                errors: errors
            })
        })
})

userAPI.post('/login', (req, res) => {
    const errors = []

    if (!Boolean(req.body.login)) {
        errors.push({
            type: 'login',
            comment: 'Вы не ввели логин'
        })
    }
    if (!Boolean(req.body.password)) {
        errors.push({
            type: 'password',
            comment: 'Вы не ввели пароль'
        })
    }

    if (errors.length > 0) {
        res.status(422).json({
            errors: errors
        })
        return
    }

    db.Users.findOne({
        where: { login: req.body.login }
    })
        .then(user => {
            if (user == null) {
                errors.push({
                    type: 'login',
                    comment: 'Пользователя с таким логином не найдено'
                })
                res.status(404).json({
                    errors: errors
                })
            }
            else {
                if (req.body.password == user.password) {
                    res.cookie('token', `${user.uuid}`, {
                        signed: true,
                        maxAge: 604800000
                    }).json(true)
                }
                else {
                    errors.push({
                        type: 'password',
                        comment: 'Неверный пароль'
                    })
                    res.status(401).json({
                        errors: errors
                    })
                }
            }
        })
        .catch(error => {
            console.error(error);
        })
})

userAPI.get('/logout', (req, res) => {
    res.clearCookie('token').sendStatus(200)
})

userAPI.post('/joinevent', (req, res) => {
    res.send()
})

module.exports = userAPI