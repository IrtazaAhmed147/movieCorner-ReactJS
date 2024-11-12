import React, { useContext, useState } from 'react'
import { AppContext } from '../Context/Data'

const MovieDetailCard = (props) => {



    // console.log(props)
    const {Title, Released, Poster, Plot, imdbRating, Runtime, imdbID} = props
    const {star, setStar} = useContext(AppContext)
    const {listMovies, setListMovies} = useContext(AppContext)
const [count, setCount] = useState(0)
// const [star, setStar] = useState(0)

    const handleMouseEnter = (index)=> {
        setCount(index + 1)
    }
    const handleMouseLeave = ()=> {
        setCount(0)
    }
    const handleStarClick = (index)=> {
        console.log('asd')
        setStar(index + 1)
    }

    const handleList = (props)=> {
        console.log(props)
        setListMovies([{
            Runtime,
            Released,
            Title,
            Poster,
            imdbRating,
            imdbID,
            userRating: star,


        }, ...listMovies])
        console.log(listMovies)
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
            <div className={star ? 'adStarBox StarBox' : 'StarBox' }>

                {/* <i className="fa-solid fa-star"></i> */}
                <div style={{display: 'flex', alignItems: 'center', gap: '20px'}}>

                <div>

                {[...Array(10)].map((cur, index)=> {
                    
                    return <span key={index} onClick={()=> handleStarClick(index)} onMouseEnter={()=> handleMouseEnter(index)} onMouseLeave={()=> handleMouseLeave()}><i className={(index < (count || star))  ? "fa-solid fa-star" : "fa-regular fa-star"}></i> </span> 
                    
                })} 
                </div> 
                <span style={{fontSize: '20px'}}>{count || star}</span>

                    </div>
                    
            {star > 0 ? <button className='detailBtn' onClick={()=> handleList(props)}>Add to List</button> : ''}

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
