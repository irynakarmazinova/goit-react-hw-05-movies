import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { getFilmsByQuery } from '../../services/moviesApi';

import MoviesList from 'components/MoviesList/MoviesList';

export default function MovieView() {
  // query - по которому будем отправлять запрос из инпута
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const history = useHistory();
  const location = useLocation();

  const serchQuery = new URLSearchParams(location.search).get('query');
  // console.log(serchQuery);

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
    <div className="box">
      {/* <h2>Movie Page</h2> */}
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          value={query}
          className="input"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

      <MoviesList moviesArr={movies} />
    </div>
  );
}
