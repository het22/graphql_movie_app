import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import request from '../Util/request';

function MovieDetail(props) {
  const { id } = useParams();

  const {
    data: movie,
    isError,
    isLoading
  } = useQuery(['movie', id], () =>
    request(`{
      movie(id: ${id}) {
        id,
        title,
        release_date,
        overview
      }
    }`).then(({ movie }) => movie)
  );

  if (isLoading) return null;
  if (isError) return 'Page Not Found';

  return (
    <>
      <h1>{movie.title}</h1>
      <p>{movie.release_date}</p>
      <p>{movie.overview}</p>
    </>
  );
}

export default MovieDetail;
