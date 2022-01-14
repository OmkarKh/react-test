import { useState } from "react"
import reactDom from "react-dom"
import './Modal.css'

export default function Modal({ setAdd, setShowModal }) {
    const [task, setTask] = useState('')
    const [taskComplete, setTaskComplete] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setShowModal(false)
        const id = Math.random() * 10 - 5
        const newTask = {
            "id": id,
            "title": task,
            "completed": taskComplete
        }
        setAdd(newTask)
    }


    return reactDom.createPortal((
        <div className="modal-backdrop">
            <form onSubmit={(e) => handleSubmit(e)}>
                <fieldset>
                    <label>
                        <input
                            type="text"
                            placeholder="Enter Task"
                            onChange={(e) => setTask(e.target.value)}
                            value={task}
                            required />
                    </label>
                    <div>
                        <p>Task Complete?</p>
                        <input
                            type='radio'
                            name="task"
                            onChange={() => setTaskComplete(true)}
                            value={taskComplete}
                            required /> Yes <br />
                        <input
                            type="radio"
                            name="task"
                            onChange={() => setTaskComplete(false)}
                            value={taskComplete}
                            required /> No
                    </div>
                    <button className="button-outline">Submit</button>
                    <button onClick={() => setShowModal(false)} className="button-outline">Close</button>
                </fieldset>
            </form>
        </div >
    ), document.body)
}