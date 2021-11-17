import {sendData} from './api.js';
import {resetMap} from './map.js';

'use strict';

const adForm = document.querySelector('.ad-form');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const options = capacity.querySelectorAll('option');
const roomToGuest = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};
const formType = document.querySelector('#type');
const housingTypePrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const formPrice = document.querySelector('#price');
const formTimeSection = document.querySelector('.ad-form__element--time');
const formTimeIn = document.querySelector('#timein');
const formTimeOut = document.querySelector('#timeout');

const formResetButton = document.querySelector('.ad-form__reset');

roomNumber.addEventListener('change', (evt) => {
  const currentRoomNumber = evt.target.value;
  options.forEach((option) => {
    option.selected = false;
    option.disabled = true;
  });

  if (currentRoomNumber === '100') {
    capacity.querySelector('option[value=0]').selected = true;
  } else {
    capacity.querySelector(`option[value='${currentRoomNumber}']`).selected = true;
  }

  roomToGuest[currentRoomNumber].forEach((value) => {
    const currentCapacity = capacity.querySelector(`option[value='${value}']`);
    currentCapacity.disabled = false;
  });

});

formPrice.min = housingTypePrice[formType.value];
formPrice.placeholder = housingTypePrice[formType.value];

formType.addEventListener('change', (evt) => {
  const currentType = evt.target.value;
  formPrice.min = housingTypePrice[currentType];
  formPrice.placeholder = housingTypePrice[currentType];
});

formTimeSection.addEventListener('change', (evt) => {
  const currentTime = evt.target.value;
  formTimeIn.querySelector(`option[value='${currentTime}'`).selected = true;
  formTimeOut.querySelector(`option[value='${currentTime}'`).selected = true;
});

const setFormSubmit = (onSuccess, onError) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      () => onSuccess(),
      () => onError(),
      new FormData(evt.target),
    );
  });
};

const setResetForm = () => {
  formResetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    adForm.reset();
    resetMap();
  });
};

export {setFormSubmit, setResetForm};
