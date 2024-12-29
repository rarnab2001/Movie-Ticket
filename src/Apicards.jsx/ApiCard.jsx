import React from 'react'
import { NavLink } from 'react-router-dom'
function ApiCard({ state }) {
    return (
        <>
            <div className="container">
                {
                    state.slice(0, 5).map((curElem, i) => {
                        const {poster_path, id,title} = curElem
                        return (
                            <>
                                <NavLink to={`/movieDetails/${id}`} state={{title}}>
                                    <div className='box'>
                                        <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
                                        {/* <h3>{title}</h3> */}
                                        {/* <p>{overview.slice(0,202)}</p> */}
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

export default ApiCard
