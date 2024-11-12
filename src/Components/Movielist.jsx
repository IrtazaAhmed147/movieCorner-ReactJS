import React, { useContext, useEffect } from 'react'
import '../CSS/Movie.css'
import Card from './Card'
import { useQuery } from '@tanstack/react-query'
import { SearchMovieApi } from '../Api/Api'
import { AppContext } from '../Context/Data'

const Movielist = () => {

  const {input} = useContext(AppContext)
  // console.log(input)
  
  const {data, isLoading, refetch} = useQuery({
    queryKey: ['movie'],
    queryFn: ()=> SearchMovieApi(input),
    enabled: !!input.trim(),
})

useEffect(()=> {
  if(input.trim()) {
    refetch()
  }
})
// console.log(data)
// console.log(error)

// if(isError) return <h1>Movie not found</h1>
// console.log(data)
// if (!data) {
//   return <h1>Search movie</h1>
// }
// if(isLoading) return 
  return (
    <div className='Box'>

    {isLoading && <h1>Loading...</h1>}
      {!data && <h1 style={{color: 'white', textAlign: 'center'}}>Search Movie</h1>}

       {data && data.Search?.map((movie)=> {
        return <Card key={movie.imdbID} {...movie}/>
       })} 

       {data && data.Error && <h1 style={{color: 'white', textAlign: 'center'}}>Movie Not Found</h1>}
       {/* {data && data.Error === 'Incorrect IMDb ID.' && <h1 style={{color: 'white', textAlign: 'center'}}>Search Movie</h1>} */}
        
    </div>
  )
}

export default Movielist
