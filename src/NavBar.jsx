import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button/Button'

function NavBar() {
    const auth = localStorage.getItem("loggedIn")
    const navigate = useNavigate()
    const click = () => {
        navigate('/login')
    }
    const click2 = () => {
        localStorage.removeItem("loggedIn")
        navigate('/')
    }
    return (
        <>
            <nav className='nav'>
                <div className="img-logo">
                    <h1>LOGO</h1>
                </div>
                <div className='nav-li'>
                    <Link to="/">Home</Link>
                    <Link to="/movies">All Movies</Link>
                    {/* <Link to="/movieDetails">MovieDetails</Link> */}
                </div>
                {auth ? <Button text="Logout" className="login-btn" onClick={click2} /> : <Button text="Login" className="login-btn" onClick={click} />}
            </nav>
        </>
    )
}

export default NavBar
