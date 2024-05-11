const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./models/todo')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
app.listen(4000, () => {
    console.log('Server is running on port 4000')
})

app.get('/getTask', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/addTask', (req, res) => {
    const backTask = req.body.frontTask
    TodoModel.create({
        task: backTask
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/updateTask/:id', (req, res) => {
    const { id } = req.params
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/deleteTask/:id', (req, res) => {
    const { id } = req.params
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

