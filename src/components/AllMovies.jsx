import React, { useEffect, useState } from 'react'
import Group from './Group'
import "./global.css"
import { Route, Routes } from 'react-router-dom'
import Movie from './Movie'

export default function AllMovies({ data }) {
  const [organizedMovies, setOrganizedMovies] = useState([])
  const [showList, setShowList] = useState(false)
  const [movies, setMovies] = useState([])
  
  //function allows for alphabetical order:
  const propComparator = (propName) =>
  (a, b) => a[propName].toLowerCase() == b[propName].toLowerCase() ? 0 : a[propName].toLowerCase() < b[propName].toLowerCase() ? -1 : 1

  
  useEffect(() => {
  
    data.sort(propComparator(`title`))

    //sets group base on first character of letter 
    let grouped = data.reduce((r, e) => {
      let group = e.title[0];
      if(!r[group]) r[group] = {group, children: [e]}
      else r[group].children.push(e);
      return r;
    }, {})

    let result = Object.values(grouped)
    setOrganizedMovies(result)
    // console.log(result)


  }, [data])

  const listAppear = (children) => {
    setShowList(!showList)
    setMovies(children)
  }
  

  return (
    <div>
      <div className='top'>
        <h2>All Movies</h2>
        <div className='btn-container'>
        {organizedMovies.map((movie) => (
          <div className='category-btn'>
            <button onClick={() => {
              listAppear(movie.children)
            }}>{movie.group}</button>
          </div> 
        ))}
      </div>
      <Group
        showList={showList}
        data={movies}
        setShowList= {setShowList} />
      </div>
     
    </div>
  )
}