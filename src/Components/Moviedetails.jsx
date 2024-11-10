import React from 'react'
import '../CSS/Movie.css'

const Moviedetails = () => {
  return (
    <div className='Box'>
        <div style={{display: 'block'}} className='movieBox WatchMoviesBox'>
            <p style={{fontSize: '20px'}}>MOVIES YOU WATCHED</p>
            <div  className='watchedDetail'>
              <p>#️⃣ 0 Movies</p>
              <p>⭐️ 0.00</p>
              <p>🌟 0.00</p>
              <p>⏳ 0 min</p>
            </div>
        </div>
    </div>
  )
}

export default Moviedetails
