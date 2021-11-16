import {setFormSubmit, setResetForm} from './form-validate.js';
import {createSimilarAdsOnMap} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js'
import {showSuccessMessage, showErrorMessage} from './modal.js'
import {setMapFilter} from './filter.js';

'use strict';

getData(
  (ads) => {
    createSimilarAdsOnMap(ads);
    setMapFilter(createSimilarAdsOnMap, ads);
  },
  () => showAlert('Произошла ошибка при загрузке похожих объявлений. Попробуйте обновить страницу позже')
);

setFormSubmit(showSuccessMessage, showErrorMessage);
setResetForm();
