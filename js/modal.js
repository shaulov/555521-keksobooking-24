import {isEscapeKey} from './util.js';
import {resetMap} from './map.js';

const adForm = document.querySelector('.ad-form');
const mapFiltersForm = document.querySelector('.map__filters');

const templateSuccessMessage = document.querySelector('#success').content;
const successMessage = templateSuccessMessage.children[0];

const templateErrorMessage = document.querySelector('#error').content;
const errorMessage = templateErrorMessage.children[0];
const errorButtonClose = errorMessage.querySelector('.error__button');

const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
};

const onMessageClick = () => {
  closeMessage();
};

const showSuccessMessage = () => {
  document.body.appendChild(successMessage);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onMessageClick);
  adForm.reset();
  mapFiltersForm.reset();
  resetMap();
};

const showErrorMessage = () => {
  document.body.appendChild(errorMessage);
  errorButtonClose.addEventListener('click', onMessageClick);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onMessageClick);
};

const closeMessage = () => {
  document.querySelector('body').lastChild.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onMessageClick);
};

export {showSuccessMessage, showErrorMessage};
