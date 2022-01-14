import countermov from './movieCount.js';

test('counter should be equal to items count', () => {
  const data = [{ movie: 'movie1' }, { movie: 'movie2' }, { movie: 'movie3' }];
  document.body.innerHTML = '<div class="movie-count"></div>';
  const domElement = document.querySelector('.movie-count');
  countermov(data, domElement);
  const result = domElement.innerText;
  expect(result).toBe(3);
});