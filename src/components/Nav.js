import React from 'react'
import { Link } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
  return (
    <div className="sf-nav d-flex flex-column align-items-center">
      <div>
      <h1>Trade Lace</h1>
      </div>
      <div>
        <Link to='/create'>Create</Link>
        <span className="mx-2">|</span>
        <Link to='/about'>About</Link>
      </div>
    </div>


  
  )
}

export default Nav