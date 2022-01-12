import showMovies from './showMovie.js';
import popup from './popup.js';
import displayCommentinfo from './display.js';
import receiveComment from './receive.js';
import counter from './counter.js';
import './style.css';

const newData = async () => {
  const key = 'api_key=574dd9cb25756d0a612a187ad048b948';
  const urrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${key}`;
  const response = await fetch(urrl);
  const datax = await response.json();
  const resp = await datax.results;
  return resp;
};

function displayMov() {
  newData().then((movies) => {
    movies.forEach((movie, index) => {
      const containing = document.querySelectorAll('.comment-btn')[index];
      containing.addEventListener('click', (event) => {
        if (event.target.matches('button')) {
          popup(movie);
          displayCommentinfo(movie, receiveComment, counter);
        }
      });
    });
  });
}

const getData = async () => {
  const apiKey = 'api_key=574dd9cb25756d0a612a187ad048b948';
  const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&${apiKey}`;
  const response = await fetch(apiUrl);
  const data = await response.json();
  const res = await data.results;
  showMovies(res);
  displayMov(res);
};

getData();
