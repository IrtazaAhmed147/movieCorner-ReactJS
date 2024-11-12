import React, { useContext, useState } from 'react'
import '../CSS/Navbar.css'
import { useQuery } from '@tanstack/react-query'
import { SearchMovieApi } from '../Api/Api'
import { AppContext } from '../Context/Data'

const Navbar = () => {

  // const [input, setInput] = useState('')

  const {input, setInput} = useContext(AppContext)
  // console.log(input)
  // const { data, isLoading, refetch } = useQuery({
  //   queryKey: ['movie', input],
  //   queryFn: () => SearchMovieApi(input),
  //   enabled: !!input, // Only run the query if input is not empty
  // })

  // const handleInputChange = (e) => {
  //   setInput(e.target.value)
  //   refetch() // Refetch the data whenever input changes
  // }

// if(isLoading) return <h1>Loading...</h1>


  return (
    <div className='navbar'>
      <h1 style={{color: '#dee2e6'}}>usePopcorn</h1>
      <input onChange={(e)=> setInput(e.target.value)}  className='nav-input' type="text" />
      <p className='foundRes'>Found <b>  </b> results</p>
    </div>
  )
}

export default Navbar
