import { openModal } from './big-picture.js';

/* eslint-disable no-console */
const cardTemplate = document.querySelector('#picture').content.querySelector('.picture');
const cardsContainer = document.querySelector('.pictures');

export const renderCards = (pictures) => {
  console.log(pictures);
  const fragment = document.createDocumentFragment();
  pictures.forEach(({url, description, comments, likes}) => {
    const card = cardTemplate.cloneNode(true);
    const image = card.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    card.querySelector('.picture__comments').textContent = comments.length;
    card.querySelector('.picture__likes').textContent = likes;

    card.addEventListener('click', () => {
      openModal({ url, description, comments, likes });
    });

    fragment.append(card);
  });
  cardsContainer.append(fragment);
};
