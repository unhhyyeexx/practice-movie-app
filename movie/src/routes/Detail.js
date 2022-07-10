import {useParams} from "react-router-dom"
import { useEffect, useState } from 'react';


function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([])
  const {id} = useParams()

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json()
    
    setMovie(json.data.movie)
    setLoading(false) 
  }
  
  useEffect(()=> {
    getMovie()
  }, [])

  return (
    <div>
      {loading ? <h1>loading</h1>
      : <div>
          <img src={movie.large_cover_image} alt={movie.title}></img>
          <h2>{movie.title}</h2>
          <p>realese year : {movie.year}</p>
          <p>rating : {movie.rating}</p>
          <p>runtime : {movie.runtime}</p>
          <ul>
            {movie.genres.map(genre => {
              <li key={genre}>{genre}</li>
            })}
          </ul>
        </div>}
    </div>
  )
}

export default Detail;