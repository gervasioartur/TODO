const { DataTypes } = require('sequelize')
const db = require('../../1-ESTRUTURA/database/conn')


const Task = db.define('tasks', {
    title: {
        type: DataTypes.STRING,
        require: true
    },
    description: {
        type: DataTypes.STRING,
        require: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        require: true
    },
})
module.exports =  Task