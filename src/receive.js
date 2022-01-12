export const receiveComment = async (id) => {
  try {
    const url = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fVSALNrpnLiYk8wyVjPw/comments?item_id=${id}`);
    const comment = await url.json();
    return comment;
  } catch {
    throw new Error('No comment found for this movie');
  }
};

export const receiveReservation = async (id) => {
  try {
    const url = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/fVSALNrpnLiYk8wyVjPw/reservations?item_id=${id}`);
    const Reservation = await url.json();
    return Reservation;
  } catch {
    throw new Error('No comment found for this movie');
  }
};
