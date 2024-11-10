import React from 'react'

const Card = () => {
  return (
    <div className='movieBox'>
            <img width='50px' src="https://m.media-amazon.com/images/M/MV5BMjQzZDExZDEtYjAxYy00ZGVhLWE4YWItNTVkZjA5ZjVjZWM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="" />
            <div style={{
              fontSize: '18px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '10px 0px'
            }}>
              <p >Movie</p>
              <div>

              <span>🗓 </span>
              <span>2024-11-10</span>
              </div>

            </div>
        </div>
  )
}

export default Card
