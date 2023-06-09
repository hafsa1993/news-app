import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

  return (
    <nav className='navbar'>
      <div className="btn-group">
        <Link to="/"><button className='btn-group-item' autoFocus>General</button></Link>
        <Link to="/sports"><button className='btn-group-item'>Sports</button></Link>
        <Link to="/business"><button className='btn-group-item'>Business</button></Link>
        <Link to="/science"><button className='btn-group-item'>Science</button></Link>
        <Link to="/technology"><button className='btn-group-item'>Technology</button></Link>
        <Link to="/health"><button className='btn-group-item'>Health</button></Link>
        <Link to="/entertainment"><button className='btn-group-item'>Entertainment</button></Link>
      </div>
    </nav>
  )
}
