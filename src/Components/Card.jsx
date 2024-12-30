import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'

const Card = ({ Poster, Title, Year, imdbRating, userRating, Runtime, imdbID }) => {
  const { deleteMovie } = useContext(AppContext);

  console.log(Poster)
  return (
    <>
      {/* <div className='movieBox'>
      <img width='80px' src={Poster} alt={Title} />
      <div style={{ fontSize: '18px', padding: '10px 0px' }}>
        <p>{Title}</p>
        <div>
          {Year ? <span> 🗓 {Year} </span> : <span>⭐️ {imdbRating} 🌟 {userRating} ⏳ {Runtime}</span>}
        </div>
      </div>
      {!Year && <button className='deleteBtn' onClick={() => deleteMovie(imdbID)}>X</button>}
    </div> */}

      {/* <div className='w-56  p-2 bg-neutral-800 rounded-sm cursor-pointer hover:bg-neutral-700'>
        <img width='100%' style={{ height: '200px' }} src={Poster !== 'N/A' ? Poster : 'https://drive-in-theatre.netlify.app/movieImages/default-movie.png'} alt={Title} />
        <div className='flex items-end flex-wrap gap-2 mt-1'>
          <p className='text-white text-base leading-tight'>{Title}</p>
         
            <p className='text-neutral-500 text-sm'>{Year}</p>
         
        </div>
        <div>
          <p className='text-white text-sm'>Rating: {imdbRating}</p>
        </div>
      </div> */}
      <div className='w-56  p-2 bg-neutral-800 rounded-sm cursor-pointer hover:bg-neutral-700'>
        <img width='100%' style={{ height: '200px' }} src='https://drive-in-theatre.netlify.app/movieImages/default-movie.png' alt='' />
        <div className='flex items-end flex-wrap gap-2 mt-1'>
          <p className='text-white text-base leading-tight'>Mufasa</p>
         
            <p className='text-neutral-500 text-sm'>2024</p>
         
        </div>
        <div>
          <p className='text-white text-sm'>Rating: 2.4</p>
        </div>
      </div>
      
    </>
  );
};

export default Card
