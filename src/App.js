import { Switch, Route } from 'react-router';
import { lazy, Suspense } from 'react';

import Navigation from 'components/Navigation/Navigation';

import './App.scss';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "HomeView" */),
);
const MoviesView = lazy(() =>
  import('./views/MoviesView/MoviesView' /* webpackChunkName: "MoviesView" */),
);
const MovieDetailsView = lazy(() =>
  import(
    './views/MovieDetailsView/MovieDetailsView' /* webpackChunkName: "MovieDetailsView" */
  ),
);
const NotFoundView = lazy(() =>
  import(
    './views/NotFoundView/NotFoundView' /* webpackChunkName: "NotFoundView" */
  ),
);

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden">Movies</h1>
      <Navigation />

      {/* <Suspense fallback={<Loader />}> */}
      <Suspense fallback={<h2>Loading...</h2>}>
        <Switch>
          <Route exact path="/">
            <HomeView />
          </Route>

          <Route path="/movies/:slug">
            {/* <Route exact path="/movies/:movieId"> */}
            <MovieDetailsView />
          </Route>

          <Route path="/movies/">
            <MoviesView />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
// ---------------------------------
// server side rendering. маршрутизация на сервере. реакт ренедриться на сервере и отправляется на клиент без перезагрузки.
// хорошо с сео. для публичных приложен, должно хорошо индексироваться.
// next.js - фреймворк на базе реакта for server side rendering.

// client side rendering. маршрутизация на клиенте.
// плохо с сео.отлично подходит под приложки с логин + пароль, пушо такая приложка не должна индексироваться и сео не нужно.

// React Router DOM - библиотека.
// маршрутизатор - следит за изменениями адресной строки и рендерит изменения.

// single page application

// резолвятся - обрабатываются

// lazy, Suspense - для разделения кода

// react query v3
// react hook form
// next.js
