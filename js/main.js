import {setFormSubmit, setResetForm} from './form-validate.js';
import {createSimilarAdsOnMap} from './map.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {showSuccessMessage, showErrorMessage} from './modal.js';
import {setMapFilter} from './filter.js';
import {debounce} from './utils/debounce.js';

'use strict';

const RENDER_DELAY = 500;

getData(
  (ads) => {
    createSimilarAdsOnMap(ads);
    setMapFilter(debounce(
      () => createSimilarAdsOnMap(ads),
      RENDER_DELAY,
    ));
  },
  () => showAlert('Произошла ошибка при загрузке похожих объявлений. Попробуйте обновить страницу позже'),
);

setFormSubmit(showSuccessMessage, showErrorMessage);
setResetForm();
