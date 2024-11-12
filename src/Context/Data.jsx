import React, { createContext, useState } from 'react'


export const AppContext = createContext()

export const AppProvider = ({children})=> {

    const [input, setInput] = useState('')
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')

    const [isMovie, setIsMovie] = useState(false)


    return <AppContext.Provider value={{input, setInput, year, setYear, title, setTitle, isMovie, setIsMovie}}>
        {children}
    </AppContext.Provider>
}