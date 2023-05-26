import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { MovieDetail } from '../servise/Servise';

const MovieDetails = () => {
  const [movieId, setMovieId] = useState(null);
  const [status, setStatus] = useState(false);
  const { id } = useParams();
  const location = useLocation();

  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    MovieDetail(id)
      .then(res => {
        setStatus(true);
        setMovieId(res);
      })
      .catch(error => new Error(error), setStatus(false));
  }, [id]);

  if (!movieId) {
    return <p>Loading...</p>;
  }

  const {
    title,
    overview,
    genres,
    tagline,
    poster_path,
    release_date,
    vote_average,
  } = movieId;

  return (
    <>
      <Link to={backLink.current}>Back</Link>
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
          {title} ({new Date(release_date).getFullYear()})
        </h1>

        <p>Score: {Math.round(vote_average * 10)} %</p>

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
