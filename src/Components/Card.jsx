import React, { useContext } from 'react'
import { AppContext } from '../Context/Data'

const Card = (props) => {
  
  const {setTitle, setYear} = useContext(AppContext)

  const getDetails = (title, year)=> {
    setTitle(title)
    setYear(year)
    console.log(year)
  }
  return (
    <div className='movieBox' onClick={()=> getDetails(props.Title, props.Year)}>
            <img width='50px' src={props.Poster} alt="" />
            <div style={{
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '10px 0px'
            }}>
              <p >{props.Title}</p>
              <div>

              <span>🗓 </span>
              <span>{props.Year}</span>
              </div>

            </div>
        </div>
  )
}

export default Card
