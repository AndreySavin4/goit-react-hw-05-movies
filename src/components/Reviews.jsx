import { useEffect, useState } from 'react';
import { MovieReviews } from 'servise/Servise';
import { useParams } from 'react-router-dom';

const Review = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    MovieReviews(id).then(res => setReviews(res.results));
  }, [id]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ author, content, id }) => {
            return (
              <li key={id}>
                <p>Author : {author}</p>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <h3>We don't have any reviews for this movie</h3>
      )}
    </>
  );
};

export default Review;
