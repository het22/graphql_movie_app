import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import request from '../Util/request';

function MovieList(props) {
  const { data: movieList, isSuccess } = useQuery('top_rated_movies', () =>
    request(`{
      top_rated_movies {
        id,
        title
      }
    }`).then(({ top_rated_movies }) => top_rated_movies)
  );

  return (
    <>
      <h1>Movie List</h1>
      {isSuccess && (
        <ul>
          {movieList.map(movie => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default MovieList;
