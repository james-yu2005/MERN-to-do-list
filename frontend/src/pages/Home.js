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
                        <h1>done?</h1>
                        <h1>{todo.task}</h1>
                        <h1>del</h1>
                    </div>
                ))
            }
        </div>
    )
}