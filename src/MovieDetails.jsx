import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Button from './Button/Button'
import axios from 'axios'
import { AppContext } from './context/Context'
function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null)
  const { setLocationData } = useContext(AppContext)
  const { id } = useParams()
  const location = useLocation()
  setLocationData(location)
  const nagivate = useNavigate()
  const auth = localStorage.getItem("loggedIn")
  // console.log(auth)
  const movieApi = `https://api.themoviedb.org/3/movie/${id}?api_key=673282f8fde653cd9692d7c13da5f1d3`
  const getApiData = async (dataApi) => {
    try {
      const newData = await axios.get(dataApi)
      console.log(newData)
      const newData2 = await newData.data
      console.log(newData2)
      setMovieDetails(newData2)
    } catch (err) {
      console.error(err)
    }
  }
  const click = () => {
    nagivate('/movies')
  }
  const click2 = () => {
    if (auth) {
      nagivate('/bookingPage')
    } else {
      nagivate('/login')
    }
  }
  useEffect(() => {
    getApiData(movieApi)
  }, [id])
  return (
    <>
      <div className="deatails-page">
        <div className='detail-img'>
          <img className='detailed-img' src={`https://image.tmdb.org/t/p/w500/${movieDetails?.backdrop_path}`} alt="" />
          <div className='inner-box'>
            <img src={`https://image.tmdb.org/t/p/w500/${movieDetails?.poster_path}`} alt="" />
          </div>
          <div className="inner-box-name">
            <h1>{movieDetails?.title}</h1>
            {/* <p>{location.state.overview}</p> */}
          </div>
          <div className="inner-box-overview">
            <p>{movieDetails?.overview.slice(0, 250)}</p>
          </div>
          <div className="inner-box-rating">
            <p>Rating: {movieDetails?.vote_average.toFixed(1)}/10</p>
          </div>
          <div className="inner-box-realesedate">
            <p>UA • {movieDetails?.genres.map((curElem) => {
              return (curElem.name)
            }).join(" , ")}</p>
          </div>
          <div className="inner-box-realesedate2">
            <p>{movieDetails?.release_date}</p>
          </div>
          <Button className="go-back" text="X" onClick={click} />
          <Button className="book-now" text="Book Tickets" onClick={click2} />
        </div>
      </div>
    </>
  )
}
export default MovieDetails
