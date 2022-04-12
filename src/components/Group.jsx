import {useState} from 'react'

export default function Group({props}) {
  const [current, setCurrent] = useState(false)
  const currentFlag = () => setCurrent(prevState => !prevState)
 
  return (
    <li>
      <p>{props.group}</p>
      <br />
      <p>{props.children}</p>
    </li>
  )
  // (
    // <div>
    //   {showList ? (
    //     data.map((movie) => (
    //       <div>
    //         <ul>
    //           <li>{movie}</li>
    //         </ul>
    //       </div>
    //     ))) : null}

    // </div>
  // )
}
