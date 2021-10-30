import axios from 'axios';

const API_KEY = '029b4bd853ef3dc8d52297bd7264794a';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingFilms() {
  const resp = await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
  // const resp = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return resp.data.results;
}

export async function getFilmsByQuery(query) {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  return results;
}

export async function getFilmById(movieId) {
  const { data } = await axios(`/movie/${movieId}?api_key=${API_KEY}`);
  return data;
}

export async function getCastInfo(movieId) {
  const res = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  //   console.log(res);
  return res.data.cast;
}

export async function getReviewsInfo(movieId) {
  const res = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return res.data.results;
}

export async function getTrailerVideo(movieId) {
  const res = await axios.get(`/movie/${movieId}/videos?api_key=${API_KEY}`);
  return res.data.results;
}
// ----------------------------------------------------
// если нет jsx разметки, то расширение файла должно быть js
