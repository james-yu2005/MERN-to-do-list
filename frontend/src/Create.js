import React from "react";
import axios from 'axios'

export default function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:4000/api/addTask', {task: task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    return(
        <div>
            <input name="" id="" placeholder="Enter task" onChange={(e) => setTask(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Add</button>
        </div>
    )
}