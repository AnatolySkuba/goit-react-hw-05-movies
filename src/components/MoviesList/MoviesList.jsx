import MovieListItem from './MovieListItem/MovieListItem';

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
