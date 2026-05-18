/* eslint-disable no-shadow */
import { Effects, EffectsSettings } from './constans.js';

const sliderNode = document.querySelector('.effect-level__slider');
const listNode = document.querySelector('.effects__list');
const previewNode = document.querySelector('.img-upload__preview img');
const valueNode = document.querySelector('.effect-level__value');
const sliderContainerNode = document.querySelector('.effect-level');

let currentEffect = Effects.NONE;
const { slider } = EffectsSettings[currentEffect];

noUiSlider.create(sliderNode, slider);

const render = () => {
  if (currentEffect === Effects.NONE) {
    previewNode.style.filter = '';
    return;
  }
  const { style, units } = EffectsSettings[currentEffect];
  previewNode.style.filter = `${style}(${valueNode.value}${units})`;
};

sliderNode.noUiSlider.on('update', () => {
  valueNode.value = sliderNode.noUiSlider.get();
  render();
});

const updateSlider = () => {
  const {slider} = EffectsSettings[currentEffect];
  sliderNode.noUiSlider.updateOptions(slider);
};

const showSlider = (isVisible = true) => {
  sliderContainerNode.classList.toggle('hidden', !isVisible);
};

listNode.addEventListener('change', ({ target }) => {
  currentEffect = target.value;
  showSlider(!(currentEffect === Effects.NONE));
  updateSlider();
  render();
});

export const resetEffects = () => {
  currentEffect = Effects.NONE;
  showSlider(false);
  render();
};

resetEffects();
