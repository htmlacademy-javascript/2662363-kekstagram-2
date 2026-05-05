/* eslint-disable no-unused-vars */
const formNode = document.querySelector('#upload-select-image');
const descriptionNode = formNode.querySelector('.text__description');
const hashtagsNode = formNode.querySelector('.text__hashtags');

const MAX_DESCRIPTION = 140;
const HASHTAG_FORMULA = /^#[a-zа-я0-9]{1,19}$/i;
const MAX_HASHTAGS = 5;

const validation = new Pristine(formNode, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
});

const getHashtags = (text) => text.trim().toLowerCase().split(' ').filter((item) => item.length);

const checkDescription = (value) => value.length <= MAX_DESCRIPTION;

const checkHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }

  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

const checkHashtagsLength = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const checkUniquesHashtags = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
};

validation.addValidator (
  descriptionNode,
  checkDescription,
  `Длина описания фотографии не должна превышать ${MAX_DESCRIPTION}`
);

validation.addValidator (
  hashtagsNode,
  checkHashtags,
  'Невалидный хештег'
);

validation.addValidator(
  hashtagsNode,
  checkHashtagsLength,
  `Количество хештегов не должно превышать ${MAX_HASHTAGS}`,
);

validation.addValidator(
  hashtagsNode,
  checkUniquesHashtags,
  'Хештеги не должны повторяться',
);

export const isValid = () => validation.validate();
export const resetValidation = () => {
  validation.reset();
};

