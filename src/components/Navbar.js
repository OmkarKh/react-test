import { NavLink } from 'react-router-dom'
import './Navbar.css'
import 'animate.css';

export default function Navbar({ showNav }) {

    return (
        <div>
            <nav>
                <h1 className='animate__animated animate__fadeInDown'>GPYou!</h1>
                {showNav && <div className="links">
                    <NavLink to='/' className='link'>Home</NavLink>
                    <NavLink to='/tasks' className='link'>Tasks</NavLink>
                    <NavLink to='/user' className='link'>User</NavLink>
                </div>}
            </nav>
        </div>
    )
}
