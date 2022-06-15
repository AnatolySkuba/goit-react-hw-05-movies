import { useState } from 'react';
import api from 'services/api';
import s from './AdditionalInformation.module.css';
import Cast from './Cast/Cast';
import Review from './Review/Review';

export default function AdditionalInformation({ id }) {
  const [cast, setCast] = useState([]);
  const [review, setReview] = useState([]);
  const [reviewStatus, setReviewStatus] = useState(true);

  const NAVIGATION = ['Cast', 'Reviews'];

  function onClickAdditionalInformation(page) {
    if (page === 'Cast') {
      try {
        const response = api.fetchCast(id);
        response.then(data => {
          data.data.cast.map(({ name, character, profile_path }) =>
            setCast(c => [...c, { name, character, profile_path }])
          );
        });
        setReview([]);
      } catch (error) {}
    } else {
      try {
        const response = api.fetchReview(id);
        response.then(data => {
          data.data.results.map(({ author, content }) =>
            setReview(r => [...r, { author, content }])
          );
          data.data.results.length === 0
            ? setReviewStatus(false)
            : setReviewStatus(true);
        });
        setCast([]);
      } catch (error) {}
    }
  }

  return (
    <>
      <ul className={s.list}>
        {NAVIGATION.map((page, index) => {
          return (
            <li key={index}>
              <a href="/#" onClick={() => onClickAdditionalInformation(page)}>
                {page}
              </a>
            </li>
          );
        })}
      </ul>
      {cast && <Cast cast={cast} />}
      {review && <Review review={review} />}
      {!reviewStatus && <p>We don't have any reviews for this movie.</p>}
    </>
  );
}
