import { getPhotos } from './api.js';
import { renderCards } from './render-cards.js';
import './form.js';
import { showErrorBanner } from './utils.js';

getPhotos()
  .then((photos) => {
    //set filters
    renderCards(photos);
  })
  .catch(() => {
    showErrorBanner();
  });
