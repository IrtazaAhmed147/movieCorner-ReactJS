import React, { useContext, useEffect } from 'react'
import '../CSS/Movie.css'
import Card from './Card'
import { useQuery } from '@tanstack/react-query'
import { SearchMovieApi } from '../Api/Api'
import { AppContext } from '../Context/Data'
import Loader from './Loader'

const Movielist = () => {

  const { input } = useContext(AppContext)




  const { setTitle, setYear, setIsMovie, setStar, setTotalRes } = useContext(AppContext)



  const { data, isFetching, refetch } = useQuery({
    queryKey: ['movie'],
    queryFn: () => SearchMovieApi(input),
    enabled: !!input.trim(),
    refetchOnWindowFocus: false,
  })

  useEffect(() => {
    if (data?.Search) setTotalRes(data.Search.length);
  }, [data, setTotalRes])
  
  useEffect(() => { if (input.trim()) refetch(); }, [input, refetch]);

  const getDetails = (title, year) => {
    setTitle(title)
    setYear(year)
    setIsMovie(true)
    setStar(0)
  }

  if (isFetching) return <div className='LoaderBox'><Loader /></div>;

  return (
    <div>

      {(!data || !input) ? (<h1 style={{ color: 'white', textAlign: 'center' }}>Search Movie</h1>) :
        data.Search?.map((movie) => {
          return <div key={movie.imdbID} onClick={() => getDetails(movie.Title, movie.Year)}>
            <Card {...movie} />
          </div>
        })}

      {input && data?.Error && <h1 style={{ color: 'white', textAlign: 'center' }}>Movie Not Found</h1>}


    </div>
  )
}

export default Movielist
