const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100
};

const minusButtonNode = document.querySelector('.scale__control--smaller');
const plusButtonNode = document.querySelector('.scale__control--bigger');
const inputNode = document.querySelector('.scale__control--value');
const previewNode = document.querySelector('.img-upload__preview img');

let currentScale;

const render = () => {
  inputNode.value = `${currentScale}%`;
  previewNode.style.transform = `scale(${currentScale}%)`;
};

minusButtonNode.addEventListener('click', () => {
  currentScale = currentScale - Scale.STEP > Scale.MIN ? currentScale - Scale.STEP : Scale.MIN;
  render();
});


plusButtonNode.addEventListener('click', () => {
  currentScale = currentScale + Scale.STEP < Scale.MAX ? currentScale + Scale.STEP : Scale.MAX;
  render();
});

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};

resetScale();
