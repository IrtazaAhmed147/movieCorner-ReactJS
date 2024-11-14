import React, { useContext} from 'react'
import '../CSS/Navbar.css'
import { AppContext } from '../Context/Data'

const Navbar = () => {

  const {setInput, totalRes} = useContext(AppContext)


  return (
    <div className='navbar'>
      <h1 style={{color: '#dee2e6'}}>usePopcorn</h1>
      <input onChange={(e)=> setInput(e.target.value)}  className='nav-input' type="text" />
      <p className='foundRes'>Found <b> {totalRes} </b> results</p>
    </div>
  )
}

export default Navbar
