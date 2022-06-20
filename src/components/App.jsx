import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import Cast from './AdditionalInformation/Cast/Cast';
import Review from './AdditionalInformation/Review/Review';

const HomePage = lazy(() =>
  import('../pages/HomePage' /* webpackChunkName: "HomePage" */)
);

const MoviesPage = lazy(() =>
  import('../pages/MoviesPage' /* webpackChunkName: "MoviesPage" */)
);

const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage' /* webpackChunkName: "MovieDetailsPage" */)
);

export const App = () => {
  return (
    <Suspense fallback="">
      <Routes>
        <Route path="/goit-react-hw-05-movies/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/goit-react-hw-05-movies/movies"
            element={<MoviesPage />}
          />
          <Route
            path="/goit-react-hw-05-movies/movies/:movieId"
            element={<MovieDetailsPage />}
          >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};
