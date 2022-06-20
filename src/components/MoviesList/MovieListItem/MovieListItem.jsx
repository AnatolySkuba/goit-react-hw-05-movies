import { Link, useLocation, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MovieListItem({ title, id }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, _setSearchParams] = useSearchParams();

  return (
    <li>
      <Link
        to={`/goit-react-hw-05-movies/movies/${id}`}
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

MovieListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
