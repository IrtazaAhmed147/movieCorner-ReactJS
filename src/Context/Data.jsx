import React, { createContext, useState } from 'react'


export const AppContext = createContext()

export const AppProvider = ({children})=> {

    const [input, setInput] = useState('')
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [star, setStar] = useState(0)
    const [listMovies, setListMovies] = useState([])
    const [imdbRating, setImdbRating] = useState(0)
    const [userRating, setUserRating] = useState(0)
    const [runTime, setRunTime] = useState(0)
    const [totalRes, setTotalRes] = useState(0)

    const [isMovie, setIsMovie] = useState(false)

    const deleteMovie = (id) => {
        const movies = JSON.parse(localStorage.getItem('movies')) || []
        const updatedMOvies = movies.filter((movie)=> movie.imdbID !== id)
        localStorage.setItem('movies', JSON.stringify(updatedMOvies))
        setListMovies(updatedMOvies)

        // localStorage.removeItem('movies');
        
      };

        


    return <AppContext.Provider value={{input, setInput, year, setYear, title, setTitle, isMovie, setIsMovie, star, setStar, listMovies, setListMovies, deleteMovie,  imdbRating, setImdbRating, userRating, setUserRating, runTime, setRunTime, totalRes, setTotalRes}}>
        {children}
    </AppContext.Provider>
}