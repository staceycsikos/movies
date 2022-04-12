import React, { useEffect, useState } from 'react'
import Group from './Group'
import Home from './Home'

export default function AllMovies({ data }) {
  const [organizedMovies, setOrganizedMovies] = useState([])
  const [showList, setShowList] = useState(false)
  const [movies, setMovies] = useState([])
  
  //function allows for alphabetical order:
  const propComparator = (propName) =>
  (a, b) => a[propName].toLowerCase() == b[propName].toLowerCase() ? 0 : a[propName].toLowerCase() < b[propName].toLowerCase() ? -1 : 1

  
  useEffect(() => {
  
    data.sort(propComparator(`title`))

    let grouped = data.reduce((r, e) => {
      // get first letter of name of current element
      let group = e.title[0];
      // if there is no property in accumulator with this letter create it
      if(!r[group]) r[group] = {group, children: [e]}
      // if there is push current element to children array for that letter
      else r[group].children.push(e);
      // return accumulator
      return r;
    }, {})

    let result = Object.values(grouped)
    setOrganizedMovies(result)
    // console.log(result)


  }, [data])

  const listAppear = (children) => {
    setShowList(prev => !prev)
    setMovies(children)
  }
  
  

 
  return (
    <div>
      <h2>All Movies</h2>
      <div className='btn-container'>
      {organizedMovies.map((movie) => (
        <div className='category-btn'>
          <button onClick={() => {
            listAppear(movie.children)
          }}>{movie.group}</button>
        </div> 
      ))}
      <Group
        showList={showList}
        data={movies}
        setShowList= {setShowList} />
      </div>
     
    </div>
  )
}