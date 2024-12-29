import React from 'react'
function Card({ data,icons2,icons}) {
    return (
        <>
            <div className="boxes-22">
                {data.map((curElem) => {
                    return (
                        <>
                            <div className="box12">
                                <h3>{curElem.heading}</h3>
                                <p>{curElem.desc.slice(0,70)}</p>
                                <div className='icon'>
                                    {icons}
                                    {icons2}
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Card
