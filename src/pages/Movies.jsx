import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchMovies } from 'servise/Servise';
import { MoviesList } from 'components/MoviesList';
import FormMovie from 'components/FormMovie';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filterMovies, setFilterMovies] = useState(null);
  const queryMovie = searchParams.get('query') ?? '';

  useEffect(() => {
    SearchMovies(queryMovie)
      .then(res => res.json())
      .then(res => setFilterMovies(res.results))
      .catch(error => new Error(error));
  }, [queryMovie]);

  const onSubmit = input => {
    setSearchParams({ query: input });
  };

  return (
    <>
      <FormMovie onSubmit={onSubmit} />
      {filterMovies ? (
        <MoviesList moviesList={filterMovies} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Movies;
