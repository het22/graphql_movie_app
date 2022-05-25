import { useEffect, useState } from 'react';
import request from '../Util/request';

function MovieList(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    request(`{
      top_rated_movies {
        id,
        title
      }
    }`).then(({ top_rated_movies }) => setMovieList(top_rated_movies));
  }, []);

  return (
    <>
      <h1>Movie List</h1>
      <ul>
        {movieList.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </>
  );
}

export default MovieList;
