const TIMEOUT = 5000;

const errorBannerTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const bodyNode = document.body;

// Функция getRandomNumber
export const getRandomNumber = (min, max) => {
  const left = Math.ceil(Math.min(min, max));
  const right = Math.floor(Math.max(min, max));
  const random = Math.random() * (right - left + 1) + left;
  return Math.floor(random);
};

//Функция getRandomElement
export const getRandomElement = (items) => items[getRandomNumber(0, items.length - 1)];


export const showErrorBannner = () => {
  const errorBanner = errorBannerTemplate.cloneNode(true);
  bodyNode.append(errorBanner);
  setTimeout(() => {
    errorBanner.remove();
  }, TIMEOUT);
};
