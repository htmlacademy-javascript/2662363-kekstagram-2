import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';

const formNode = document.querySelector('#upload-select-image');
const inputFileNode = document.querySelector('#upload-file');
const modalNode = document.querySelector('.img-upload__overlay');
const closeButtonNode = document.querySelector('#upload-cancel');

const closeModal = () => {
  modalNode.classList.add('hidden');

  formNode.reset();

  resetValidation();
  resetScale();
  resetEffects();
};

inputFileNode.addEventListener('change', () => {
  modalNode.classList.remove('hidden');
});

closeButtonNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

formNode.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});
