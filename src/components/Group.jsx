import React, { useState } from 'react'

export default function Group({showList, setShowList, data}) {
  console.log(data.title)
  return <div>{showList ?
    <div>
      <ul>{data.map((movie) => {
        return (<il>
        {movie.title}
        </il>)
      })}</ul>
    </div> : null}</div>
  
}