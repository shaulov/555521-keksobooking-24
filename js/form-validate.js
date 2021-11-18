import {sendData} from './api.js';
import {resetMap} from './map.js';

const roomToGuest = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};
const housingTypePrice = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const adForm = document.querySelector('.ad-form');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const options = capacity.querySelectorAll('option');
const formType = adForm.querySelector('#type');
const formPrice = adForm.querySelector('#price');
const formTimeSection = adForm.querySelector('.ad-form__element--time');
const formTimeIn = adForm.querySelector('#timein');
const formTimeOut = adForm.querySelector('#timeout');
const formResetButton = adForm.querySelector('.ad-form__reset');
const mapFiltersForm = document.querySelector('.map__filters');

const setCapacityDisable = (roomNumber) => {
  options.forEach((option) => {
    option.selected = false;
    option.disabled = true;
  });

  if (roomNumber === '100') {
    capacity.querySelector(`option[value='${roomToGuest['100']}']`).selected = true;
  } else {
    capacity.querySelector(`option[value='${roomNumber}']`).selected = true;
  }

  roomToGuest[roomNumber].forEach((value) => {
    const currentCapacity = capacity.querySelector(`option[value='${value}']`);
    currentCapacity.disabled = false;
  });
};

setCapacityDisable(roomNumber.value);

roomNumber.addEventListener('change', (evt) => {
  const currentRoomNumber = evt.target.value;

  setCapacityDisable(currentRoomNumber);
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

const resetForm = () => {
  adForm.reset();
  mapFiltersForm.reset();
  formPrice.placeholder = housingTypePrice[formType.value];
  setCapacityDisable(roomNumber.value);
};

const setResetForm = () => {
  formResetButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    resetForm();
    resetMap();
  });
};

export {setFormSubmit, setResetForm, resetForm};
