import { useEffect, useState } from 'react';

function MovieList(props) {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    setMovieList([
      {
        id: 1,
        title: 'Kingdom of Heaven'
      },
      {
        id: 2,
        title: 'District 9'
      }
    ]);
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
