const body = document.body;
const modalNode = document.querySelector('.big-picture');
const closeButtonNode = modalNode.querySelector('.big-picture__cancel');
const imageNode = modalNode.querySelector('.big-picture__img img');
const captionNode = modalNode.querySelector('.social__caption');
const likesNode = modalNode.querySelector('.likes-count');
const totalCommentsNode = modalNode.querySelector('.social__comment-total-count');
const commentsListNode = modalNode.querySelector('.social__comments');
const commentTemplate = modalNode.querySelector('.social__comment');

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

export const openModal = ({ url, description, comments, likes }) => {
  showModal();

  imageNode.src = url;
  captionNode.textContent = description;
  likesNode.textContent = likes;
  totalCommentsNode.textContent = comments.length;

  commentsListNode.innerHTML = '';

  const fragment = document.createDocumentFragment();

  comments.forEach(({ avatar, message, name }) => {
    const newCommentNode = commentTemplate.cloneNode(true);
    const avatarNode = newCommentNode.querySelector('.social__picture');
    avatarNode.src = avatar;
    avatarNode.alt = name;
    newCommentNode.querySelector('.social__text').textContent = message;
    fragment.append(newCommentNode);
  });

  commentsListNode.append(fragment);
};

closeButtonNode.addEventListener('click', () => {
  showModal(false);
});
