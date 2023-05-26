import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { SearchMovies } from 'servise/Servise';
import { MoviesList } from 'components/MoviesList';
import FormMovie from 'components/Form';

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

  const onChange = event => {
    const movieValue = event.target.value.trim();
    setSearchParams({ query: movieValue });
    event.target.reset();
  };

  return (
    <>
      <FormMovie onChange={onChange} />
      {filterMovies ? (
        <MoviesList moviesList={filterMovies} />
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default Movies;
