const displayReservationinfo = (movie, receiveReservation, resCounter) => {
  const displayReservation = (el) => {
    const ul = document.querySelector('.user-reservation');
    el.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.date_start} - ${item.date_end} by ${item.username}`;
      ul.appendChild(li);
    });
  };

  const reservationdisp = (el) => {
    const ul = document.querySelector('.user-reservation');
    const li = document.createElement('li');
    li.textContent = `${el.date_start} - ${el.date_start} by ${el.username}`;
    ul.appendChild(li);
  };

  const Reservation = document.querySelector('.r-popup');
  Reservation.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
      event.preventDefault();
      const username = document.querySelector('.input-name').value;
      const date_start = document.querySelector('.start-date').value;
      const date_end = document.querySelector('.end-date').value;
      const itemId = movie.id;
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
          response.json();
          reservationdisp(el);
          const reservationCounter = document.querySelector('.reservation-counter');
          reservationCounter.innerHTML = `(${resCounter()})`;
          return response.json();
        })
        .then(() => {
          displayReservation(el);
          document.querySelector('.input-name').value = '';
          const reservationCounter = document.querySelector('.reservation-counter');
          reservationCounter.innerHTML = `(${resCounter()})`;
        });
    }
  });
  receiveReservation(movie.id)
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      displayReservation(data);
      const reservationCounter = document.querySelector('.reservation-counter');
      reservationCounter.innerHTML = `(${data.length})`;
    });
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    Reservation.innerHTML = '';
  });
};

export default displayReservationinfo;
