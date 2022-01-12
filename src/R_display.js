const displayReservationinfo = (movie, receiveReservation, counter) => {
  const displayReservation = (el) => {
    const ul = document.querySelector('.user-reservation');
    el.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.date_start} - ${item.date_end} by ${item.username}`;
      ul.appendChild(li);
    });
  };
  const Reservation = document.querySelector('.r-popup');
  Reservation.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
      event.preventDefault();
      /* eslint-disable */
      const username = document.querySelector('.input-name').value;
      const date_start = document.querySelector('.start-date').value;
      const date_end = document.querySelector('.end-date').value;
      const itemId = movie.id;

      // eslint-disable-next-line camelcase
      const el = { username, date_start, date_end };

      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fVSALNrpnLiYk8wyVjPw/reservations', {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          username,
          date_start,
          date_end,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          document.querySelector('.input-name').value = '';
          receiveReservation(itemId)
            .then((data) => {
              if (data.error) {
                throw new Error(data.error);
              }
              displayReservation(data);
              const commentCounter = document.querySelector('.reservation-counter');
              commentCounter.innerHTML = `(${counter()})`;
              window.location.reload();
            });
          return response.json();
        })
        .then(() => {
          displayReservation(el);
          document.querySelector('.input-name').value = '';
          const commentCounter = document.querySelector('.reservation-counter');
          commentCounter.innerHTML = `(${counter()})`;
        });
    }
  });
  receiveReservation(movie.id)
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      displayReservation(data);
      const commentCounter = document.querySelector('.reservation-counter');
      commentCounter.innerHTML = `(${data.length})`;
    });
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    Reservation.innerHTML = '';
  });
};

export default displayReservationinfo;
