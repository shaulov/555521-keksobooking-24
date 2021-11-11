'use strict';
// Функции getRandomPositiveFloat и getRandomPositiveInteger взяты из интернета и доработаны
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

const getRandomPositiveFloat = (a, b, digits = 1) => {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

export {getRandomPositiveFloat};

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

export {getRandomPositiveInteger};

const getRandomArrayElement = (array) => {
  return array[getRandomPositiveInteger(0, array.length - 1)];
};

export {getRandomArrayElement};

const setDisabledFormElements = (disabledObject) => {
  for (let element of disabledObject) {
    element.disabled = true;
  }
}

export {setDisabledFormElements};


const setUndisableFormElements = (undisabledObject) => {
  for (let element of undisabledObject) {
    element.disabled = false;
  }
}

export {setUndisableFormElements};

// Позаимствовано из демонстрации курса
const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

export {showAlert};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

export {isEscapeKey};
