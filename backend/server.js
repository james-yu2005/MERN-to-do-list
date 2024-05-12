const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./models/todo')
const {
    getTasks,
    addTask,
    updateTask,
    deleteTask,
    editTask
} = require('./controllers/todoController')

require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
app.listen(4000, () => {
    console.log('Server is running on port 4000')
})

app.get('/getTask', getTasks)

app.post('/addTask', addTask)

app.put('/doneTask/:id', updateTask)

app.patch('/editTask/:id', editTask) 

app.delete('/deleteTask/:id', deleteTask)

