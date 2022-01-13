/* eslint-disable */
import showMovies from './showMovie.js';
import popup from './popup.js';
import displayCommentinfo from './display.js';
import displayReservationinfo from './R_display';
import {receiveComment, receiveReservation} from './receive.js';
import counter from './counter.js';
import resCounter from './reservecounter.js';
import Res_popup from './R_popup.js';
import countermov from './movieCount.js';
import './style.css';

const showCounter = document.querySelector('.movie-count');

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
          displayCommentinfo(movie, receiveComment, counter, popup);
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
          displayReservationinfo(movie, receiveReservation, resCounter);
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
  newData().then((movies) => {
    countermov(movies, showCounter);
    })  
};

getData();

async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors', 
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', 
    referrerPolicy: 'no-referrer', 
    body: JSON.stringify(data)
  });
   response.json(); 
   window.location.reload();
}

async function getText(file) {
  let myObject =  await fetch(file);
  let myText = await myObject.json();
  likes(myText);
  return myText;
}

const likes = ((alfa) => {
  newData ().then((movies) => {
    movies.forEach((movi, index) => {
  const spans = document.querySelectorAll('.like-count')[index];
  console.log(alfa);
      alfa.forEach(lik => {
        if(lik.item_id == movi.id) {
          spans.innerHTML = `${lik.likes} likes`;
    
      };
    })
    });
   
});
});
    
getText(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fVSALNrpnLiYk8wyVjPw/likes`);

 
  newData ().then((movies) => {
    movies.forEach((movi, index) => {
      const spans = document.querySelectorAll('.cards')[index];
      spans.addEventListener('click', (e) => { 
  if (e.target.tagName.toLowerCase() === 'i'){
    console.log(movi.id);
    const itemId = movi.id; 
    console.log(itemId);
    postData('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fVSALNrpnLiYk8wyVjPw/likes', { "item_id": itemId });
    getText(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fVSALNrpnLiYk8wyVjPw/likes`);
  }
})
});
});
