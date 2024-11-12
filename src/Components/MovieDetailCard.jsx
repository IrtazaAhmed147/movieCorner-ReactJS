import React from 'react'

const MovieDetailCard = (props) => {

    // console.log(props)
    const {Title, Released, Poster, Plot, imdbRating} = props
  return (
    <div style={{
        height: '100%',
    }}>
        <div style={{
            display: 'flex',
            color: 'white'
        }}>
            <img width='132px' src={Poster} alt="" />
            <div style={{
                backgroundColor: '#343a40',
                width: '100%',
                paddingLeft: '20px'
            }}>
                <h2>{Title}</h2>
                <p>{Released}</p>
                <p>⭐️ {imdbRating} Average Rating</p>
            </div>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            // alignItems: 'center',
            padding: '4rem',
            gap: '2rem'
            // justifyContent: 'space-between',
            // height: '100%'
        }}>
            <div style={{
                backgroundColor: '#343a40',
                height: '50px',
                borderRadius: '10px',
                color: 'yellow',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '5px',
                fontSize: '23px'
            }}>

                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>
                <span><i className="fa-regular fa-star"></i></span>

            </div>
            <p style={{
                color: 'white'
            }}>{Plot}</p>
            <button className='detailBtn'>Details</button>
        </div>
    </div>
  )
}

export default MovieDetailCard
