import React, { useState,useEffect } from "react";
import Create from "./Create";
import axios from "axios";

export default function Home() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/getTask')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])
    const handleDone = (id) => {
        axios.put('http://localhost:4000/updateTask/' + id)
        .then(result => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:4000/deleteTask/' + id)
        .then(result => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>Todo List</h1>
            <Create/>
            {
                todos.length === 0 ? 
                <div>
                    <h2>No record of todos</h2>
                </div>:
                todos.map(todo =>(
                    <div>
                        <button onClick={() => handleDone(todo._id)}>
                            {
                                todo.done ? 
                                <h1>
                                    Done
                                </h1>: 
                                <h1>
                                    NotDone
                                </h1>
                            }
                        </button>
                        <h1>{todo.task}</h1>
                        <button onClick={() => handleDelete(todo._id)}>del</button>
                    </div>
                ))
            }
        </div>
    )
}