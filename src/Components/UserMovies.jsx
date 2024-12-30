import React, { useContext, useEffect } from 'react'
import { AppContext } from '../Context/Data'
import Card from './Card'

const UserMovies = () => {


    const { listMovies, setListMovies } = useContext(AppContext)


    useEffect(() => {
        const savedMovies = localStorage.getItem('MoviesCorner')
        if (savedMovies) {
            setListMovies(JSON.parse(savedMovies))
        }
    }, [setListMovies])



    return (

        <div className='min-h-screen bg-neutral-800 p-2'>


            <div className='text-white flex flex-col gap-10'>
                <h1 className='text-5xl'>Your Watchlist</h1>

                <p className='flex gap-2'>
                    <lord-icon
                        src="https://cdn.lordicon.com/qfwgmyhc.json"
                        trigger="hover"
                        colors="primary:#ffffff,secondary:#08a88a"
                        style={{ width: '25px', height: '25px' }}>
                    </lord-icon>

                    {listMovies?.length} Movies</p>

            </div>
            <div className='flex gap-2 flex-wrap res-justify'>
                {listMovies?.map((movie) => {

                    return <Card key={movie.imdbID}  {...movie} />


                }
                )}
            </div >


        </div>
    )

}

export default UserMovies
