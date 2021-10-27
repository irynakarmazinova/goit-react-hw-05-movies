import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

import { getReviewsInfo } from 'services/moviesApi';

export default function Reviews({ movieId }) {
  const [reviews, setReviews] = useState([]);

  const location = useLocation();
  //   console.log(location);

  useEffect(() => {
    getReviewsInfo(movieId).then(setReviews);
  }, [movieId]);
  // console.log(reviews);

  return (
    <div>
      {reviews?.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => {
            return (
              <li key={id} className="item">
                <p className="name">Author: {author}</p>
                <p className="name"> {content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>'We don`t have any reviews for this movie.'</p>
      )}
    </div>
  );
}
