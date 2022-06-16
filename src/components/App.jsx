import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from 'services/api';
import Header from './Header/Header';
import MovieDetails from './MovieDetails/MovieDetails';
import MoviesList from './MoviesList/MoviesList';
import SearchPage from './SearchPage/SearchPage';

export const App = () => {
  const [movies, setMovies] = useState([]);
  const [movieDetails, setMovieDetails] = useState({});
  const [activePage, setActivePage] = useState('Home');
  const [previousPage, setPreviousPage] = useState('');
  const [query, setQuery] = useState('');
  const [moviesSearch, setMoviesSearch] = useState([]);

  useEffect(() => {
    try {
      const response = api.fetchTrendingMovies();
      response.then(data => {
        data.data.results.map(({ id, title }) =>
          setMovies(m => [...m, { id, title }])
        );
      });
    } catch (error) {}
  }, []);

  function onClickMovie(id) {
    try {
      const response = api.fetchMoviesWithId(id);
      response.then(data => {
        const {
          id,
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        } = data.data;
        setMovieDetails({
          id,
          title,
          overview,
          poster_path,
          vote_average,
          genres,
          release_date,
        });
        setPreviousPage(activePage);
        setActivePage('Movies');
      });
    } catch (error) {}
  }

  function onClickPage(page) {
    setPreviousPage(activePage);
    page === 'Movies' ? setActivePage('Search') : setActivePage(page);
    setMovieDetails({});
  }

  function onClickGoBack() {
    setActivePage(previousPage);
  }

  function onClickSearch(query) {
    if (query) {
      setQuery(query);
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

  return (
    <>
      {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> */}
      <Header activePage={activePage} onClickPage={onClickPage} />
      {/* {activePage === 'Home' && ( */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Trending today</h1>
              <MoviesList movies={movies} onClickMovie={onClickMovie} />
            </>
          }
        />
      </Routes>
      {/* )} */}
      {activePage === 'Search' && <SearchPage onClickSearch={onClickSearch} />}
      {activePage === 'Search' && query && (
        <MoviesList movies={moviesSearch} onClickMovie={onClickMovie} />
      )}
      <Routes>
        <Route
          path="Movies"
          element={<SearchPage onClickSearch={onClickSearch} />}
        />
      </Routes>
      {activePage === 'Movies' && (
        <MovieDetails
          movieDetails={movieDetails}
          onClickGoBack={onClickGoBack}
        />
      )}
    </>
  );
};
