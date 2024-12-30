import React, { createContext, useState } from 'react'


export const AppContext = createContext()

export const AppProvider = ({ children }) => {

    const [input, setInput] = useState('')
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [star, setStar] = useState(0)
    const [listMovies, setListMovies] = useState([])
    const [totalRes, setTotalRes] = useState(0)
    const [isMovie, setIsMovie] = useState(false)

    const deleteMovie = (id) => {
        const movies = JSON.parse(localStorage.getItem('MoviesCorner')) || []
        const updatedMovies = movies.filter((movie) => movie.imdbID !== id)
        localStorage.setItem('MoviesCorner', JSON.stringify(updatedMovies))
        setListMovies(updatedMovies)

    };




    return <AppContext.Provider value={{
        input,
        setInput,
        year,
        setYear,
        title,
        setTitle,
        isMovie,
        setIsMovie,
        star,
        setStar,
        listMovies,
        setListMovies,
        deleteMovie,
        totalRes,
        setTotalRes

    }}>
        {children}
    </AppContext.Provider>
}