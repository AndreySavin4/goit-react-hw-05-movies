import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieCredits } from 'servise/Servise';

export const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    MovieCredits(id)
      .then(res => {
        setCasts(res.cast);
      })
      .catch(error => new Error(error));
  }, [id]);

  return (
    <ul>
      {casts.map(({ profile_path, name, character, id }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={name}
            />

            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
