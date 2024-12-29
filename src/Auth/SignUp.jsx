import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
function SignUp() {
    const [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
    })
    const [data, setData] = useState(() => JSON.parse(localStorage.getItem("user")) || [])
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value } = e.target
        setInput((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.name) {
            toast.error("Please Enter Name")
        } else if (!input.email) {
            toast.error("Please Enter Valid Email")
        } else if (input.phone.length > 10 || !input.phone || input.phone.length < 10) {
            toast.error("Please Enter Valid Phone Number")
        } else if (!input.password) {
            toast.error("Please enter Password")
        } else {
            const newDatadata = {
                name: input.name,
                email: input.email,
                phone: input.phone,
                password: input.password
            }
            const sameData = data.filter((curElem) => {
                return curElem.email === input.email || curElem.phone === input.phone
            })
            if (sameData.length == 1) {
                toast.error("These Credentials are allready taken")
            } else {
                const oldData = [...data, newDatadata]
                setData(oldData)
                localStorage.setItem("user", JSON.stringify(oldData))
                navigate('/login')
                setInput({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                })
            }
        }
    }
    return (
        <>
            <body className='body2'>
                <div className="signup-container">
                    <h1>Signup</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input type="text" className="name" name="name" placeholder="Enter your name" value={input.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input type="email" className="email" name="email" placeholder="Enter your email" value={input.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" className="phone" name="phone" placeholder="Enter your phone number" value={input.phone} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label for="password">Password</label>
                            <input type="password" className="password" name="password" placeholder="Enter your password" value={input.password} onChange={handleChange} />
                        </div>
                        <button type="submit" className="signup-button">Sign Up</button>
                    </form>
                    <div className="forgot-password2">
                        Haven't Sign-In ? <Link to="/login">Log-In</Link>
                    </div>
                </div>
            </body>
        </>
    )
}

export default SignUp
