import React, { useEffect, useState } from 'react'

export default function AllMovies({ data }) {
  const [organizedMovies, setOrganizedMovies] = useState([])
  
  //function allows for alphabetical order:
  const propComparator = (propName) =>
  (a, b) => a[propName].toLowerCase() == b[propName].toLowerCase() ? 0 : a[propName].toLowerCase() < b[propName].toLowerCase() ? -1 : 1
  
  useEffect(() => {
    // console.log(data)
    data.sort(propComparator(`title`)).map((data) => setOrganizedMovies(data), console.log(data))
  }, [data])
 
  return (
    <div>
      <h1>All Movies</h1>
      <div className='movie-name-container'>
        {organizedMovies.map((data) => (
          <div>
            <button>{data.title}</button>
          </div>
        ))}

      </div>
    </div>
  )
}
