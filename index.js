const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./database/conn')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//calling the models
const Task = require('./models/Task')

//routes
const TaskRoutes = require('./routes/tasksRoutes')

//using the routes
app.use('/tasks', TaskRoutes)


conn.sync().then(() => {
    app.listen(port)
}).catch(err => console.log(err))

