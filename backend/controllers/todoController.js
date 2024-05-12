const TodoModel = require('../models/todo')
const mongoose = require('mongoose')

function getTasks(req, res) {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

function addTask(req, res) {
    const { frontTask: backTask, timeNeeded } = req.body
    TodoModel.create({
        task: backTask,
        time: timeNeeded
    }).then(result => res.json(result))
    .catch(err => res.json(err))
}

function updateTask(req, res) {
    const { id } = req.params
    TodoModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

function deleteTask(req, res) {
    const { id } = req.params
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
}

module.exports = {
    getTasks,
    addTask,
    updateTask,
    deleteTask
}