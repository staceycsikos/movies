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
    }
    getDetails();
  }, [movie_id])


  if (!movieDetails) return <h3>Loading...</h3>;

  return (
    <div>
      {
        (<div className='movies-details'>
          <h1>{movieDetails.title}</h1>
          <h3 className='description'>{movieDetails.overview}</h3>
          <img src={movieDetails.poster_path} alt={movieDetails.title} width="350px" height="500px"/>
          <h3>Release Date:{movieDetails.release_date}</h3>
        </div>
        )}
    </div>
  )
}
