import Modal from '../components/Modal'
import { useEffect, useState } from "react"
import './Tasks.css'

export default function Tasks({ setShowNav }) {
    const [todos, setTodos] = useState([])
    const [add, setAdd] = useState([])
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setShowNav(true)
    })

    const url = 'https://jsonplaceholder.typicode.com/todos'

    //Fetching data
    useEffect(() => {
        const getData = async () => {
            const response = await fetch(url)
            const data = await response.json()
            setTodos(data)
        }
        getData()
    }, [url])

    //Adding new tasks
    useEffect(() => {
        setTodos(prevTodos => [...prevTodos, add])
    }, [add])

    //Deleting tasks
    const handleClick = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => id !== todo.id)
        })
    }

    //Displaying Modal
    const handleModal = () => {
        setShowModal(true)
    }


    return (
        <div className="tasks">
            {showModal && <Modal setAdd={setAdd} setShowModal={setShowModal} />}
            <table className="animate__animated animate__bounceInLeft">
                <tbody>
                    {todos.filter((todo) => todo.id <= 5)
                        .map((todo) => (
                            <tr key={todo.id}>
                                <td className="listid">{todo.id}</td>
                                <td className="listtitle">{todo.title}</td>
                                <td className="listcomp">{String(todo.completed)}</td>
                                <td><button onClick={() => handleClick(todo.id)}>Delete</button></td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <button onClick={handleModal} className="button-outline">Add Task</button>
        </div>
    )
}
