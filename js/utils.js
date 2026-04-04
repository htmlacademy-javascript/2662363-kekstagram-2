// Функция getRandomNumber
export const getRandomNumber = (min, max) => {
  const left = Math.ceil(Math.min(min, max));
  const right = Math.floor(Math.max(min, max));
  const random = Math.random() * (right - left + 1) + left;
  return Math.floor(random);
};

//Функция getRandomElement
export const getRandomElement = (items) => items[getRandomNumber(0, items.length - 1)];
