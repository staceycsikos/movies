import { setSelectionRange } from '@testing-library/user-event/dist/utils'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Movie({modal, setModal}) {
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
      console.log(response.data[0])
      console.log(response.data[0].title)
      console.log(movieDetails.title)
    }
    getDetails();
  }, [movie_id])
  
  const trigger = () => {
    setModal(prev =>!prev)
  }
  if (!movieDetails) return <h3>Loading...</h3>;

  return (
    <div className='modal-container'>
      <div className='modal'>
        <span className="Close" onClick={() => trigger()}>&times;</span>
        {modal && movieDetails ? 
          <div>
            <h2>hi {movieDetails.title}</h2>
          </div>
        : null
      }
      </div>
    </div>
  )
}
