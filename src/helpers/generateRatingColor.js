export const generateRatingColor = (rating) => {
  if (rating >= 7) {
    return '#0f0';
  } else if (rating < 7 && rating >= 5) {
    return '#ff5500';
  } else if (rating < 5) {
    return '#f00';
  }
};
