import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { MovieDetail } from '../servise/Servise';

const MovieDetails = () => {
  const [movieId, setMovieId] = useState([]);
  const [status, setStatus] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    MovieDetail(id)
      .then(res => {
        setStatus(true);
        setMovieId(res);
      })
      .catch(error => new Error(error), setStatus(false));
  }, [id]);

  const { title, overview, genres, tagline, poster_path, release_date } =
    movieId;

  return (
    <>
      <div>
        {status ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${poster_path}`}
            alt={tagline}
          />
        ) : (
          <p>Loading...</p>
        )}

        <h1>
          {title} ({release_date})
        </h1>

        <h3>Overview</h3>

        <p>{overview}</p>

        <h3>Ganres</h3>
        {status ? (
          <ul>
            {genres.map(item => {
              return (
                <li key={item.id}>
                  <p>{item.name}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>

      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
