const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const DESCRIPTION = [
  'Красивый вид',
  'Указатель',
  'Море',
  'Девушка',
  'Суп-улыбка',
  'Спортивная-машина',
  'Клубника на тарелке',
  'Морс',
  'Самолет над пляжем',
  'Отдел для обуви',
  'Ограждение на пляже',
  'Спорткар Ауди',
  'Салат',
  'Кот ролл',
  'Модные сапоги',
  'Вид с высоты',
  'Оркестр',
  'Ретроавтомобиль',
  'Женщина в тапочках',
  'Пальмы в зоне отеля',
  'Тарелка с едой',
  'Закат на море',
  'Краб',
  'Фаер-шоу',
  'Тропики',
];

// Функция getRandomNumber
const getRandomNumber = (min, max) => {
  const left = Math.ceil(Math.min(min, max));
  const right = Math.floor(Math.max(min, max));
  const random = Math.random() * (right - left + 1) + left;
  return Math.floor(random);
};

//Функция getRandomElement
const getRandomElement = (items) => items[getRandomNumber(0, items.length - 1)];

// Массив имён для комментаторов
const NAMES = [
  'Александр',
  'Мария',
  'Иван',
  'Екатерина',
  'Дмитрий',
  'Анна',
  'Сергей',
  'Ольга',
  'Алексей',
  'Наталья',
  'Артём',
  'Елена',
  'Максим',
  'Татьяна',
  'Владимир',
];

// Массив фраз для комментариев
const PHRASES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

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
  description: getRandomElement(DESCRIPTION),
  likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
  comments: getComments(),
});

// Исправленная функция getPhotos (была рекурсия, теперь правильно)
const getPhotos = (n) => {
  const photos = [];
  for (let i = 1; i <= n; i++) {
    photos.push(getPhoto(i)); // было getPhotos(i) — это вызывало рекурсию
  }
  return photos;
};

// eslint-disable-next-line no-console
console.log(getPhotos(25));
