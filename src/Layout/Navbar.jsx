import React, { useContext} from 'react'
import '../CSS/Navbar.css'
import '../index.css'
import { AppContext } from '../Context/Data'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {setInput, totalRes} = useContext(AppContext)


  return (
    <nav className='h-1/6 bg-slate-900 text-white flex p-2 gap-10 items-center' >
      <h1 className='text-xl'>MovieCorner</h1>
      <ul className='flex gap-4'>
        <li><Link to='/'>Movies</Link></li>
        <li><Link to='/yourmovies'>Your Movies</Link></li>
      </ul>
      {/* <input onChange={(e)=> setInput(e.target.value)}  className='nav-input' type="text" /> */}
      {/* <p className='foundRes'>Found <b> {totalRes} </b> results</p> */}
    </nav>
  )
}

export default Navbar
