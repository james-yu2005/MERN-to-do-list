import React, {useState} from "react";
import axios from 'axios'

export default function Create() {
    const [frontTask, setFrontTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:4000/addTask', {frontTask: frontTask})
        .then(result => {
            console.log(result)
            setFrontTask("")
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <input name="" id="" placeholder="Enter task" onChange={(e) => setFrontTask(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}