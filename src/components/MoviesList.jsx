import { Link } from 'react-router-dom';

export const MoviesList = ({ moviesList }) => {
  return (
    <>
      <ul>
        {moviesList.map(item => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} key={item.id}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
