import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'
import { Link } from 'react-router-dom';

const Card = ({ Poster, Title, Released,  userRating, imdbID, Year }) => {
  const { deleteMovie } = useContext(AppContext);

  const handleDelete = ()=> {
    const userConfirmed = window.confirm("Are you sure you want to remove this movie from your Watchlist?");
    if (userConfirmed) {
      deleteMovie(imdbID)
    } 
  }

  return (
    <>
     

      <div className='w-56  p-2 bg-neutral-800 rounded-sm cursor-pointer hover:bg-neutral-700 relative'>
        <img width='100%' style={{ height: '200px' }} src={Poster !== 'N/A' ? Poster : 'https://drive-in-theatre.netlify.app/movieImages/default-movie.png'} alt={Title} />
        

          <div className='mt-1'>
           {Released && <Link to={`/movie/${Title}^${Released?.slice(7)}`}>
            <p className='text-white text-base leading-tight'>{Title}</p>
            </Link>}
           {!Released && <p className='text-white text-base leading-tight'>{Title}</p>}
            <p className='text-neutral-500 text-sm'>{Released ? Released : Year}</p>

          </div>
          
            {userRating && <button className='mt-1 absolute top-2 right-2 z-10' onClick={handleDelete}>
              <lord-icon
                src="https://cdn.lordicon.com/oiiqgosg.json"
                trigger="hover"
                colors="primary:#fff"
                style={{ width: '40px', height: '40px' }}>
              </lord-icon>
            </button>}
         
        </div>
   


    </>
  );
};

export default Card
