import { isValid, resetValidation } from './validation.js';

const formNode = document.querySelector('#upload-select-image');
const inputFileNode = document.querySelector('#upload-file');
const modalNode = document.querySelector('.img-upload__overlay');
const closeButtonNode = document.querySelector('#upload-cancel');

const closeModal = () => {
  modalNode.classList.add('hidden');

  resetValidation();
};

inputFileNode.addEventListener('change', () => {
  modalNode.classList.remove('hidden');
});

closeButtonNode.addEventListener('click', () => {
  closeModal();
});

formNode.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

