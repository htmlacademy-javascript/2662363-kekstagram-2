export const Effects = {
  CHROME: 'chrome',
  SEPIA: 'sepia',
  PHOBOS: 'phobos',
  HEAT: 'heat',
  NONE: 'none',
  MARVIN: 'marvin',
};

export const EffectsSettings = {
  [Effects.CHROME]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'grayscale',
    units: '',
  },
  [Effects.SEPIA]: {
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    style: 'sepia',
    units: '',
  },
  [Effects.PHOBOS]: {
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'blur',
    units: 'px',
  },
  [Effects.HEAT]: {
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    style: 'brightness',
    units: '',
  },
  [Effects.NONE]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
      connect: 'lower',
    },
    style: '',
    units: '',
  },
  [Effects.MARVIN]: {
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    style: 'invert',
    units: '%',
  },
};


