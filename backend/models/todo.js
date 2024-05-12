const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: false,
    },
    done: {
        type: Boolean,
        default: false,
        required: false,
    }
}, { timestamps: true })

const TodoModel = mongoose.model("todos", TodoSchema)

module.exports = TodoModel