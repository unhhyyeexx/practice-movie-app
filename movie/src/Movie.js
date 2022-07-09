function Movie({coverImg, title, summary, genres}) {
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <div>
        <h2>{title}</h2>
        <p>{summary} </p>
        <ul>
          {genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    </div>
  ) 
}

export default Movie;