import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from './Button/Button'
import axios from 'axios';

function NavbarMovie() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate()
    const getSearchMovie = async () => {
        try {
            const res = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=673282f8fde653cd9692d7c13da5f1d3&query=${searchQuery}`
            );
            // console.log(res.data);
            setAllMovie(res?.data?.results)
        } catch (error) {
            console.log(error);
        }
    }
    // const navigate = useNavigate()
    const click = () => {
        navigate('/login')
    }
    useEffect(() => {
        getSearchMovie()
    }, [searchQuery])
    return (
        <>
            <nav className='movie-nav'>
                <div className="img-logo">
                    <h1>LOGO</h1>
                </div>
                {/* <div class="search-bar">
                    <form>
                        <input type="text" placeholder="Search Movies..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    </form>
                </div> */}
                <div className='nav-li2'>
                    <Link to="/">Home</Link>
                    <Link to="/movies">All Movies</Link>
                    {/* <Link to="/movieDetails">MovieDetails</Link> */}
                </div>
                <Button text="login" className="login-btn" onClick={click} />
            </nav>
        </>
    )
}

export default NavbarMovie