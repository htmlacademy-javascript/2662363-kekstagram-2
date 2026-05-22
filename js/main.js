import { getPhotos } from './api.js';
import { renderCards } from './render-cards.js';
import './form.js';
import { showErrorBanner } from './utils.js';
import { initFilter } from './filters.js';

getPhotos()
  .then((photos) => {
    renderCards(photos);
    initFilter(photos);
  })
  .catch(() => {
    showErrorBanner();
  });
