import { useState, useEffect, Suspense } from 'react';
import { useHistory, useLocation } from 'react-router';

import { getFilmsByQuery } from 'services/moviesApi';

import Title from 'components/Title/Title';
import SearchForm from 'components/SearchForm/SearchForm';
import MoviesList from 'components/MoviesList/MoviesList';

import s from './MovieView.module.scss';

export default function MovieView() {
  // query - по которому будем отправлять запрос из инпута
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const serchQuery = new URLSearchParams(location.search).get('query');
  // // console.log(serchQuery);

  useEffect(() => {
    if (serchQuery) {
      getFilmsByQuery(serchQuery).then(setMovies);
      setQuery(serchQuery);
    }
  }, [serchQuery]);

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    getFilmsByQuery(query).then(setMovies);
    history.push({ ...history.location, search: `?query=${query}` });
  };

  return (
    <div className={s.box}>
      <Title title="Movie search" />
      <SearchForm query={query} onChange={onChange} onSubmit={onSubmit} />

      <Suspense fallback={<h2>Loading movies list...</h2>}>
        <MoviesList movies={movies} />
      </Suspense>
    </div>
  );
}
