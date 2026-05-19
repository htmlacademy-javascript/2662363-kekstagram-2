import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { Popups, showPopup } from './popups.js';
import { postPhoto } from './api.js';

const SubmitButtonCaptions = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const formNode = document.querySelector('#upload-select-image');
const inputFileNode = document.querySelector('#upload-file');
const modalNode = document.querySelector('.img-upload__overlay');
const closeButtonNode = document.querySelector('#upload-cancel');
const submitButtonNode = document.querySelector('#upload-submit');

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

const blockSubmit = (isBlocked = true) => {
  submitButtonNode.disabled = isBlocked;
  submitButtonNode.textContent = isBlocked ? SubmitButtonCaptions.SENDING : SubmitButtonCaptions.IDLE;
};

formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    blockSubmit();
    postPhoto(new FormData(formNode))
      .then((response) => {
        if (!response.ok) {
          throw new Error();
        }
        //close form
        closeModal();

        //show success popup
        showPopup(Popups.SUCCESS);
      })
      .finally(() => {
        blockSubmit(false);
      })
      .catch(() => {
        //show error popup
        showPopup(Popups.ERROR);
      });
  }
});
