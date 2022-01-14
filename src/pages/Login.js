import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import './Login.css'

export default function Login({ setShowNav, setIsAuth }) {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [wrongPass, setWrongPass] = useState(false)

    //Users Credentials
    const users = [{ dbusername: 'abc', dbpassword: '123' }, { dbusername: 'admin', dbpassword: 'admin' }]

    useEffect(() => {
        setShowNav(false)
    })

    //Authentication
    const handleSubmit = (e) => {
        e.preventDefault()
        users.map((user) => {
            if (username === user.dbusername && password === user.dbpassword) {
                navigate('/')
                setIsAuth(true)
            }
            setWrongPass(true)
        })
    }

    return (
        <div className="animate__animated animate__zoomIn">
            <form onSubmit={(e) => handleSubmit(e)} className="login">
                <fieldset>
                    <label>
                        <input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            maxLength='6'
                            required />
                    </label>
                    <label>
                        <input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            maxLength='6'
                            required />
                    </label>
                    <button>Log In</button>
                    {wrongPass && <p>Invalid Username/Password</p>}
                </fieldset>
            </form>
        </div>
    )
}
