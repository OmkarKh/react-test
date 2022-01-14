//Components
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import User from './pages/User'
import Navbar from './components/Navbar'
import Login from './pages/Login'
//Router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//Hooks
import { useState } from 'react'
//CSS
import './App.css'

function App() {
  //Hiding Nav
  const [showNav, setShowNav] = useState(null)
  //Authorising user
  const [isAuth, setIsAuth] = useState(false)

  return (
    <div className="App">
      <Router>
        <Navbar showNav={showNav} />
        <Routes>
          <Route path='/' element={isAuth ? <Home setShowNav={setShowNav} /> : <Login setShowNav={setShowNav} setIsAuth={setIsAuth} />} />
          <Route path='/tasks' element={isAuth ? <Tasks setShowNav={setShowNav} /> : <Login setShowNav={setShowNav} setIsAuth={setIsAuth} />} />
          <Route path='/user' element={isAuth ? <User setShowNav={setShowNav} setIsAuth={setIsAuth} /> : <Login setShowNav={setShowNav} setIsAuth={setIsAuth} />} />
          <Route path='/login' element={<Login setShowNav={setShowNav} setIsAuth={setIsAuth} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
