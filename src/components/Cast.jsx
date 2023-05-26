import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCredits } from 'servise/Servise';

const Cast = () => {
  const [casts, setCasts] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    MovieCredits(id)
      .then(res => {
        setCasts(res.cast);
      })
      .catch(error => new Error(error));
  }, [id]);

  if (!casts) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {casts.map(({ profile_path, name, character, id }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
