import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <header>
        <h1 className='title'>Movies</h1>
        <nav className='btn-container'>
          <Link to="/"><button>Home</button></Link>
          <Link to="/all-movies"><button>All Movies</button></Link>
        </nav>
      </header>
    </div>
  )
}
