import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'

const Card = (props) => {

  const { deleteMovie } = useContext(AppContext);

  const handleDeleteBtn = (id) => {
    deleteMovie(id);
  };
  return (
    <div className='movieBox'>
      <img width='80px' src={props.Poster} alt="" />
      <div style={{
        fontSize: '18px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '10px 0px'
      }}>
        <p >{props.Title}</p>
        <div>

          <span> 🗓 {props.Year} </span>

          <span>{props.imdbRating} {props.userRating}  {props.Runtime} </span>

        </div>



      </div>

        {!props.Year && <button className='deleteBtn' onClick={()=> handleDeleteBtn(props.imdbID)}>X</button>}
    </div>
  )
}

export default Card
