import s from './MovieCard.module.scss';

import defaultImage from 'images/defaultImage.jpg';

export default function MovieCard({ movieDetails }) {
  return (
    <div className={s.movieBox}>
      <img
        className={s.image}
        src={
          movieDetails.backdrop_path
            ? `https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`
            : defaultImage
        }
        alt={movieDetails.tagline}
      />

      <div className={s.descriptionBox}>
        <h2 className={s.title}>
          {movieDetails.title}{' '}
          {movieDetails.release_date ? `${movieDetails.release_date}` : ''}
        </h2>
        <p className={s.userScore}>
          User Score: {(movieDetails.vote_average * 100) / 10}%
        </p>
        <p className={s.overview}>Overview</p>
        <p className={s.overview__text}>{movieDetails.overview}</p>
        <p className={s.genres}>Genres</p>
        <p>
          {movieDetails.genres.map(({ name, id }) => (
            <span className={s.genres__name} key={id}>
              {name}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
