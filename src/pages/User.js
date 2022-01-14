import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './User.css'


export default function User({ setShowNav, setIsAuth }) {
    const [showNewPass, setShowNewPass] = useState(false)
    const [showButton, setShowButton] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {
        setShowNav(true)
    })

    const handleClick = (e) => {
        e.preventDefault()
        setShowNewPass(true)
        setShowButton(false)
    }

    return (
        <div className='userform'>
            <form className='animate__animated animate__pulse'>
                <fieldset>
                    <h3>Username: dummyName</h3>
                    {!showNewPass && <h3>Password: *******</h3>}
                    {showNewPass &&
                        <div className='newpass'>
                            <label htmlFor='password'><h3>New Password:</h3></label>
                            <input type='password' name='password' maxLength='6' required />
                        </div>}
                    {showButton && <button className='button-outline' onClick={(e) => handleClick(e)}>Change Password</button>}
                    {!showButton && <button className='button-outline'>Save Password</button>}
                    <button
                        className='button-outline'
                        onClick={() => {
                            navigate('/');
                            setShowNav(false);
                            setIsAuth(false)
                        }}>Logout</button >
                </fieldset>
            </form>
        </div>
    )
}
