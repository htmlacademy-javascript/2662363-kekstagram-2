/* eslint-disable no-unused-vars */
const COMMENTS_STEP = 5;
const body = document.body;
const modalNode = document.querySelector('.big-picture');
const closeButtonNode = modalNode.querySelector('.big-picture__cancel');
const imageNode = modalNode.querySelector('.big-picture__img img');
const captionNode = modalNode.querySelector('.social__caption');
const likesNode = modalNode.querySelector('.likes-count');
const totalCommentsNode = modalNode.querySelector(
  '.social__comment-total-count',
);
const commentsListNode = modalNode.querySelector('.social__comments');
const commentTemplate = modalNode.querySelector('.social__comment');
const commetLoaderNode = modalNode.querySelector('.comments-loader');
const commentsShownNode = modalNode.querySelector(
  '.social__comment-shown-count',
);

let localComments;
let renderedComments;

const showModal = (isVisible = true) => {
  if (isVisible) {
    modalNode.classList.remove('hidden');
    body.classList.add('modal-open');

    // eslint-disable-next-line no-use-before-define
    document.addEventListener('keydown', onDocumentKeydown);
    return;
  }
  modalNode.classList.add('hidden');
  body.classList.remove('modal-open');
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', onDocumentKeydown);
};

const onDocumentKeydown = (evt) => {
  if (evt.key === 'Escape') {
    showModal(false);
  }
};

const renderStatistic = () => {
  commentsShownNode.textContent = renderedComments;
};

const renderLoader = () => {
  if (localComments.length) {
    commetLoaderNode.classList.remove('hidden');
    return;
  }
  commetLoaderNode.classList.add('hidden');
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();

  localComments
    .splice(0, COMMENTS_STEP)
    .forEach(({ avatar, message, name }) => {
      const newCommentNode = commentTemplate.cloneNode(true);
      const avatarNode = newCommentNode.querySelector('.social__picture');
      avatarNode.src = avatar;
      avatarNode.alt = name;
      newCommentNode.querySelector('.social__text').textContent = message;
      fragment.append(newCommentNode);

      renderedComments++;
    });
  commentsListNode.append(fragment);
  renderStatistic();
  renderLoader();
};

const render = ({ url, description, likes }) => {
  imageNode.src = url;
  captionNode.textContent = description;
  likesNode.textContent = likes;
  totalCommentsNode.textContent = localComments.length;

  commentsListNode.innerHTML = '';
  renderComments();
};

export const openModal = ({ url, description, comments, likes }) => {
  showModal();
  localComments = [...comments];
  renderedComments = 0;
  render({ url, description, comments, likes });
};

closeButtonNode.addEventListener('click', () => {
  showModal(false);
});

commetLoaderNode.addEventListener('click', () => {
  renderComments();
});
