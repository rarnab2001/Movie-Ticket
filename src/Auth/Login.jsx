import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
function Login() {
    const [input, setInput] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email){
            toast.error("Email is required")
        }else if(!password){
            toast.error("PassWord is required")
        }else{
        const loggedUser = JSON.parse(localStorage.getItem("user"))
        const newUser = loggedUser.filter((curElem) => {
            return curElem.email === input.email && curElem.password === input.password
        })
        if (newUser.length == 1) {
            navigate('/bookingPage')
            localStorage.setItem("loggedIn", true)
            toast.success("LoggedIn Successfully")
        } else {
            toast.error("Invalid Credentials")
        }
        setInput({
            email: "",
            password: ""
        })
    }
    }
    return (
        <>
            <body className='body1'>
                <div className="login-container">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Enter your email"  value={input.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" id="password" name="password" placeholder="Enter your password"  value={input.password} onChange={handleChange} />
                        </div>
                        <button type="submit" className="login-button">Login</button>
                    </form>
                    <div className="forgot-password">
                        Haven't Sign-In ? <Link to="/signup">Sign-In</Link>
                    </div>
                </div>
            </body>
        </>
    )
}

export default Login
