import {
  useParams,
  useHistory,
  useLocation,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router'; //или через useRouteMatch
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getFilmById } from 'services/moviesApi';
import Cast from 'components/Cast/Cast';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();
  // console.log(params);
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  // console.log(history);

  useEffect(() => {
    getFilmById(movieId).then(setMovieDetails);
  }, [movieId]);

  // console.log(movieDetails);

  const handleGoBack = () => {
    if (location.state?.from) {
      history.push(location.state.from);
    }
  };

  if (!movieDetails) {
    // return <></>; //нужно что-то вернуть, хотя бы пустой фрагмент
    return <p>Not found</p>; //нужно что-то вернуть, хотя бы пустой фрагмент
  }

  return (
    <div>
      <button //type="button"
        onClick={handleGoBack}
      >
        Go back
      </button>
      <h2>{movieDetails.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
        alt={movieDetails.title}
      />

      <NavLink
        to={{
          pathname: url + '/cast',
          state: { ...location.state, id: movieId },
        }}
      >
        Cast
      </NavLink>

      <Switch>
        <Route path={`${url} / cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route path={`${url}/ reviews`}></Route>
      </Switch>
    </div>
  );
}

// добавить теги и еще
// добавить картинку
