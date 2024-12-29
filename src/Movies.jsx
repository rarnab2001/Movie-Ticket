import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ApiCard2 from './Apicards.jsx/ApiCard2'
import axios from 'axios'
import Button from './Button/Button'

function Movies() {
  const [search, setSearch] = useState("");
  const [allMovie, setAllMovie] = useState([])
  const [error, setError] = useState("")
  const [pagination, setPagination] = useState(1)
  const navigate = useNavigate()
  const myApiKey = '673282f8fde653cd9692d7c13da5f1d3'
  const auth = localStorage.getItem("loggedIn")
  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${myApiKey}&page=${pagination}`
      );
      console.log(res.data);
      setAllMovie(res?.data?.results);
    } catch (e) {
      console.log(e);
    }
  };
  const getSearchMovie = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${myApiKey}&query=${search}`
      );
      // console.log(res.data);
      setAllMovie(res?.data?.results)
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    getAllMovies()
  }, [pagination])

  useEffect(() => {
    getSearchMovie()
    getAllMovies()
  }, [search, pagination])

  const clickPrev = () => {
    if (pagination >= 2) {
      setPagination(pagination - 1)
    }
  }
  const clickNext = () => {
    setPagination(pagination + 1)
  }
  const click = () => {
    navigate('/login')
  }

  const click2 = () => {
    localStorage.removeItem("loggedIn")
    navigate('/')
  }
  return (
    <>
      <nav className='movie-nav'>
        <div className="img-logo">
          <h1>LOGO</h1>
        </div>
        <div class="search-bar">
          <form>
            <input className="search-barinput" type="text" placeholder="Search Movies..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </form>
        </div>
        <div className='nav-li2'>
          <Link to="/">Home</Link>
          <Link to="/movies">All Movies</Link>
          {/* <Link to="/movieDetails">MovieDetails</Link> */}
        </div>
        {auth ? <Button text="Logout" className="login-btn" onClick={click2} /> : <Button text="Login" className="login-btn" onClick={click} />}
      </nav>
      {error && <div className="error-message">{error}</div>}
      <div className="movie-list">
        <ApiCard2 state={allMovie} />
      </div>
      <div className='pagination'>
        <Button className="view-all" text="prev" onClick={clickPrev} />
        <Button className="view-all" text={`${pagination}`} />
        <Button className="view-all" text="next" onClick={clickNext} />
      </div>
    </>
  )
}
export default Movies

