import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

import slugify from 'slugify';

const slug = string => slugify(string, { lower: true });

export default function MovieList({ movies }) {
  // console.log(moviesArr);
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={{
              pathname:
                `/movies/${slug(`${movie.title} ${movie.id}`)}` ||
                `/movies/${slug(`${movie.name} ${movie.id}`)}`,
              state: {
                from:
                  location.pathname === '/' ? '/' : '/movies' + location.search,
              },
            }}
          >
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
