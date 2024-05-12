import React, {useState} from "react";
import axios from 'axios'

export default function Create() {
    const [frontTask, setFrontTask] = useState()
    const [timeNeeded, setTimeNeeded] = useState()

    const handleSubmit = () => {
        axios.post('http://localhost:4000/addTask', {
            frontTask: frontTask,
            timeNeeded: timeNeeded,
        })
        .then(result => {
            window.location.reload()
        })
        .catch(err => console.log(err))
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="" id="" placeholder="Enter task" onChange={(e) => setFrontTask(e.target.value)}/>
                <input name="" placeholder="Time needed?" onChange={(e) => setTimeNeeded(e.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}