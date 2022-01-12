const popup = (el) => {
  /* eslint-disable */
  const popdiv = document.querySelector('.popu');
  popdiv.innerHTML =  `<di class="pop-div">
  <div class="pop-img">
      <button type="button" class="close"><i class="fas fa-times fa-2x"></i></button>
      <img src="https://image.tmdb.org/t/p/w500${el.poster_path}" alt="movies" class="img-pop">
  </div>
  <div class="title-pop-div">
      <h2 class="title-pop">${el.title}</h2>
      <div class="detail">
          <div class="datail-one">   
              <p class="lang">Original Language: ${el.original_language}</p>
              <p class="date">Release date: ${el.release_date}</p>
          </div>
          <div class="datail-two">
              <p class="lari">Popularity: ${el.popularity}</p>
              <p class="elid">${el.id}</p>
          </div>
       </div>
     </div>
     <div class="overview">
      ${el.overview}
     </div>
     <h3 class="title-add">Comments <span class="comment-counter"></span></h3>
     <p class="error"></p>
     <ul class="user-comment">
      </ul>
     <h3 class="title-add">Add a comment</h3>
     <form class="form" method="post">
          <input type="text" class="input" id="input"  placeholder="Your name" required>
          <textarea class="texarea" id="comment" name="comment" cols="30" rows="7" placeholder="Your insights" required></textarea>
          <button type="submit" class="submit">Comment</button>
      </form>
  </div>`;
  return popdiv;
};
  
export default popup;
