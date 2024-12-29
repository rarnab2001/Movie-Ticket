import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Movies from './Movies'
import MovieDetails from './MovieDetails'
import Error from './Error'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import BookingPage from './BookingPage'
import Protected from './Auth/Protected'
import Payment from './Payment'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movieDetails/:id' element={<MovieDetails />} />
          <Route path='/bookingPage' element={<Protected><BookingPage/></Protected>} />
          <Route path='/payment' element={<Protected><Payment/></Protected>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
