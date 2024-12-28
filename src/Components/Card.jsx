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

      <div className='w-48  p-2 bg-neutral-800 rounded-sm cursor-pointer hover:bg-neutral-700'>
        <img width='100%' style={{ height: '200px' }} src={Poster !== 'N/A' ? Poster : 'https://drive-in-theatre.netlify.app/movieImages/default-movie.png'} alt={Title} />
        <div className='flex gap-2 items-end flex-wrap'>
          <p className='text-white text-xl'>{Title}</p>
         
            <p className='text-neutral-500 text-sm'>{Year}</p>
         
        </div>
        <div>
          <p className='text-white text-sm'>Rating: {imdbRating}</p>
        </div>
      </div>
      
    </>
  );
};

export default Card
