const TIMEOUT = 5000;
const TIMEOUT_DELAY = 500;

const errorBannerTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const bodyNode = document.body;

export const showErrorBanner = () => {
  const errorBanner = errorBannerTemplate.cloneNode(true);
  bodyNode.append(errorBanner);
  setTimeout(() => {
    errorBanner.remove();
  }, TIMEOUT);
};

export const debounce = (callback, timeoutDelay = TIMEOUT_DELAY) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
