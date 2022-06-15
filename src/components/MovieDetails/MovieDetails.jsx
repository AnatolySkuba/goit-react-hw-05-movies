import AdditionalInformation from './AdditionalInformation/AdditionalInformation';
import s from './MovieDetails.module.css';

export default function MovieDetails({ movieDetails, onClickGoBack }) {
  const {
    id,
    title,
    overview,
    poster_path,
    vote_average,
    genres,
    release_date,
  } = movieDetails;

  return (
    <>
      <a className={s.link} href="/#" onClick={() => onClickGoBack()}>
        &#8592; Go back
      </a>
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
      <AdditionalInformation id={id} />
    </>
  );
}
