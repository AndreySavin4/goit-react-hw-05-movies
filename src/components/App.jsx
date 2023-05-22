import { Routes, Route } from 'react-router-dom';
import { NotFound } from 'pages/NotFound';
import { Home } from 'pages/Home';
import { Layout } from './Header';
import { Movies } from 'pages/Movies';
import { MovieDetails } from './MoviesDetails';
import { Cast } from './Cast';
import { Review } from './Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
