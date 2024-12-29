import React from 'react'
import { Navigate } from 'react-router-dom'

const Protected = ({ children }) => {
    const auth = localStorage.getItem("loggedIn")
    if (!auth) {
        return <Navigate to="/login" replace />
    }
    return children
}

export default Protected

