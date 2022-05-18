import { Link } from "react-router-dom"
import { useState } from "react";
import "./global.css"
import Movie from "./Movie";

export default function Group({showList, data}) {
  const [modal, setModal] = useState(false)
  const [movie, setMovie] = useState("")
  
  const Toggle = () => setModal(!modal);

  const handleChange = (event) => {
    // let search = event.target.value.toUpperCase()
    // console.log(search)
    data.map((movie) => {
      // movie.title.toUpperCase()
      // console.log(movie.title.toUpperCase())
      if (movie.title.toUpperCase() === event.target.value.toUpperCase()) { 
        setMovie(movie)
      }
    })
  }

  return <div>{showList ? movie ?
    <div className="list-container">
      <Link to={`/all-movies/${movie.id}`}>
        <button className="one-movie" onClick={() => Toggle()}>{movie.title}</button>
      </Link>
    </div>
    :
    <div> 
      <ul>
        <input type='text' placeholder='Search for Movie' onChange={handleChange}>
        
        </input>
        {data.map((movie) => {
          return (
            
            <li>
            <Link to={`/all-movies/${movie.id}`}>
              <button onClick={() => Toggle()}>{movie.title}</button>
            </Link> 
            </li>
          )  
        })}
      </ul>
    </div> : null}</div>
  
}