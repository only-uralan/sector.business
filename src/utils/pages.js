export const getPagesCount = (totalPages) => {
  return Math.ceil(totalPages / 10);
};

export const getPagesArray = (total) => {
  let result = [];
  for (let i = 0; i < total; i++) {
    result.push(i + 1);
  }
  return result;
};
