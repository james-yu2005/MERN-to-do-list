const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('./models/todo')

const app = express()
app.use(cors())
app.use(express.json())

//mongoose.connect(HELLOEOEOEOEO)
app.post('/api/addTask', (req, res) => {
    const task = req.body.task
    TodoModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(result => res.json(err))
})

app.listen(4000, () => {
    console.log('Server is running on port 4000')
})