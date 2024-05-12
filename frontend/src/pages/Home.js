import React, { useState,useEffect } from "react";
import Create from "./Create";
import axios from "axios";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { MdRadioButtonChecked } from "react-icons/md";
import { FaRegTrashCan } from "react-icons/fa6";
import { MdModeEditOutline } from "react-icons/md";

export default function Home() {
    const [todos, setTodos] = useState([])
    const [completed, setCompleted] = useState(false)
    const [editTask, setEditTask] = useState("")
    const [editTime, setEditTime] = useState("")
    const [editing, setEditing] = useState(false)

    useEffect(() => {
        axios.get('http://localhost:4000/getTask')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, [])
    const handleDone = (id) => {
        axios.put('http://localhost:4000/doneTask/' + id)
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
    const handleCompleted = () => {
        setCompleted(true);
    }
    const handleAll = () => {
        setCompleted(false)
    }
    const handleEditTask = (id) => {
        axios.patch('http://localhost:4000/editTask/' + id, {
            editTask: editTask,
            editTime: editTime
        })
        .then(result => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    const handleSubmit = () => {

    }
    return(
        <div>
            <h1 className="text-center text-2xl p-7">Todo List</h1>
            <Create/>
            <div className="flex justify-center">
                <button className="bg-purple-200 hover:bg-purple-400 rounded-xl p-2 mt-3" onClick={handleCompleted}>done</button>
                <button className="bg-purple-200 hover:bg-purple-400 rounded-xl p-2 mt-3 ml-3" onClick={handleAll}>all</button>
            </div>
            {
                completed? 
                <div>
                    {
                    todos.map(todo => (
                        <div className="flex justify-center mt-2">
                            {
                                todo.done? (
                                <div>
                                    <button className="border-2 border-slate-300 rounded-lg p-3">
                                        <div className="flex flex-row">
                                            <button>
                                                <MdRadioButtonChecked/>
                                            </button>
                                            <h1 className="text-lg ml-2">{todo.task}&nbsp;&nbsp;</h1>
                                            {
                                            todo.time ?
                                                <h1 className="italic text-lg font-light mr-2">
                                                    &#40;{todo.time}&#41;
                                                </h1>:
                                                <h1>
                                                </h1>
                                            }
                                            <button className="bg-red-200 hover:bg-red-400 rounded-full p-2"onClick={() => handleDelete(todo._id)}><FaRegTrashCan/></button>
                                        </div>
                                    </button>
                                </div>
                                ): (
                                <h1>
                                </h1>
                            )}
                        </div>
                    ))
                    }
                </div>:
                <h1>
                    {
                    todos.map(todo =>(
                        <div className="flex justify-center mt-2">
                            <button className="border-2 border-slate-300 rounded-lg p-3">
                                <div className="flex flex-row">
                                    <button onClick={() => handleDone(todo._id)}>
                                        {
                                            todo.done ? 
                                            <h1>
                                                <MdRadioButtonChecked/>
                                            </h1>: 
                                            <h1>
                                                <MdRadioButtonUnchecked/>
                                            </h1>
                                        }
                                    </button>
                                    <h1 className="text-lg ml-2">{todo.task}&nbsp;&nbsp;</h1>
                                    {
                                        todo.time ?
                                        <h1 className="italic text-lg font-light mr-2">
                                            &#40;{todo.time}&#41;
                                        </h1>:
                                        <h1>

                                        </h1>

                                    }
                                    <button className="bg-red-200 hover:bg-red-400 rounded-full p-2"onClick={() => handleDelete(todo._id)}><FaRegTrashCan/></button>
                                </div>
                            </button>
                        </div>
                    ))
                }
                </h1>
            }
                
            
        </div>
    )
}