const SERVER = 'https://31.javascript.htmlacademy.pro/kekstagram';
const EndPoints = {
  GET: '/data',
  POST: '/'
};

export const getPhotos = () => fetch(`${SERVER}${EndPoints.GET}`)
  .then((response) => {
    if (!response.ok) {
      throw new Error();
    }
    return response.json();
  });

export const postPhoto = (body) => fetch(`${SERVER}${EndPoints.POST}`,
  {
    method: 'post',
    body
  }
);
