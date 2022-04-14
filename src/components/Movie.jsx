import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Movie({show}) {
  const [movieDetails, setMovieDetails] = useState([])

  let { movie_id } = useParams()  
  
  
  useEffect(() => {
    const getDetails = async()=>{
      const response = await axios.get(
        `https://ga-movies-api.herokuapp.com/movies/${movie_id}`,
        {
          mode: "no-cors",
        }
      );
      setMovieDetails(response.data[0])
      console.log(response.data)
      console.log(response.data[0].title)
      console.log(movieDetails.title)
    }
    getDetails();
  }, [movie_id])
  
  if (!movieDetails) return <h3>Loading...</h3>;

  return (
    <div>
      {
        (<div>
          <h2>{movieDetails.title}</h2>
          <button>description</button>
          <h3>Genre(s):{movieDetails.genres}</h3>
          <img src={movieDetails.poster_path} width="350px" height="500px"/>
          <h3>release Date:{movieDetails.release_date}</h3>
          
          </div>)
       
      }
    </div>
  )
}
