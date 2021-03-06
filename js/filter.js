const DEFAULT_VALUE = 'any';
const PriceValue = {
  LOW: 10000,
  MIDDLE: [10000, 50000],
  HIGH: 50000,
};

const mapFiltersForm = document.querySelector('.map__filters');
const housingTypeFilter = mapFiltersForm.querySelector('#housing-type');
const housingPriceFilter = mapFiltersForm.querySelector('#housing-price');
const housingRoomsFilter = mapFiltersForm.querySelector('#housing-rooms');
const housingGuestsFilter = mapFiltersForm.querySelector('#housing-guests');
const housingFeaturesFilter = Array.from(mapFiltersForm.querySelector('#housing-features').children);

const isHousingTypeFilter = (ad) => {
  return ad.offer.type === housingTypeFilter.value || housingTypeFilter.value === DEFAULT_VALUE;
};

const isHousingPriceFilter = (ad) => {
  const housingPriceFilterValue = housingPriceFilter.value;
  if (housingPriceFilterValue === 'low') {
    return ad.offer.price < PriceValue[housingPriceFilterValue.toUpperCase()];
  } else if (housingPriceFilter.value === 'middle') {
    return ad.offer.price >= PriceValue[housingPriceFilterValue.toUpperCase()][0] && ad.offer.price <= PriceValue[housingPriceFilterValue.toUpperCase()][1];
  } else if (housingPriceFilter.value === 'high') {
    return ad.offer.price > PriceValue[housingPriceFilterValue.toUpperCase()];
  }

  return housingPriceFilter.value === DEFAULT_VALUE;
};

const isHousingRoomsFilter = (ad) => {
  return ad.offer.rooms === +housingRoomsFilter.value || housingRoomsFilter.value === DEFAULT_VALUE;
};

const isHousingGuestsFilter = (ad) => {
  return ad.offer.guests === +housingGuestsFilter.value || housingGuestsFilter.value === DEFAULT_VALUE;
};

const isHousingFeaturesFilter = (ad) => {
  const checkedHousingFeaturesFilter = housingFeaturesFilter.filter((feature) => feature.checked);
  const isFilter = checkedHousingFeaturesFilter.every((feature) => {
    if (ad.offer.features) {
      return ad.offer.features.includes(feature.value);
    }
  });

  return isFilter;
};

const filterAd = (ad) => {
  return isHousingTypeFilter(ad) && isHousingPriceFilter(ad) && isHousingRoomsFilter(ad) && isHousingGuestsFilter(ad) && isHousingFeaturesFilter(ad);
};

const setMapFilter = (cb) => {
  mapFiltersForm.addEventListener('change', (evt) => {
    evt.preventDefault();
    cb();
  });
};

export {setMapFilter, filterAd};
