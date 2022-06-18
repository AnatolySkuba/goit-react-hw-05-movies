import { Route, Routes } from 'react-router-dom';
import { Home, Movies, MovieDetails } from '../pages';
import Cast from './AdditionalInformation/Cast/Cast';
import Review from './AdditionalInformation/Review/Review';
import { Header, Link } from './App.styled';

export const App = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Review />} />
        </Route>
      </Routes>
    </>
  );
};
