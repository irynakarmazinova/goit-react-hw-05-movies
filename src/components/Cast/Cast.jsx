import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { getCastInfo } from 'services/moviesApi';

export default function Cast({ movieId }) {
  //   console.log(getCastInfo(movieId));

  const [cast, setCast] = useState([]);

  const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    getCastInfo(movieId).then(setCast);
  }, [movieId]);
  //   console.log(cast);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id}>
          <p>{actor.name}</p>
        </li>
      ))}
    </ul>
  );
}
