import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-left'>
        <span className='navbar-brand'>Book Store</span>
      </div>
      <div className='navbar-right'>
        <Link to="/" className='navbar-links'>Home</Link>
        <Link to="/books" className='navbar-links'>Books</Link>
        <Link to="/login" className='navbar-links'>Login</Link>
      </div>
    </nav>
  )
}