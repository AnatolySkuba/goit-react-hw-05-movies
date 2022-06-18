/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import api from 'services/api';
import s from './Movies.module.css';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);
  const [_searchParams, setSearchParams] = useSearchParams();
  const search = useLocation().state;

  useEffect(() => {
    search && setSearchParams(search);
    search && onClickSearch(search.slice(7));
  }, [search, setSearchParams]);

  function onClickSearch(query) {
    if (query) {
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
        <Link to={`/movies?query=${query}`}>
          <button onClick={() => onClickSearch(query)}>Search</button>
        </Link>
      </form>
      {moviesSearch.length !== 0 && (
        <MoviesList movies={moviesSearch} search={`/movies?query=${query}`} />
      )}
    </main>
  );
};
