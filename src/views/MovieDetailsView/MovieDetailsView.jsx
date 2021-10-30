import {
  useParams,
  useLocation,
  Route,
  Switch,
  useRouteMatch,
} from 'react-router';
import { NavLink } from 'react-router-dom';
import { useState, useEffect, lazy, Suspense } from 'react';

import { getFilmById } from 'services/moviesApi';

import ButtonGoBack from 'components/ButtonGoBack/ButtonGoBack';
import MovieCard from 'components/MovieCard/MovieCard';
// import NotFoundView from 'views/NotFoundView/NotFoundView';

import s from './MovieDetailsView.module.scss';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);
const Trailer = lazy(() =>
  import('../../components/Trailer/Trailer' /* webpackChunkName: "Trailer" */),
);

// страница одного фильма
export default function MovieDetailsView() {
  const [movieDetails, setMovieDetails] = useState(null);
  // console.log(movieDetails);

  const { slug } = useParams();
  const movieId = slug.match(/[a-z0-9]+$/)[0];

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
      <hr />
      <div className={s.boxAdditional}>
        <h2 className={s.title}>Additional information</h2>
        {/* <Title title="Additional information" /> */}

        <ul>
          <li>
            <NavLink
              to={{
                pathname: url + '/cast',
                state: { ...location.state, id: movieId },
              }}
              className={s.link}
              activeClassName={s.link_active}
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
              className={s.link}
              activeClassName={s.link_active}
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
              className={s.link}
              activeClassName={s.link_active}
            >
              Trailer
            </NavLink>
          </li>
        </ul>
      </div>

      {/* вложенный маршрут, стр будет не перезагружаться, а будет рендериться на той же стр где нахожусь */}
      {/* <Suspense fallback={<Loader />}> */}
      <Suspense fallback={<h2>Loading in movie card...</h2>}>
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

          {/* <Route>
            <NotFoundView />
          </Route> */}
        </Switch>
      </Suspense>
    </div>
  );
}

// -------------------------------------------
// useParams - объект co всеми динамическими параметрами, получить id
// useRouteMatch для сост вложенной навигации, что бы получить объект с инфо о том как текущий маршрут(компонент) совпал с url в адресной строке браузера

// свойство path - для вложенных маршрутов/шаблон на который зарендерился текущий раут
// свойство url - для вложенной навигации/что находится в адресной строке

// что бы переходить в каст не перезагружая - Занятие 9 - 1:28 - вложенные маршруты
// {authors && (
//         <ul>
//           {authors.map(author => (
//             <li key={author.id}>
//               <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
//             </li>
//           ))}
//         </ul>
//       )}
//       <hr />

//       <Route path={`${path}/:authorId`}>
//         {authors && <AuthorSubView authors={authors} />}
//       </Route>

// импорты из пакетов - абсолютные импорты - относительные импорты

// Redirect -
