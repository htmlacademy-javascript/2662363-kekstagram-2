import { getPhotos } from './data.js';
import { renderCards } from './render-cards.js';
import './form.js';

// eslint-disable-next-line no-unused-vars
const photos = getPhotos(25);
renderCards(photos);
