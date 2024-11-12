import React, { createContext, useContext, useState } from 'react'


export const AppContext = createContext()

export const AppProvider = ({children})=> {

    const [input, setInput] = useState('avengers')
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')


    return <AppContext.Provider value={{input, setInput, year, setYear, title, setTitle}}>
        {children}
    </AppContext.Provider>
}