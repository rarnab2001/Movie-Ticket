import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from './Button/Button';
function Payment() {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const click2 = () => {
        localStorage.removeItem("loggedIn")
        navigate('/')
    }
    return (
        <>
            <div className='greet'>
                Payment Done 😊<br />
               {location.state.booking.name} Thank You For Your Booking <br />
               {`Movie - ${location.state.booking.title}`}
            </div>
            <div>
                <Button text="Logout" className="logout" onClick={click2} />
            </div>
        </>
    )
}

export default Payment
