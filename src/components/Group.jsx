

export default function Group({showList, setShowList, data}) {

  return <div>{showList ?
    <div> 
      <ul>
        {data.map((movie) => {
        return (<li>
        {movie.title}
        </li>)
        })}
      </ul>
    </div> : null}</div>
  
}