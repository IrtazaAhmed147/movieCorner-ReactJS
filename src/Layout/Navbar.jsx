import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {



  return (
    <nav style={{ backgroundColor: 'rgb(32 31 31)', height: '10%' }} className='text-white flex p-2 gap-10 items-center' >
      <h1 className='text-xl'>MovieCorner</h1>
      <ul className='flex gap-4'>
        <li><Link to='/'>Movies</Link></li>
        <li><Link to='/yourmovies'>Watchlist</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
