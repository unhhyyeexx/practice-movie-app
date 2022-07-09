import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true) 
  const [movies, setMovies] = useState([])
  const getMovies = async() => {
    // const response = await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
    // const json = await response.json()

    const json = await (
      await fetch(
        'https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
      ).json()
    
    setMovies(json.data.movies)
    setLoading(false)
  }
  const [movie, setMovie] = useState("")

  // ----- then사용시 -----
  // useEffect(() => {
  //   fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year')
  //   .then(response => response.json())
  //   .then(json => {
  //     setMovies(json.data.movies)
  //     setLoading(false)
  //   })
  //   // json.data.movies => movie배열
  // }, [])

  // ----- async-await 사용시 -------
  useEffect(() => {
    getMovies()
  }, [])


  return (
    <div>
      {loading ? <h1>loading...</h1> 
      : <div>{movies.map(movie => (
          <div key={movie.id}>
            <img src={movie.medium_cover_image}></img>
            <div>
              <h2>{movie.title}</h2>
              <p>{movie.summary} </p>
              <ul>
                {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default App;
