import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='navList'>
        <h1>Pet Shelter</h1>
        <Link to={"/"}>back to home</Link>
    </div>
  )
}

export default Nav