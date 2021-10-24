import { useState, useEffect } from 'react';
import { getTrendingFilms } from 'services/moviesApi';

import MoviesList from 'components/MoviesList/MoviesList';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(setMovies);
  }, []);

  return (
    <div className="box">
      <h2 className="title">Trending today</h2>
      <ul></ul>

      <MoviesList moviesArr={movies} />
    </div>
  );
}
