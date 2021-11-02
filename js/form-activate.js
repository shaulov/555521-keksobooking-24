import {setDisabledFormElements, setUndisableFormElements} from './util.js';

'use strict';

const adForm = document.querySelector('.ad-form');
const adFormElements = adForm.children;
const mapFiltersForm = document.querySelector('.map__filters');
const mapFiltersFormElements = mapFiltersForm.children;

const setDeactivePage = () => {
  adForm.classList.add('ad-form--disabled');
  setDisabledFormElements(adFormElements);

  mapFiltersForm.classList.add('map__filters--disabled');
  setDisabledFormElements(mapFiltersFormElements);
}

const setActivePage = () => {
  adForm.classList.remove('ad-form--disabled');
  setUndisableFormElements(adFormElements);

  mapFiltersForm.classList.remove('map__filters--disabled');
  setUndisableFormElements(mapFiltersFormElements);
}

export {setDeactivePage, setActivePage};
