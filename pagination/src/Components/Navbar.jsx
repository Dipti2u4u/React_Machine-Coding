import React from 'react'
import {Link} from 'react-router-dom'
import './Pagination.css'

const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <Link to = '/'>Big Basket</Link>
        <Link to = "/cart">Cart</Link>
    </div>
    </>
  )
}

export default Navbar