import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'

const Card = ({ Poster, Title, Year, imdbRating, userRating, Runtime, imdbID }) => {
  const { deleteMovie } = useContext(AppContext);

  return (
    <div className='movieBox'>
      <img width='80px' src={Poster} alt={Title} />
      <div style={{ fontSize: '18px', padding: '10px 0px' }}>
        <p>{Title}</p>
        <div>
          {Year ? <span> 🗓 {Year} </span> : <span>⭐️ {imdbRating} 🌟 {userRating} ⏳ {Runtime}</span>}
        </div>
      </div>
      {!Year && <button className='deleteBtn' onClick={() => deleteMovie(imdbID)}>X</button>}
    </div>
  );
};

export default Card
