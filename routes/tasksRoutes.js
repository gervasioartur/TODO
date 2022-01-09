const express = require('express')
const router = express.Router()
const TaskContreoller = require('../controllers/TastController')

router.get('/', TaskContreoller.showTasks)
router.post('/add', TaskContreoller.createTaskSave)
router.post('/remove', TaskContreoller.removeTask)
router.get('/edit/:id', TaskContreoller.updateTask)
router.post('/edit',TaskContreoller.updateTaskPost)
router.post('/upadateStatus', TaskContreoller.toogleTaskStatus)
router.get('/add', TaskContreoller.createTask)


module.exports = router