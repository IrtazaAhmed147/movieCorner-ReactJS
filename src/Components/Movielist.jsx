import React, { useContext, useEffect, useRef } from 'react'

import Card from './Card'
import { useQuery } from '@tanstack/react-query'
import { SearchMovieApi } from '../Api/Api'
import { AppContext } from '../Context/Data'
import Loader from './Loader'
import { Link } from 'react-router-dom'

const Movielist = () => {

  const userInput = useRef('')
  const { input, setInput, setTitle, setYear, setIsMovie, setStar, setTotalRes } = useContext(AppContext)




  const { data, isFetching, refetch } = useQuery({
    queryKey: ['movie'],
    queryFn: () => SearchMovieApi(input),
    enabled: !!input.trim(),
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data?.Search) setTotalRes(data.Search.length);
  }, [data, setTotalRes, input])

  useEffect(() => { if (input.trim()) refetch(); }, [input, refetch]);

  const getDetails = (title, year) => {

    setTitle(title)
    setYear(year)
    setIsMovie(true)
    setStar(0)
  }

  const handleSubmit = () => {
    setInput(userInput.current)
  }

  return (
    <div className='bg-neutral-900	 min-h-screen p-6'>
      <h1 className='text-white text-3xl mb-3'>Search Movie</h1>
      
        <form className='flex' onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>

          <input onChange={(e) => { userInput.current = e.target.value }} className='text-black rounded-xl outline-none mr-2 p-2 w-96 border-solid border-2 border-red-900' type="search" />
          <button className='bg-red-600 border-solid border-2 border-red-900 px-3 py-2 rounded-xl  text-white flex items-center justify-center gap-2 hover:bg-red-700' type='submit'>
            <lord-icon
              src="https://cdn.lordicon.com/fkdzyfle.json"
              colors="primary:#ffffff"
              trigger="hover"
              style={{ width: '25px', height: '25px' }}>
            </lord-icon>
            Search</button>
        </form>
      


      <div className='flex gap-3 flex-wrap mt-4 '>

        {isFetching && <div className=' mt-5  m-auto'><Loader /></div>}

        {!isFetching && data?.Search?.map((movie) => {
          return <div key={movie.imdbID} onClick={() => getDetails(movie.Title, movie.Year)}>
            <Link to={`/movie/${movie.Title}^${movie.Year}`}>
              <Card  {...movie} />
            </Link>
          </div>
        })}
      </div>

      {input && data?.Error && <h1 style={{ color: 'white', textAlign: 'center' }}>Movie Not Found</h1>}


    </div>


  )
}

export default Movielist
