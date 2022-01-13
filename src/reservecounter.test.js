/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import resCounter from './reservecounter.js';

jest.mock('./R_display.js');

test('Expect the number of comments equal the value of counter', () => {
  document.body.innerHTML = '<h3 class="title-add">Reservations <span class="reservation-counter"></span></h3>'
    + '<ul class="user-reservation">'
    + '<li>2022-01-19 - 2022-01-26 by Ahmed</li>'
    + '<li>2022-01-19 - 2022-01-26 by Ali</li>'
    + '<li>2022-01-19 - 2022-01-26 by Mohammed</li>'
    + '</ul> ';

  const reservationCounter = document.querySelector('.reservation-counter');

  reservationCounter.innerHTML = `<span class ="reservation-counter">${resCounter()}<span>`;
  expect(Number(document.querySelector('.reservation-counter').textContent)).toBe(3);
});
