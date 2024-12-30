import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/Data'
import { useParams } from 'react-router-dom'

const MovieDetailCard = (props) => {

    const { Title, Released, Poster, Plot, imdbRating, Runtime, imdbID, Actors, Director, Genre } = props
    const { star, setStar, setListMovies, listMovies } = useContext(AppContext)

    const [count, setCount] = useState(0)
    const [isAdded, setIsAdded] = useState(false)
    const [userRate, setUserRate] = useState(0)

    const param = useParams()
    console.log(param)


    useEffect(() => {
        const existingMovie = listMovies.find((movie) => movie.imdbID === imdbID)
        if (existingMovie) {
            setIsAdded(true)
            setUserRate(existingMovie.userRating)
        } else {
            setIsAdded(false)
            setUserRate(0)
        }
    }, [imdbID, listMovies])


    const handleMouseEnter = (index) => setCount(index + 1)
    const handleMouseLeave = () => setCount(0)
    const handleStarClick = (index) => setStar(index + 1)

    const handleList = () => {
        const newMovie = {
            Runtime: Runtime === "N/A" ? 0 : Runtime,
            Released,
            Title,
            Poster,
            imdbRating: imdbRating === "N/A" ? 0 : imdbRating,
            imdbID,
            userRating: star,
        };

        setListMovies((prevMovies) => {
            const updatedMovies = [newMovie, ...prevMovies];
            localStorage.setItem('movies', JSON.stringify(updatedMovies)); // Update localStorage after state
            // console.log(localStorage)
            return updatedMovies;
        });

        console.log(listMovies);
    };


    return (
        // <div style={{ height: '100%', position: 'relative' }}>
        //     {/* Movie Header */}
        //     <div style={{ display: 'flex', color: 'white' }}>
        //         <div>
        //             <img width='143px' height='100%' src={Poster} alt={Title} />
        //         </div>
        //         <div style={{ backgroundColor: '#343a40', width: '100%', padding: '20px' }}>
        //             <h2 className='movie-head'>{Title}</h2>
        //             <p className='movie-info-text'>{Released} • {Runtime}</p>
        //             <p className='movie-info-text'>{Genre}</p>
        //             <p className='movie-info-text'>⭐️ {imdbRating === "N/A" ? 0 : imdbRating} Average Rating</p>
        //         </div>
        //     </div>

        //     <div className='detailBottomBox'>

        //         {/* User Rating Section */}
        //         <div className={star ? 'adStarBox StarBox' : 'StarBox'}>
        //             {!isAdded && (
        //                 <div className='starMainBox' style={{ flexDirection: 'column' }}>
        //                     {/* Star Rating */}
        //                     <div className='starMainBox'>
        //                         <div>
        //                             {[...Array(10)].map((_, index) => (
        //                                 <span key={index} onClick={() => handleStarClick(index)}
        //                                     onMouseEnter={() => handleMouseEnter(index)}
        //                                     onMouseLeave={handleMouseLeave}>
        //                                     <i className={(index < (count || star)) ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
        //                                 </span>
        //                             ))}
        //                         </div>
        //                         <span style={{ fontSize: '20px' }}>{count || star}</span>
        //                     </div>
        //                     {star > 0 && <button className='detailBtn' onClick={handleList}>Add to List</button>}
        //                 </div>
        //             )}
        //             {isAdded && <p style={{ color: 'white' }}>You have Rated the movie {userRate} ⭐️</p>}
        //         </div>

        //         {/* Movie Details */}
        //         <p style={{ color: 'white' }}>{Plot}</p>
        //         <p style={{ color: 'white' }}>Actors: {Actors}</p>
        //         <p style={{ color: 'white' }}>Directed By: {Director}</p>
        //     </div>
        // </div>
        <div className='min-h-screen bg-neutral-800 pt-10'>
            {/* Movie Header */}
            <div className='flex text-white w-3/4 mx-auto h-96 ' >
                <div className='w-2/6 h-full'>
                    <img style={{ height: '100%' }} width='100%' src='https://drive-in-theatre.netlify.app/movieImages/default-movie.png' alt='' />
                </div>
                <div className='p-4'>

                    <h1 className='text-5xl mb-8'>Mufasa</h1>
                    <div className='flex gap-3 border-b-2 border-neutral-600 text-sm text-neutral-300 mb-3'>
                        <p className=''>Year: 2024</p>
                        <p className=''>Runtime: 2:30</p>
                        <p className=''>Genre: Action</p>
                        <p className=''>⭐️ {imdbRating === "N/A" ? 0 : imdbRating} Average Rating: 4.5</p>
                    </div>
                    <div className='text-white text-sm flex flex-col gap-2'>
                        <p >Plot: <span className='text-cyan-600'>dgfdfsg</span> </p>
                        <p >Actors: <span className='text-cyan-600'>Khatarnak</span> </p>
                        <p >Directed By: <span className='text-cyan-600'>Champ</span> </p>
                    </div>
                    {!isAdded && (
                        <div className='' >
                            {/* Star Rating */}
                            <div className='starMainBox'>
                                <div>
                                    {[...Array(10)].map((_, index) => (
                                        <span key={index} onClick={() => handleStarClick(index)}
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
                            {star > 0 && <button className='' onClick={handleList}>
                                <lord-icon
                                    src="https://cdn.lordicon.com/oiiqgosg.json"
                                    trigger="hover"
                                    colors="primary:#ffffff"
                                    style={{width:'25px' ,height:'25px'}}>
                                </lord-icon>
                            </button>}
                        </div>
                    )}
                </div>
         


            </div>

            <div className=''>

                {/* User Rating Section */}
                <div className={star  && 'adStarBox '}>
                   
                    {isAdded && <p style={{ color: 'white' }}>You have Rated the movie {userRate} ⭐️</p>}
                </div>


            </div>
        </div>
    );
}

export default MovieDetailCard
