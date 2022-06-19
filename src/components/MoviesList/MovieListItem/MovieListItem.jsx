import { Link, useLocation, useSearchParams } from 'react-router-dom';

export default function MovieListItem({ title, id }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, _setSearchParams] = useSearchParams();

  return (
    <li>
      <Link
        to={`/movies/${id}`}
        state={{
          location: useLocation().pathname,
          search: searchParams.get('query'),
        }}
      >
        {title}
      </Link>
    </li>
  );
}
