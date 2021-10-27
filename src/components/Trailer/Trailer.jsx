import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { getTrailerVideo } from 'services/moviesApi';

export default function Trailer({ movieId }) {
  const [trailer, setTrailer] = useState([]);

  const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    getTrailerVideo(movieId).then(setTrailer);
  }, [movieId]);
  console.log(trailer.url);
  return <iframe src={`https://www.youtube.com/embed/${trailer.key}`}></iframe>;
}
