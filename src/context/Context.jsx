import React from 'react'
import { createContext } from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const AppContext = createContext();
function Context({ children }) {
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data4, setData4] = useState([])
    const [error, setError] = useState("")
    // const [search, setSearch] = useState("")
    const myApidata = "https://api.themoviedb.org/3/movie/top_rated?api_key=673282f8fde653cd9692d7c13da5f1d3"
    const myApidata2 = "https://api.themoviedb.org/3/movie/upcoming?api_key=673282f8fde653cd9692d7c13da5f1d3"
    const myApidata6 = "https://api.themoviedb.org/3/movie/popular?api_key=673282f8fde653cd9692d7c13da5f1d3"
    const [locationData, setLocationData] = useState(null)
    // const [userLoggedIn, setUserLoggedIn] = useState(null)

    const getTopRatedMovie = async (data) => {
        try {
            const newData = await axios.get(data)
            const newData2 = await newData.data.results
            console.log(newData2)
            setData1(newData2)
        } catch (err) {
            setError(err.message)
        }
    }

    const getTopRatedMovie2 = async (data) => {
        try {
            const newData = await axios.get(data)
            const newData2 = await newData.data.results
            console.log(newData2)
            setData2(newData2)
        } catch (err) {
            setError(err.message)
        }
    }

    const getTopRatedMovie4 = async (data) => {
        try {
            const newData = await axios.get(data)
            const newData2 = await newData.data.results
            console.log(newData2)
            setData4(newData2)
        } catch (err) {
            setError(err.message)
        }
    }


    useEffect(() => {
        getTopRatedMovie(myApidata)
        getTopRatedMovie2(myApidata2)
        getTopRatedMovie4(myApidata6)

    }, [])

    return (
        <AppContext.Provider value={{ data1, data2, data4, locationData, setLocationData }}>
            {children}
        </AppContext.Provider>
    )
}
export { AppContext, Context }