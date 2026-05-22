import { renderCards } from './render-cards.js';
import { debounce } from './utils.js';

const Filters = {
  DEFAULT: 'filter-default',
  DISCUSSED: 'filter-discussed',
  RANDOM: 'filter-random'
};
const ACTIVE_BUTTON_CLASS = 'img-filters__button--active';
const RANDOM_FACTOR = 0.5;
const COUNT_RANDOM_PHOTOS = 10;

const filtersNode = document.querySelector('.img-filters');
const filtersFormNode = document.querySelector('.img-filters__form');

let localPhotos;

const debouncedRenderCards = debounce(renderCards);

const filterPhotos = {
  [Filters.DEFAULT]: () => localPhotos,
  [Filters.DISCUSSED]: () => [...localPhotos].sort((a, b) => b.comments.length - a.comments.length),
  [Filters.RANDOM]: () => [...localPhotos].sort(() => Math.random() - RANDOM_FACTOR).slice(0, COUNT_RANDOM_PHOTOS)
};

export const initFilter = (photos) => {
  localPhotos = [...photos];
  filtersNode.classList.remove('img-filters--inactive');
};

const setActiveButton = (button) => {
  document.querySelector(`.${ACTIVE_BUTTON_CLASS}`).classList.remove(ACTIVE_BUTTON_CLASS);
  button.classList.add(ACTIVE_BUTTON_CLASS);
};

filtersFormNode.addEventListener('click', ({ target }) => {
  const button = target.closest('.img-filters__button');
  if (button) {
    setActiveButton(button);
    const filteredPhotos = filterPhotos[button.id]();
    debouncedRenderCards(filteredPhotos);
  }
});
