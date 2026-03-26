// Функции для тренеровки
// Задача 1
// Функция для проверки длины строки.
// eslint-disable-next-line no-unused-vars
const checkLength = (str = '', maxLength = 1) => str.length <= maxLength;
//---------------------------------------------------------------------------

// Задача 2
//Функция для проверки, является ли строка палиндромом.
// eslint-disable-next-line no-unused-vars
const verifyPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toUpperCase();
  const reverseString = normalizedString.split('').reverse().join('');
  return reverseString === normalizedString;
};

// Задача 3
// Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:
// eslint-disable-next-line no-unused-vars
function stringToNumber = (str) => {
  const digits = [...str].filter((item) => item >= '0' && item <= '9').join('');
  return parseInt(digits, 10);
};
