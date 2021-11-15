'use strict';

const DEFAULT_VALUE = 'any';

const housingTypeFilter = document.querySelector('#housing-type');

const filterAd = (ad) => {
  if (!ad.offer) {
    return;
  }
  return ad.offer.type === housingTypeFilter.value || housingTypeFilter.value === DEFAULT_VALUE;
};

const setHousingType = (cb) => {
  housingTypeFilter.addEventListener('change', () => {
    cb();
  });
}

export {setHousingType, filterAd};
