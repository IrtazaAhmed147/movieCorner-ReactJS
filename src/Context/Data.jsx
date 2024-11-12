import React, { createContext, useState } from 'react'


export const AppContext = createContext()

export const AppProvider = ({children})=> {

    const [input, setInput] = useState('')
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [star, setStar] = useState(0)
    const [listMovies, setListMovies] = useState([])

    const [isMovie, setIsMovie] = useState(false)

    const deleteMovie = (id) => {
        setListMovies((prevMovies) => prevMovies.filter((movie) => movie.imdbID !== id));
      };


    return <AppContext.Provider value={{input, setInput, year, setYear, title, setTitle, isMovie, setIsMovie, star, setStar, listMovies, setListMovies, deleteMovie}}>
        {children}
    </AppContext.Provider>
}