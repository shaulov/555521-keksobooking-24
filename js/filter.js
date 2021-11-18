const DEFAULT_VALUE = 'any';
const PRICE_VALUE = {
  low: 10000,
  middle: [10000, 50000],
  high: 50000,
};

const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = mapFilters.querySelector('#housing-type');
const housingPriceFilter = mapFilters.querySelector('#housing-price');
const housingRoomsFilter = mapFilters.querySelector('#housing-rooms');
const housingGuestsFilter = mapFilters.querySelector('#housing-guests');
const housingFeaturesFilter = Array.from(mapFilters.querySelector('#housing-features').children);

const isHousingTypeFilter = (ad) => {
  return ad.offer.type === housingTypeFilter.value || housingTypeFilter.value === DEFAULT_VALUE;
};

const isHousingPriceFilter = (ad) => {
  if (housingPriceFilter.value === 'low') {
    return ad.offer.price < PRICE_VALUE[housingPriceFilter.value];
  } else if (housingPriceFilter.value === 'middle') {
    return ad.offer.price >= PRICE_VALUE[housingPriceFilter.value][0] && ad.offer.price <= PRICE_VALUE[housingPriceFilter.value][1];
  } else if (housingPriceFilter.value === 'high') {
    return ad.offer.price > PRICE_VALUE[housingPriceFilter.value];
  } else {
    return housingPriceFilter.value === DEFAULT_VALUE;
  }
};

const isHousingRoomsFilter = (ad) => {
  return ad.offer.rooms === +housingRoomsFilter.value || housingRoomsFilter.value === DEFAULT_VALUE;
};

const isHousingGuestsFilter = (ad) => {
  return ad.offer.guests === +housingGuestsFilter.value || housingGuestsFilter.value === DEFAULT_VALUE;
};

const isHousingFeaturesFilter = (ad) => {
  if (!ad.offer.features) {
    return;
  }
  const checkedHousingFeaturesFilter = housingFeaturesFilter.filter((feature) => feature.checked);
  const isFilter = checkedHousingFeaturesFilter.every((feature) => {
    return ad.offer.features.includes(feature.value);
  });

  return isFilter;
};

const filterAd = (ad) => {
  return isHousingTypeFilter(ad) && isHousingPriceFilter(ad) && isHousingRoomsFilter(ad) && isHousingGuestsFilter(ad) && isHousingFeaturesFilter(ad);
};

const setMapFilter = (cb) => {
  mapFilters.addEventListener('change', (evt) => {
    evt.preventDefault();
    cb();
  });
};

export {setMapFilter, filterAd};
