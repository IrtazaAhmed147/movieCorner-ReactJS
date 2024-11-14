import React, { useContext, useEffect } from 'react'
import '../CSS/Movie.css'
import MovieDetailCard from './MovieDetailCard'
import { useQuery } from '@tanstack/react-query'
import { specificMoveiApi } from '../Api/Api'
import { AppContext } from '../Context/Data'
import Card from './Card'
import Loader from './Loader'

const Moviedetails = () => {

  const { title, year, isMovie, setIsMovie, listMovies, imdbRating, userRating, runTime,setImdbRating, setUserRating, setRunTime  , setListMovies} = useContext(AppContext)



  const { data, refetch, isFetching } = useQuery({
    queryKey: ['specificMovie'],
    queryFn: () => specificMoveiApi(title, year),
    enabled: !!title && !!year,
    refetchOnWindowFocus: false,
  })



  
  
  
  useEffect(()=> {
    const savedMovies = localStorage.getItem('movies')
    if(savedMovies) {
      setListMovies(JSON.parse(savedMovies))
    }
  },[setListMovies])
  
  useEffect(() => {
    const [totalRating, totalUserRating, totalRunTime] = listMovies.reduce(
      (acc, { imdbRating, userRating, Runtime }) => [
        acc[0] + parseFloat(imdbRating),
        acc[1] + parseFloat(userRating),
        acc[2] + parseFloat(Runtime),
      ],
      [0, 0, 0]
    );

    setImdbRating(totalRating / listMovies.length || 0);
    setUserRating(totalUserRating / listMovies.length || 0);
    setRunTime(totalRunTime / listMovies.length || 0);
  }, [listMovies, setImdbRating, setUserRating, setRunTime]);
  // const getItem = localStorage.getItem('movies')
  // const localStorageMovies = getItem ? JSON.parse(getItem) : null;
  // console.log(movieObject)
  useEffect(() => {
    if (title && year) {
      refetch(); // Manually refetch when title or year changes
    }
  }, [title, year, refetch]);
  
  if (isFetching) return <div className='LoaderBox'><Loader /></div>;

  return (

    <div>
      {isMovie && <div className='backBtn' onClick={() => setIsMovie(false)}>&larr;</div>}
      {!isMovie ? ( <div>
        <div style={{ display: 'block' }}  className='WatchMoviesBox'>
          <p style={{ fontSize: '20px', fontWeight: '600' }}>MOVIES YOU WATCHED</p>
          <div className='watchedDetail'>
            <p><i className="fa-solid fa-film"></i> {listMovies.length} Movies</p>
            <p>⭐️ {imdbRating.toFixed(1)}</p>
            <p>🌟 {userRating.toFixed(1)}</p>
            <p>⏳ {runTime.toFixed(0)} min</p>
          </div>
        </div>
          {listMovies?.map((movie) => <Card key={movie.imdbID} {...movie} />)}
          </div>
      ) : data?.Response !== 'False' && <MovieDetailCard {...data} />}

    </div>
  )
}

export default Moviedetails
