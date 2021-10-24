import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ moviesArr }) {
  //   console.log(moviesArr);
  const location = useLocation();

  return (
    <ul>
      {moviesArr.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname: `/movies/${movie.id}`,
              state: {
                from:
                  location.pathname.name === '/'
                    ? '/'
                    : '/movies' + location.search,
              },
            }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
