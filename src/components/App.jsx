import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const Layout = lazy(() => import('./Layout'));
const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('./MoviesDetails'));
const Cast = lazy(() => import('./Cast'));
const Review = lazy(() => import('./Reviews'));
const NotFound = lazy(() => import('pages/NotFound'));

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
