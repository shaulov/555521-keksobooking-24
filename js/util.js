'use strict';
// Функции getRandomPositiveFloat и getRandomPositiveInteger взяты из интернета и доработаны
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random

function getRandomPositiveFloat (a, b, digits = 1) {
  const lower = Math.min(Math.abs(a), Math.abs(b));
  const upper = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (upper - lower) + lower;

  return result.toFixed(digits);
}

export const randomPositiveFloat = getRandomPositiveFloat();

function getRandomPositiveInteger (a, b) {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

export const randomPositiveInteger = getRandomPositiveInteger();

const getRandomArrayElement = (array) => {
  return array[randomPositiveInteger(0, array.length - 1)];
};

export const randomArrayElement = getRandomArrayElement();
