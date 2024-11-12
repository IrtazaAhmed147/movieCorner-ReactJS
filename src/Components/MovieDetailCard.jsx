import React, { useState } from 'react'

const MovieDetailCard = (props) => {



    // console.log(props)
    const {Title, Released, Poster, Plot, imdbRating} = props
const [count, setCount] = useState(0)

    const handleMouseEnter = (index)=> {
        // console.log('asdf')
        setCount(index + 1)
    }
    const handleMouseLeave = ()=> {
        // console.log('dfbgd')
        setCount(0)
    }
    const handleStarClick = ()=> {
        console.log('asd')
    }

  return (
    <div style={{
        height: '100%',
        position: 'relative',
    }}>


        <div style={{
            display: 'flex',
            color: 'white',
            height: '250px'
        }}>
            <img width='40%' src={Poster} alt="" />
            <div style={{
                backgroundColor: '#343a40',
                width: '60%',
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
            padding: '4rem',
            gap: '2rem'
        }}>
            <div style={{
                backgroundColor: '#343a40',
                height: '50px',
                borderRadius: '10px',
                color: '#fcc419',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                gap: '5px',
                fontSize: '23px'
            }}>

                {/* <i className="fa-solid fa-star"></i> */}
                <div>

                {[...Array(10)].map((cur, index)=> {
                    
                    return <span key={index} onClick={handleStarClick} onMouseEnter={()=> handleMouseEnter(index)} onMouseLeave={()=> handleMouseLeave()}><i className={index < count ? "fa-solid fa-star" : "fa-regular fa-star"}></i> </span> 
                    
                })} 
                </div> <span style={{fontSize: '20px'}}>{count}</span>
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
