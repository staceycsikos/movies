import { Link } from "react-router-dom"
import { useState } from "react";
import "./global.css"
import Movie from "./Movie";

export default function Group({showList, data}) {
  const [modal, setModal] = useState(false)
  const Toggle = () => setModal(!modal);

  return <div>{showList ?
    <div> 
      <ul className="list-container">
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
      <Movie show={modal} />
    </div> : null}</div>
  
}