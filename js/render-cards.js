/* eslint-disable no-unused-vars */
import { openModal } from './big-picture.js';

/* eslint-disable no-console */
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');
const cardsContainer = document.querySelector('.pictures');

let localPhotos;

export const renderCards = (pictures) => {
  localPhotos = [...pictures];
  const fragment = document.createDocumentFragment();
  pictures.forEach(({ url, description, comments, likes, id }) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    card.querySelector('.picture__comments').textContent = comments.length;
    card.querySelector('.picture__likes').textContent = likes;
    card.dataset.id = id;
    fragment.append(card);
  });
  cardsContainer.append(fragment);
};

cardsContainer.addEventListener('click', (evt) => {
  const card = evt.target.closest('.picture');
  if (card) {
    const id = Number(card.dataset.id);
    const photo = localPhotos.find((item) => item.id === id);
    if (photo) {
      openModal(photo);
    }
  }
});

