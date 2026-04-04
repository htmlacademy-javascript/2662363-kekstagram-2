import { DESCRIPTIONS, MAX_COMMENTS, MAX_LIKES, MIN_COMMENTS, MIN_LIKES, NAMES, PHRASES } from './constans.js';
import { getRandomElement, getRandomNumber } from './utils.js';

// Функция для генерации текста комментария (1 или 2 предложения)
const generateMessage = () => {
  const numberOfPhrases = getRandomNumber(1, 2);

  if (numberOfPhrases === 1) {
    return getRandomElement(PHRASES);
  } else {
    const firstPhrase = getRandomElement(PHRASES);
    let secondPhrase = getRandomElement(PHRASES);
    // Чтобы предложения не были одинаковыми
    while (firstPhrase === secondPhrase) {
      secondPhrase = getRandomElement(PHRASES);
    }

    return `${firstPhrase} ${secondPhrase}`;
  }
};

// Счётчик для уникальных id комментариев
let commentId = 1;

// Функция getComments
const getComments = () => {
  const n = getRandomNumber(MIN_COMMENTS, MAX_COMMENTS);
  const comments = [];

  for (let i = 0; i < n; i++) {
    comments.push({
      id: commentId++, // уникальный id, увеличивается после каждого использования
      avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
      message: generateMessage(), // случайное сообщение из 1-2 фраз
      name: getRandomElement(NAMES), // случайное имя из списка
    });
  }

  return comments;
};

// Функция getPhoto
const getPhoto = (i) => ({
  id: i,
  url: `photos/${i}.jpg`,
  description: getRandomElement(DESCRIPTIONS),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: getComments(),
});

// функция getPhotos
export const getPhotos = (n) => {
  const photos = [];
  for (let i = 1; i <= n; i++) {
    photos.push(getPhoto(i)); // getPhotos(i)
  }
  return photos;
};
