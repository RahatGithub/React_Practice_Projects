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
        <Link to="/add_book" className='navbar-links'>Add book</Link>
        <Link to="/add_student" className='navbar-links'>Add student</Link>
        <Link to="/dashboard" className='navbar-links'>Dashboard</Link>
        <Link to="/login" className='navbar-links'>Login</Link>
      </div>
    </nav>
  )
}