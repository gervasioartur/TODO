const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname,'../public/')))
app.set('views', path.join(__dirname, 'app/views'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//routes
const TaskRoutes = require('./routes/tasksRoutes')

//models
const Task = require('./app/models/Task')

//using the routes
//base url 
app.get('/', async (req, res) => {
    const tasks = await Task.findAll({ raw: true })
    res.render('tasks/list', { tasks })
})
app.use('/tasks', TaskRoutes)

module.exports = app