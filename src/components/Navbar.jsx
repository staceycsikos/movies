import { Link } from 'react-router-dom'
import "./global.css"

export default function Navbar() {
  return (
    <div>
      <header>
        <h1 className='title'>7k Movies</h1>
        <nav className='nav-container'>
          <Link to="/"><button>Home</button></Link>
          <Link to="/all-movies"><button>All Movies</button></Link>
        </nav>
      </header>
    </div>
  )
}
