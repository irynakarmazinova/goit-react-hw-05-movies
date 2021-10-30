import { useState, useEffect, Suspense } from 'react';

import { getTrendingFilms } from 'services/moviesApi';

import MoviesList from 'components/MoviesList/MoviesList';

import s from './HomeView.module.scss';

export default function HomeView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(setMovies);
  }, []);

  return (
    <div className={s.box}>
      <h2 className={s.title}>Trending today</h2>

      <Suspense fallback={<h2>Loading movies list...</h2>}>
        <MoviesList movies={movies} />
      </Suspense>
    </div>
  );
}
