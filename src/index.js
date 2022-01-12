/* eslint-disable */
import showMovies from './showMovie.js';
import popup from './popup.js';
import displayCommentinfo from './display.js';
import displayReservationinfo from './R_display';
import {receiveComment, receiveReservation} from './receive.js';
import {counter, ResCounter} from './counter.js';
import Res_popup from './R_popup.js';
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

function displayReservation() {
  newData().then((movies) => {
    movies.forEach((movie, index) => {
      const Select_R_btn = document.querySelectorAll('.reservation-btn')[index];
      
      Select_R_btn.addEventListener('click', (event) => {
        if (event.target.matches('button')) {
          Res_popup(movie);
          displayReservationinfo(movie, receiveReservation, ResCounter);
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
  displayReservation(res);
};

getData();
