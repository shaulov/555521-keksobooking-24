import './popup.js';
import {setFormSubmit, setResetForm} from './form-validate.js';
import {createSimilarAdsOnMap} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js'
import {showSuccessMessage, showErrorMessage} from './modal.js'
'use strict';

const SIMILAR_AD_COUNT = 10;

getData(
  (ads) => {
    createSimilarAdsOnMap(ads.slice(0, SIMILAR_AD_COUNT));
  },
  () => showAlert('Произошла ошибка при загрузке похожих объявлений. Попробуйте обновить страницу позже')
);

setFormSubmit(showSuccessMessage, showErrorMessage);
setResetForm();
