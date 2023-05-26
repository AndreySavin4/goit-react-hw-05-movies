import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ moviesList }) => {
  const location = useLocation();
  return (
    <>
      <ul>
        {moviesList.map(item => {
          return (
            <li key={item.id}>
              <Link
                to={`/movies/${item.id}`}
                state={{ from: location }}
                key={item.id}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

MoviesList.propTypes = {
  moviesList: PropTypes.array.isRequired,
};
