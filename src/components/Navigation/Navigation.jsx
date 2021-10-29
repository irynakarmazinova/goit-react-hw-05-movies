import { NavLink } from 'react-router-dom'; //можно использовать и Link
// import s from './navigation.module.scss'; - если подключать module.scss здесь, то использовать как и module.css - className={s.link}, а если подключать в общем файл App.scss - то использовать className="link"

import s from './Navigation.module.scss';

export default function Navigation() {
  return (
    <>
      <nav className={s.nav}>
        <NavLink
          exact
          to="/"
          className={s.link}
          activeClassName={s.link_active}
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={s.link}
          activeClassName={s.link_active}
        >
          Movies
        </NavLink>
      </nav>

      <hr />
    </>
  );
}
