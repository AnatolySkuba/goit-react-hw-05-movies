import { useState, useRef } from 'react';
import api from 'services/api';
import AdditionalInformation from 'components/AdditionalInformation/AdditionalInformation';
import { Link, useParams, useLocation } from 'react-router-dom';
import s from './MovieDetailsPage.module.css';
import { useEffect } from 'react';

export default function MovieDetailsPage() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { movieId } = useParams();

  const locationRef = useRef(useLocation().state);

  useEffect(() => {
    try {
      const response = api.fetchMoviesWithId(movieId);
      response.then(data => {
        const {
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        } = data.data;
        setMovieDetails({
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        });
      });
    } catch (error) {}
  }, [movieId]);

  if (movieDetails) {
    const { title, overview, poster_path, vote_average, genres, release_date } =
      movieDetails;

    return (
      <>
        {locationRef.current && (
          <Link
            className={s.link}
            to={locationRef.current.location}
            state={locationRef.current.search}
          >
            &#8592; Go back
          </Link>
        )}
        <div className={s.info}>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            className={s.img}
            alt={title}
          />
          <div className={s.text}>
            <h2>{`${title} (${release_date.slice(0, 4)})`}</h2>
            <p>{`User score: ${vote_average * 10}%`}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{genres.map(({ name }) => `${name} `)}</p>
          </div>
        </div>
        <p>Additional information</p>
        <AdditionalInformation />
      </>
    );
  }
}
