const showMovies = (movieData) => {
  movieData.forEach((el) => {
    /* eslint-disable */
    const { title, poster_path } = el;
    const movieDiv = document.querySelector('.movie-block');
    movieDiv.innerHTML
    += `<div class="cards">
    <div class="img">
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="movies">
    </div>
    <div class="title">
    <h2>${title}</h2>
    <div class="like-icon">
        <i class="far fa-heart fa-2x"></i>
        <span class="like-count"></span>
    </div>
    </div>
    <div class="btn">
        <button class="comment-btn" type="button">Comments</button>
        <button class="reservation-btn" type="button">Reservations</button>
    </div>
</div>`;
  });
};

export default showMovies;