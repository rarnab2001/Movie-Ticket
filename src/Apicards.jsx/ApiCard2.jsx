import React from 'react'
import { NavLink } from 'react-router-dom'

function ApiCard2({ state }) {
    return (
        <>
            <div className="allmovie-container">
                {
                    state.map((curElem) => {
                        const {poster_path, id,title} = curElem
                        return (
                            <>
                                <NavLink to={`/movieDetails/${id}`} 
                                 state={{title}}>
                                    <div className='allmovie-card'>
                                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                                        {/* <h3>{title}</h3> */}
                                    </div>
                                </NavLink>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ApiCard2
