import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/Data'

const MovieDetailCard = (props) => {

    const { Title, Released, Poster, Plot, imdbRating, Runtime, imdbID, Actors, Director, Genre } = props
    const { star, setStar, setListMovies, listMovies } = useContext(AppContext)

    const [count, setCount] = useState(0)
    const [isAdded, setIsAdded] = useState(false)
    const [userRate, setUserRate] = useState(0)


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
        <div style={{ height: '100%', position: 'relative' }}>
            {/* Movie Header */}
            <div style={{ display: 'flex', color: 'white' }}>
                <div>
                    <img width='143px' height='100%' src={Poster} alt={Title} />
                </div>
                <div style={{ backgroundColor: '#343a40', width: '100%', padding: '20px' }}>
                    <h2 className='movie-head'>{Title}</h2>
                    <p className='movie-info-text'>{Released} • {Runtime}</p>
                    <p className='movie-info-text'>{Genre}</p>
                    <p className='movie-info-text'>⭐️ {imdbRating === "N/A" ? 0 : imdbRating} Average Rating</p>
                </div>
            </div>

            <div className='detailBottomBox'>

                {/* User Rating Section */}
                <div className={star ? 'adStarBox StarBox' : 'StarBox'}>
                    {!isAdded && (
                        <div className='starMainBox' style={{ flexDirection: 'column' }}>
                            {/* Star Rating */}
                            <div className='starMainBox'>
                                <div>
                                    {[...Array(10)].map((_, index) => (
                                        <span key={index} onClick={() => handleStarClick(index)}
                                            onMouseEnter={() => handleMouseEnter(index)}
                                            onMouseLeave={handleMouseLeave}>
                                            <i className={(index < (count || star)) ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
                                        </span>
                                    ))}
                                </div>
                                <span style={{ fontSize: '20px' }}>{count || star}</span>
                            </div>
                            {star > 0 && <button className='detailBtn' onClick={handleList}>Add to List</button>}
                        </div>
                    )}
                    {isAdded && <p style={{ color: 'white' }}>You have Rated the movie {userRate} ⭐️</p>}
                </div>

                {/* Movie Details */}
                <p style={{ color: 'white' }}>{Plot}</p>
                <p style={{ color: 'white' }}>Actors: {Actors}</p>
                <p style={{ color: 'white' }}>Directed By: {Director}</p>
            </div>
        </div>
    );
}

export default MovieDetailCard
