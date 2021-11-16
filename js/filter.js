'use strict';

const TYPE_FILTER = {
  'housing-type': 'type',
  'housing-price': 'price',
  'housing-rooms': 'rooms',
  'housing-guests': 'guests',
  'features': 'features',
}
const PRICE_VALUE = {
  low: 10000,
  middle: [10000, 50000],
  high: 50000,
};
const DEFAULT_VALUE = 'any';

const mapFilters = Array.from(document.querySelector('.map__filters').children);

const filterAdType = (ads, elementFilter) => {
  const typeFilter = TYPE_FILTER[elementFilter.name];
  const valueFilter = elementFilter.value;
  const filteredAds = ads.filter((ad) => {
    if (!ad.offer[typeFilter]) {
      return;
    }
    return ad.offer[typeFilter] === valueFilter || valueFilter === DEFAULT_VALUE;
  });
  return filteredAds;
};

const filterAdPrice = (ads, elementFilter) => {
  const typeFilter = TYPE_FILTER[elementFilter.name];
  const valueFilter = elementFilter.value;
  const filteredAds = ads.filter((ad) => {
    if (!ad.offer[typeFilter]) {
      return;
    }
    if (valueFilter === 'low') {
      return ad.offer[typeFilter] < PRICE_VALUE[valueFilter];
    } else if (valueFilter === 'middle') {
      return ad.offer[typeFilter] >= PRICE_VALUE[valueFilter][0] && ad.offer[typeFilter] <= PRICE_VALUE[valueFilter][1];
    } else if (valueFilter === 'high') {
      return ad.offer[typeFilter] > PRICE_VALUE[valueFilter];
    } else {
      return ad;
    }
  });
  return filteredAds;
};

const filterAdRooms = (ads, elementFilter) => {
  const typeFilter = TYPE_FILTER[elementFilter.name];
  const valueFilter = elementFilter.value;

  const filteredAds = ads.filter((ad) => {
    if (!ad.offer[typeFilter]) {
      return;
    }
    return ad.offer[typeFilter] === +valueFilter || valueFilter === DEFAULT_VALUE;
  });
  return filteredAds;
};

const filterAdGuests = (ads, elementFilter) => {
  const typeFilter = TYPE_FILTER[elementFilter.name];
  const valueFilter = elementFilter.value;

  console.log(typeFilter, valueFilter);

  const filteredAds = ads.filter((ad) => {
    console.log(ad);
    if (!ad.offer[typeFilter]) {
      return;
    }

    return ad.offer[typeFilter] === +valueFilter || valueFilter === DEFAULT_VALUE;
  });
  return filteredAds;
};

const filterAdFeatures = (ads, elementFilter) => {
  if (!elementFilter.checked) {
    return ads;
  }
  const typeFilter = TYPE_FILTER[elementFilter.name];
  const valueFilter = elementFilter.value;

  console.log(valueFilter);

  const filteredAds = ads.filter((ad) => {
    if (!ad.offer[typeFilter]) {
      return;
    }

    return ad.offer[typeFilter].includes(valueFilter);
  });
  return filteredAds;
};

const setMapFilter = (cb, ads) => {
  mapFilters.forEach((mapFilter) => {
    mapFilter.addEventListener('change', (evt) => {
      evt.preventDefault();
      const elementFilter = evt.target;
      switch (elementFilter.name) {
        case 'housing-type':
          cb(filterAdType(ads, elementFilter));
          break;
        case 'housing-price':
          cb(filterAdPrice(ads, elementFilter));
          break;
        case 'housing-rooms':
          cb(filterAdRooms(ads, elementFilter));
          break;
        case 'housing-guests':
          cb(filterAdGuests(ads, elementFilter));
          break;
        case 'features':
          cb(filterAdFeatures(ads, elementFilter));
          break;
        default:
          cb(ads, elementFilter);
      }
    });
  });
}

export {setMapFilter};
