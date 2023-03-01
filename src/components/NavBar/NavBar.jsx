import React from 'react'
import './navBar.css'

export default function NavBar() {
    return (
        <div className='cont-nav'>
        <div className='cont-nav'>
        {/* <div className={`nav_items ${isOpen && "open"}`}> */}
          <a href="#">Home</a>
          <a href="#">Read</a>
          <a href="#">Register</a>
          <a href="#">Login</a>
        {/* </div> */}
        </div>
        </div>
    )
}