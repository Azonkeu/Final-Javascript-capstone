import showMovies from './showMovie.js';
import './style.css';

const getData = async () => {
  const apiKey = 'api_key=574dd9cb25756d0a612a187ad048b948';
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const res = await data.results;
  showMovies(res);
};

getData();
