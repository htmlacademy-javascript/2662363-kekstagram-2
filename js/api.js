export const getPhotos = () => fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

export const postPhoto = (body) => fetch('https://31.javascript.htmlacademy.pro/kekstagram/',
  {
    method: 'post',
    body
  }
);
