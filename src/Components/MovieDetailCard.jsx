import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/Data'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { specificMoveiApi } from '../Api/Api'
import Loader from './Loader'

const MovieDetailCard = () => {

    const { star, setStar, setListMovies, listMovies } = useContext(AppContext)

    const [year, setYear] = useState('')
    const [title, setTitle] = useState('')

    const [count, setCount] = useState(0)
    const [isAdded, setIsAdded] = useState(false)
    const [userRate, setUserRate] = useState(0)

    const { movieID } = useParams()


    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('MoviesCorner')) || []
        setListMovies(items)
    }, [setListMovies])

    useEffect(() => {
        const filterId = () => {
            const pos = movieID.indexOf('^', 0)
            setTitle(movieID.slice(0, pos))
            setYear(movieID.slice(pos + 1, movieID.length))
        }
        filterId()
    }, [movieID])


    const { data, isFetching } = useQuery({
        queryKey: ['specificMovie'],
        queryFn: () => specificMoveiApi(title, year),
        enabled: !!title && !!year,
        refetchOnWindowFocus: false,
    })

    console.log(data)


    useEffect(() => {
        const existingMovie = listMovies.find((movie) => movie.imdbID === data?.imdbID)

        if (existingMovie) {
            setIsAdded(true)
            setUserRate(existingMovie.userRating)
        } else {
            setIsAdded(false)
            setUserRate(0)
        }
    }, [data?.imdbID, listMovies])


    const handleMouseEnter = (index) => setCount(index + 1)
    const handleMouseLeave = () => setCount(0)
    const handleStarClick = (index) => setStar(index + 1)

    const handleList = () => {
        const newMovie = {
            Runtime: data.Runtime === "N/A" ? 0 : data.Runtime,
            Released: data.Released,
            Title: data.Title,
            Poster: data.Poster,
            imdbRating: data.imdbRating === "N/A" ? 0 : data.imdbRating,
            imdbID: data.imdbID,
            userRating: star,
        };

        setListMovies((prevMovies) => {
            const updatedMovies = [newMovie, ...prevMovies];
            localStorage.setItem('MoviesCorner', JSON.stringify(updatedMovies));
            return updatedMovies;
        });
    };

    if (isFetching) return <div className='h-screen bg-neutral-800 pt-10 flex items-center justify-center'> <Loader /> </div>

    return (

        <div style={{ minHeight: '90%' }} className='bg-neutral-800 pt-10'>
            {/* Movie Header */}
            <div className='flex text-white w-4/5 mx-auto h-96 res-flexwrap res-w-100 res-h-auto' >
                <div className='res-image-box'>
                    <img style={{ height: '400px', width: '267px' }} src={data?.Poster === 'N/A' ? 'https://drive-in-theatre.netlify.app/movieImages/default-movie.png' : data?.Poster} alt='' />
                </div>
                <div className='p-4 w-3/4 res-w-100 '>

                    <h1 className='text-5xl mb-8'>{data?.Title}</h1>
                    <div className='flex gap-3 border-b-2 border-neutral-600 text-sm text-neutral-300 mb-3'>
                        <p >Year: {data?.Released}</p>
                        <p >Runtime: {data?.Runtime}</p>
                        <p >Genre: {data?.Genre}</p>
                        <p >⭐️ Average Rating: {data?.imdbRating === "N/A" ? 0 : data?.imdbRating}</p>
                    </div>
                    <div className='text-white text-sm flex flex-col gap-2'>
                        <p >Plot: <span className='text-cyan-600'>{data?.Plot}</span> </p>
                        <p >Actors: <span className='text-cyan-600'>{data?.Actors}</span> </p>
                        <p >Directed By: <span className='text-cyan-600'>{data?.Director}</span> </p>
                    </div>
                    {!isAdded && (
                        <>
                            {/* Star Rating */}
                            <div className='flex items-center gap-4 mt-4'>
                                <div className='flex'>
                                    {[...Array(10)].map((_, index) => (
                                        <span className='flex items-center cursor-pointer' key={index} onClick={() => handleStarClick(index)}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}>
                                            {(index < (count || star)) ? <lord-icon
                                                src="https://cdn.lordicon.com/edplgash.json"
                                                trigger="hover"
                                                style={{ width: '25px', height: '25px' }}>
                                            </lord-icon> : <lord-icon
                                                src="https://cdn.lordicon.com/cvwrvyjv.json"
                                                trigger="hover"
                                                colors="primary:#e8e230,secondary:#08a88a"
                                                style={{ width: '25px', height: '25px' }}>
                                            </lord-icon>}
                                        </span>

                                    ))}
                                </div>
                                <span style={{ fontSize: '20px' }}>{count || star}</span>
                            </div>
                            {star > 0 && <button className='flex items-center gap-2 bg-green-700 border-2 border-green-900 p-2 rounded-md hover:bg-green-800' onClick={handleList}>

                                <lord-icon
                                    src="https://cdn.lordicon.com/oiiqgosg.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style={{ width: '25px', height: '25px' }}>
                                </lord-icon>
                                Add to List
                            </button>}
                        </>
                    )}
                    {isAdded && <p className='text-sm mt-3'>You have Rated the movie {userRate} ⭐️</p>}
                </div>

            </div>

        </div>
    );
}

export default MovieDetailCard
