import { Link, useLocation } from 'react-router-dom';

export default function MovieListItem({ title, id }) {
  return (
    <li>
      <Link
        to={`/movies/${id}`}
        state={{
          location: useLocation().pathname,
          search: useLocation().search,
        }}
      >
        {title}
      </Link>
    </li>
  );
}
