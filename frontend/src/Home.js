import React, { useState } from "react";
import Create from "./Create";

export default function Home() {
    const [todos, setTodos] = useState([])
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
                        {todo}
                    </div>
                ))
            }
        </div>
    )
}