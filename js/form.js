import { isValid, resetValidation } from './validation.js';
import { resetScale } from './scale.js';
import { resetEffects } from './effects.js';
import { Popups, showPopup } from './popups.js';
import { postPhoto } from './api.js';

const SubmitButtonCaptions = {
  IDLE: 'Опубликовать',
  SENDING: 'Публикую...'
};

const bodyNode = document.body;
const formNode = document.querySelector('#upload-select-image');
const inputFileNode = document.querySelector('#upload-file');
const modalNode = document.querySelector('.img-upload__overlay');
const closeButtonNode = document.querySelector('#upload-cancel');
const submitButtonNode = document.querySelector('#upload-submit');
const previewNode = document.querySelector('.img-upload__preview img');
const previewRadiosNode = document.querySelectorAll('.effects__preview');
const descriptionNode = formNode.querySelector('.text__description');
const hashtagsNode = formNode.querySelector('.text__hashtags');

const closeModal = () => {
  showModal(false);
  formNode.reset();
  resetValidation();
  resetScale();
  resetEffects();
};

function showModal(isVisible = true) {
  if (isVisible) {
    modalNode.classList.remove('hidden');
    bodyNode.classList.add('modal-open');

    document.addEventListener('keydown', onDocumentKeydown);
    return;
  }
  modalNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');

  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    if (!document.querySelector(`.${Popups.ERROR}`)
      && document.activeElement !== descriptionNode
      && document.activeElement !== hashtagsNode) {
      closeModal();
    }
  }
}

inputFileNode.addEventListener('change', ({ target }) => {
  const file = target.files[0];
  const url = URL.createObjectURL(file);
  previewNode.src = url;

  previewRadiosNode.forEach((item) => {
    item.style.backgroundImage = `url(${url})`;
  });
  showModal();
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
        closeModal();
        showPopup(Popups.SUCCESS);
      })
      .finally(() => {
        blockSubmit(false);
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      });
  }
});
