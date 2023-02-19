const getArrayOfRandomValues = (length = 100, min = 100, max = 700) => {
  const tempArray = [];
  for (let i = 0; i < length; i++) {
    tempArray.push(getRandomNumber(min, max));
  }
  return tempArray;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export { getArrayOfRandomValues, getRandomNumber };
