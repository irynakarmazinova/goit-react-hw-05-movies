import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { getCastInfo } from 'services/moviesApi';

import s from './Cast.module.scss';

import defaultImage from 'images/defaultImage.jpg';

export default function Cast({ movieId }) {
  //   console.log(getCastInfo(movieId));

  const [cast, setCast] = useState([]);

  const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    getCastInfo(movieId).then(setCast);
  }, [movieId]);
  // console.log(cast);

  return (
    <ul>
      {cast.map(({ id, profile_path, name, character }) => {
        // console.log(actor);

        return (
          <li key={id} className={s.item}>
            <img
              className={s.image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImage
              }
              alt={name}
            />

            <p className={s.name}>{name}</p>
            <p className={s.name}>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
}
