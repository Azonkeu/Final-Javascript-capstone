const displayCommentinfo = (movie, receiveComment, counter) => {
  const displayComments = (el) => {
    const ul = document.querySelector('.user-comment');
    el.forEach((item) => {
      const li = document.createElement('li');
      const date = `${item.creation_date}`;
      li.textContent = `${date}  ${item.username} : ${item.comment}`;
      ul.appendChild(li);
    });
  };

  const commentsdis = (el) => {
    const ul = document.querySelector('.user-comment');
    const li = document.createElement('li');
    const date = `${el.creation_date}`;
    li.textContent = `${date}  ${el.username} : ${el.comment}`;
    ul.appendChild(li);
  };
  const comments = document.querySelector('.popu');
  comments.addEventListener('click', (event) => {
    if (event.target.matches('button')) {
      event.preventDefault();
      const username = document.querySelector('.input').value;
      const comment = document.querySelector('.texarea').value;
      const itemId = movie.id;
      const d = new Date();
      // eslint-disable-next-line camelcase
      const creation_date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
      const el = { creation_date, username, comment };

      fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fVSALNrpnLiYk8wyVjPw/comments', {
        method: 'POST',
        body: JSON.stringify({
          item_id: itemId,
          username,
          comment,
        }),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => {
          document.querySelector('.input').value = '';
          document.querySelector('.texarea').value = '';
          response.json();
          commentsdis(el);
          const commentCounter = document.querySelector('.comment-counter');
          commentCounter.innerHTML = `(${counter()})`;
          return response.json();
        })
        .then(() => {
          displayComments(el);
          document.querySelector('.input').value = '';
          document.querySelector('.texarea').value = '';
          const commentCounter = document.querySelector('.comment-counter');
          commentCounter.innerHTML = `(${counter()})`;
        });
    }
  });
  receiveComment(movie.id)
    .then((data) => {
      if (data.error) {
        throw new Error(data.error);
      }
      displayComments(data);
      const commentCounter = document.querySelector('.comment-counter');
      commentCounter.innerHTML = `(${data.length})`;
    });
  const close = document.querySelector('.close');
  close.addEventListener('click', () => {
    comments.innerHTML = '';
  });
};

export default displayCommentinfo;
