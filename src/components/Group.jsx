import {useState} from 'react'

<<<<<<< HEAD
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
=======
export default function Group({data}) {
  console.log(data)
  return (
    <div>
      {/* {data.map((movie) => {(
        <div>
          <ul>
            <li>{movie.title}</li>
          </ul>
>>>>>>> parent of 21af2a0 (MIGHT HAVE TO REVERT BACK TO THIS)

        </div>
        
      )})} */}
      <p>hi</p>

    </div>
  )
}
