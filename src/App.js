import { Switch, Route } from 'react-router';

import Navigation from 'components/Navigation/Navigation';

import HomeView from 'views/HomeView/HomeView';
import MoviesView from 'views/MoviesView/MoviesView';
import MovieDetailsView from 'views/MovieDetailsView/MovieDetailsView';
import NotFoundView from 'views/NotFoundView/NotFoundView';

import './App.scss';

function App() {
  return (
    <div className="App">
      <h1 className="visually-hidden">Movies</h1>
      <Navigation />

      <Switch>
        <Route exact path="/">
          <HomeView />
        </Route>

        <Route path="/movies/:movieId">
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
