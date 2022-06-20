import { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import api from 'services/api';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = useLocation().state || searchParams.get('query');

  useEffect(() => {
    search && searchParams.set('query', search);
    search && onClickSearch(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMoviesSearch([]);
  }, [search]);

  function onClickSearch(query) {
    if (query) {
      setSearchParams(`query=${query}`);
      setMoviesSearch([]);
      try {
        const response = api.fetchMoviesWithQuery(query);
        response.then(data => {
          data.data.results.map(({ id, title }) =>
            setMoviesSearch(m => [...m, { id, title }])
          );
        });
      } catch (error) {}
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <main>
      <form className={s.form} onSubmit={handleSubmit}>
        <input onChange={handleChange} value={query} />
        <button onClick={() => onClickSearch(query)}>Search</button>
      </form>
      {moviesSearch.length !== 0 && <MoviesList movies={moviesSearch} />}
    </main>
  );
}
