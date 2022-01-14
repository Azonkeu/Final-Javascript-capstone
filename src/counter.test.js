import counter from './counter.js';

jest.mock('./display.js');

test('Expect the number of comments equal the value of counter', () => {
  document.body.innerHTML = '<h3 class="title-add">Comments <span class="comment-counter"></span></h3>'
    + '<ul class="user-comment">'
    + '<li>2022-01-11 Veralnia :  Amazing!.</li>'
    + '<li>2022-01-11 Vania : Cool!</li>'
    + '<li>2022-01-11 Inalina : I love this movie.</li>'
    + '</ul> ';

  const commentCounter = document.querySelector('.comment-counter');

  commentCounter.innerHTML = `<span class ="comment-counter">${counter()}<span>`;
  expect(Number(document.querySelector('.comment-counter').textContent)).toBe(3);
});
