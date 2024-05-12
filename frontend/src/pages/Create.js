import React, {useState} from "react";
import axios from 'axios'
import { MdAddTask } from "react-icons/md";

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
                <div className="flex justify-center">
                    <input className="mr-5 border-2 border-slate-400 rounded-lg" placeholder="&nbsp;Enter task" onChange={(e) => setFrontTask(e.target.value)}/>
                    <input className="border-2 border-slate-400 rounded-lg" placeholder="&nbsp;Time needed?" onChange={(e) => setTimeNeeded(e.target.value)}/>
                    <button className="bg-green-200 hover:bg-green-400 rounded-3xl p-2 ml-5" type="submit"><MdAddTask/></button>
                </div>
            </form>
        </div>
    )
}