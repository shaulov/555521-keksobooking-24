const DEFAULT_VALUE = 'any';
const PRICE_VALUE = {
  low: 10000,
  middle: [10000, 50000],
  high: 50000,
};

const mapFilters = document.querySelector('.map__filters');
const housingTypeFilter = document.querySelector('#housing-type');
const housingPriceFilter = document.querySelector('#housing-price');
const housingRoomsFilter = document.querySelector('#housing-rooms');
const housingGuestsFilter = document.querySelector('#housing-guests');
const housingFeaturesFilter = Array.from(document.querySelector('#housing-features').children);

const filterAd = (ad) => {
  const isHousingTypeFilter = ad.offer.type === housingTypeFilter.value || housingTypeFilter.value === DEFAULT_VALUE;
  let isHousingPriceFilter = true;
  const isHousingRoomsFilter = ad.offer.rooms === +housingRoomsFilter.value || housingRoomsFilter.value === DEFAULT_VALUE;
  const isHousingGuestsFilter = ad.offer.guests === +housingGuestsFilter.value || housingGuestsFilter.value === DEFAULT_VALUE;
  let isHousingFeaturesFilter = true;
  const checkedHousingFeaturesFilter = housingFeaturesFilter.filter((feature) => feature.checked);

  if (housingPriceFilter.value === 'low') {
    isHousingPriceFilter = ad.offer.price < PRICE_VALUE[housingPriceFilter.value];
  } else if (housingPriceFilter.value === 'middle') {
    isHousingPriceFilter = ad.offer.price >= PRICE_VALUE[housingPriceFilter.value][0] && ad.offer.price <= PRICE_VALUE[housingPriceFilter.value][1];
  } else if (housingPriceFilter.value === 'high') {
    isHousingPriceFilter = ad.offer.price > PRICE_VALUE[housingPriceFilter.value];
  } else {
    isHousingPriceFilter = housingPriceFilter.value === DEFAULT_VALUE;
  }

  isHousingFeaturesFilter = checkedHousingFeaturesFilter.every((feature) => {
    if (!ad.offer.features) {
      return;
    }
    return ad.offer.features.includes(feature.value);
  });

  return isHousingTypeFilter && isHousingPriceFilter && isHousingRoomsFilter && isHousingGuestsFilter && isHousingFeaturesFilter;
};

const setMapFilter = (cb) => {
  mapFilters.addEventListener('change', (evt) => {
    evt.preventDefault();
    cb();
  });
};

export {setMapFilter, filterAd};
