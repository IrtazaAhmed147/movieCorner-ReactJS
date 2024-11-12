import React, { useContext, useEffect } from 'react'
import '../CSS/Movie.css'
import MovieDetailCard from './MovieDetailCard'
import { useQuery } from '@tanstack/react-query'
import { specificMoveiApi } from '../Api/Api'
import { AppContext } from '../Context/Data'

const Moviedetails = () => {

  const {title, year}= useContext(AppContext)


  const {data, isLoading,  refetch} = useQuery({
    queryKey: ['specificMovie'],
    queryFn: ()=> specificMoveiApi(title, year),
  })

    console.log(data)
    useEffect(() => {
      if (title && year) {
        refetch(); // Manually refetch when title or year changes
      }
    }, [title, year, refetch]);
  // setInterval(() => {
    
  // }, 1000);
  if(isLoading) return <h1>Loading</h1>
  if(!data) return <h1>who are you</h1>

  return (
    <div className='Box'>
        {/* <div style={{display: 'block'}} className='movieBox WatchMoviesBox'>
            <p style={{fontSize: '20px'}}>MOVIES YOU WATCHED</p>
            <div  className='watchedDetail'>
              <p>#️⃣ 0 Movies</p>
              <p>⭐️ 0.00</p>
              <p>🌟 0.00</p>
              <p>⏳ 0 min</p>
            </div>
        </div> */}

          <MovieDetailCard {...data}/>

    </div>
  )
}

export default Moviedetails
