const receiveComment = async (id) => {
  try {
    const url = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fVSALNrpnLiYk8wyVjPw/comments?item_id=${id}`);
    const comment = await url.json();
    return comment;
  } catch {
    throw new Error('No comment found for this movie');
  }
};

export default receiveComment;
