export const Popups = {
  ERROR: 'error',
  SUCCESS: 'success'
};
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const bodyNode = document.body;

const templates = {
  [Popups.ERROR]: errorTemplate,
  [Popups.SUCCESS]: successTemplate
};

export const showPopup = (type) => {
  const popup = templates[type].cloneNode(true);
  bodyNode.append(popup);

  const onDocumentKeydown = ({ key }) => {
    if (key === 'Escape') {
      popup.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  };

  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
      document.removeEventListener('keydown', onDocumentKeydown);
    }
  });

  document.addEventListener('keydown', onDocumentKeydown);
};
