import React, { useContext, useEffect } from 'react'
import '../CSS/Movie.css'
import Card from './Card'
import { useQuery } from '@tanstack/react-query'
import { SearchMovieApi } from '../Api/Api'
import { AppContext } from '../Context/Data'

const Movielist = () => {

  const {input} = useContext(AppContext)
  // console.log(input)
  
  const {data, isLoading, error, isError, refetch} = useQuery({
    queryKey: ['movie'],
    queryFn: ()=> SearchMovieApi(input),
    enabled: !!input,
})

useEffect(()=> {
  if(input) {
    refetch()
  }
})
// console.log(data)
// console.log(error)

// if(isError) return <h1>Movie not found</h1>
if (data) {
  console.log(data.Error)
}
if(isLoading) return <h1>Loading...</h1>
  return (
    <div className='Box'>

       {data && data.Search?.map((movie)=> {
        return <Card key={movie.imdbID} {...movie}/>
       })} 

       {data.Error && <p style={{
        color: 'white'
       }}>{data.Error}</p> }
        
    </div>
  )
}

export default Movielist
