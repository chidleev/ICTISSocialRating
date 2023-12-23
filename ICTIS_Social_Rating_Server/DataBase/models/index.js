const db_conf = require('../dbconfig.js')
const {Sequelize, Op, DataTypes} = require('sequelize')

const client = new Sequelize(db_conf.DB, db_conf.USER, db_conf.PASSWORD, {
    host: db_conf.HOST,
    dialect: db_conf.DIALECT,
    dialectOptions: db_conf.dialectOptions,
    pool: db_conf.pool
})

const db = {}
db.Sequelize = Sequelize
db.Op = Op
db.DataTypes = DataTypes
db.client = client


db.Users = require("./users.js")(client, Sequelize, DataTypes)
db.Organizers = require("./organizers.js")(client, Sequelize, DataTypes)
db.Ratings = require("./ratings.js")(client, Sequelize, DataTypes)
db.Events = require("./events.js")(client, Sequelize, DataTypes)
db.UsersEvents = require("./users_events.js")(client, Sequelize, DataTypes)


db.UsersEvents.belongsTo(db.Users)
db.UsersEvents.belongsTo(db.Events)

db.Events.hasMany(db.UsersEvents, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
db.Events.belongsTo(db.Ratings)
db.Events.belongsTo(db.Organizers)

db.Ratings.hasMany(db.Events, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

db.Organizers.hasMany(db.Events, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})
db.Organizers.belongsTo(db.Users)

db.Users.belongsTo(db.Organizers)
db.Users.hasMany(db.Events, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

module.exports = db