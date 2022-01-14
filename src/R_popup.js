const Res_popup = (el) => {
  const popdiv = document.querySelector('.r-popup');
  popdiv.innerHTML = `<di class="pop-div">
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
     <h3 class="title-add">Reservations <span class="reservation-counter"></span></h3>
     <p class="error"></p>
     <ul class="user-reservation">
     </ul>
     <h3 class="title-add">Add a reservation</h3>
     <form class="form" method="post">
          <input type="text" class="input-name" id="input"  placeholder="Your name" required>
          <input type="date" class="start-date" id="input"  placeholder="Start date" required>
          <input type="date" class="end-date" id="input"  placeholder="End date" required>
          <button type="submit" class="submit">Reserve</button>
      </form>
  </div>`;
  return popdiv;
};
  
export default Res_popup;