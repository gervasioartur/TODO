const { Sequelize, DataTypes } = require('sequelize')
const database = require('../../config/database')
const sequelize = new Sequelize(database)

const Task = sequelize.define('task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
})
module.exports = Task