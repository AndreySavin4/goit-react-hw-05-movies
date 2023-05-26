const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzMyOGMzOTFjMGM2NzdhOGVlMTVkNzZhMGMwOWI0OSIsInN1YiI6IjY0NjNiNGI4ZGJiYjQyMDEzNjM4OGY2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5-onE9RDABl6DkqZwObgftaf4MPI3LnzHVcMmjrK6Mo',
  },
};

export const Trending = async () => {
  const res = await fetch(
    'https://api.themoviedb.org/3/trending/movie/day?api_key=e7328c391c0c677a8ee15d76a0c09b49',
    options
  );
  return await res.json();
};

export const SearchMovies = query => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
};

export const MovieDetail = async id => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  ).then(response => response.json());
};

export const MovieCredits = async id => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return await res.json();
};

export const MovieReviews = async id => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  const response_1 = await response.json();
  return response_1;
};
