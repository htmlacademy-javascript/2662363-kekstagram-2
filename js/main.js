import { getPhotos } from './data.js';
import { renderCards } from './render-cards.js';
import './form.js';


const photos = getPhotos(25);
renderCards(photos);
