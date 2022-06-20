import MovieListItem from './MovieListItem/MovieListItem';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
  return (
    <>
      <ul>
        {movies.map(({ id, title }) => (
          <MovieListItem key={id} title={title} id={id} />
        ))}
      </ul>
    </>
  );
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
