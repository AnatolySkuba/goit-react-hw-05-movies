import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const response = await axios.get(
    '/trending/movie/day?api_key=c0e59496318bb750168f85f3ae951021'
  );
  return response.data;
};

// function fetchTrendingMovies() {
//   const response = axios.get(
//     'https://api.themoviedb.org/3/trending/movie/day?api_key=c0e59496318bb750168f85f3ae951021'
//   );
//   return response;
// }

function fetchMoviesWithId(id) {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=c0e59496318bb750168f85f3ae951021`
  );
  return response;
}

function fetchMoviesWithQuery(query) {
  const response = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=c0e59496318bb750168f85f3ae951021&query=${query}`
  );
  return response;
}

function fetchCast(id) {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c0e59496318bb750168f85f3ae951021`
  );
  return response;
}

function fetchReview(id) {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=c0e59496318bb750168f85f3ae951021`
  );
  return response;
}

const api = {
  getTrendingMovies,
  fetchMoviesWithId,
  fetchMoviesWithQuery,
  fetchCast,
  fetchReview,
};

export default api;
