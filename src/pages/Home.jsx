import { useState, useEffect } from 'react';
import { Trending } from 'servise/Servise';
import { MoviesList } from 'components/MoviesList';
import { Outlet } from 'react-router-dom';

export const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    fetchLoad();
  }, []);

  const fetchLoad = () => {
    Trending()
      .then(response => {
        setTopMovies(response.results);
      })
      .catch(error => new Error(error));
  };

  return (
    <>
      <h1>Trending today</h1>
      <MoviesList moviesList={topMovies} />
      <Outlet />
    </>
  );
};
