import { NavLink } from 'react-router-dom'; //можно использовать и Link
// import s from './navigation.module.scss'; - если подключать module.scss здесь, то использовать как и module.css - className={s.link}, а если подключать в общем файл App.scss - то использовать className="link"

export default function Navigation() {
  return (
    <nav className="nav">
      <NavLink exact to="/" className="link" activeClassName="link--active">
        Home
      </NavLink>

      <NavLink to="/movies" className="link" activeClassName="link--active">
        Movies
      </NavLink>
    </nav>
  );
}
