import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { getTrailerVideo } from 'services/moviesApi';

export default function Trailer({ movieId }) {
  const [trailer, setTrailer] = useState([]);

  // const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    getTrailerVideo(movieId).then(setTrailer);
  }, [movieId]);

  return (
    <>
      {trailer.map(tr => (
        <iframe
          key={tr.id}
          src={`https://www.youtube.com/embed/${tr.key}`}
          title={tr.name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          // width="560"
          // height="315"
        ></iframe>
      ))}
    </>
  );
}
