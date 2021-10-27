import {
  useParams,
  useLocation,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router'; //или через useRouteMatch для сост вложенной навигации
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getFilmById } from 'services/moviesApi';

import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import Title from 'components/Title/Title';
import MovieCard from 'components/MovieCard/MovieCard';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import Trailer from 'components/Trailer/Trailer';

import s from './MovieDetailsView.module.scss';

export default function MovieDetailsView() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams(); //объект динамических параметров
  // console.log(params);

  const location = useLocation();
  const { url } = useRouteMatch();
  // console.log(history);

  useEffect(() => {
    getFilmById(movieId).then(setMovieDetails);
  }, [movieId]);
  // console.log(movieDetails);

  if (!movieDetails) {
    return <></>; //нужно что-то вернуть, хотя бы пустой фрагмент
  }

  return (
    <div className={s.box}>
      <ButtonGoBack />

      <MovieCard movieDetails={movieDetails} />

      <Title title="Additional information" />

      <ul>
        <li>
          <NavLink
            to={{
              pathname: url + '/cast',
              state: { ...location.state, id: movieId },
            }}
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: url + '/reviews',
              state: { ...location.state, id: movieId },
            }}
          >
            Reviews
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: url + '/trailer',
              state: { ...location.state, id: movieId },
            }}
          >
            Trailer
          </NavLink>
        </li>
      </ul>

      <Switch>
        <Route exact path={`${url}/cast`}>
          <Cast movieId={movieId} />
        </Route>

        <Route exact path={`${url}/reviews`}>
          <Reviews movieId={movieId} />
        </Route>

        <Route exact path={`${url}/trailer`}>
          <Trailer movieId={movieId} />
        </Route>
      </Switch>
    </div>
  );
}

// -------------------------------------------
// добавить теги и еще
// добавить картинку
// useRouteMatch для сост вложенной навигации
