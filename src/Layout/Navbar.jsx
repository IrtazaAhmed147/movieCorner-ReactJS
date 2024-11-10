import React from 'react'
import '../CSS/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 style={{color: '#dee2e6'}}>usePopcorn</h1>
      <input className='nav-input' type="text" />
      <p className='foundRes'>Found <b> 20 </b> results</p>
    </div>
  )
}

export default Navbar
