import { getPhotos } from './data.js';
import { renderCards } from './render-cards.js';

// eslint-disable-next-line no-unused-vars
const photos = getPhotos(25);
renderCards(photos);
// console.log(photos);

// отрисовка миниатюр
//блоки счётчика комментариев

