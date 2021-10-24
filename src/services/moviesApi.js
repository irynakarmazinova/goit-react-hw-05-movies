import axios from 'axios';

const API_KEY = '029b4bd853ef3dc8d52297bd7264794a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// const BASE_URL = 'https://developers.themoviedb.org/3';

// export default function fetchTrendingMovies() {
//     fetch(`${BASE_URL}/trending/get-trending`)
// };

// export default function fetchSearchMovies() {
//     fetch(`${BASE_URL}/search/search-movies`)
// };

// export default function fetchMovieDetails() {
//     fetch(`${BASE_URL}/movies/get-movie-details`)
// };

// export default function fetchMovieCredits() {
//     fetch(`${BASE_URL}/movies/get-movie-credits`)
// };

// export default function fetchMovieReviews() {
//     fetch(`${BASE_URL}/movies/get-movie-reviews`)
// };

export async function getTrendingFilms() {
  const resp = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  return resp.data.results;
}
// в хом отображаются популярные

export async function getFilmsByQuery(query) {
  const {
    data: { results },
  } = await axios.get('/search/movie?api_key=' + API_KEY + '&query=' + query);

  return results;
}

export async function getFilmById(id) {
  const { data } = await axios(`/movie/${id}?api_key=${API_KEY}`);
  return data;
}

export async function getCastInfo(id) {
  const res = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  //   console.log(res);
  return res.data.cast;
}

// если нет jsx разметки, то расширение файла должно быть js
