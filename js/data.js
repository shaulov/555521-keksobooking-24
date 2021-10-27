import {getRandomPositiveFloat, getRandomPositiveInteger, getRandomArrayElement} from './util.js';

'use strict';

const AUTHOR_AVATARS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
  'img/avatars/user09.png',
  'img/avatars/user10.png',
];

const OFFER_TITLES = [
  'Двухэтажный коттедж',
  'Трехкомнатные апартаменты',
  'Светлая двухкомнатная квартира',
  'Пляжный домик',
  'Просторная комната',
  'Двухкомнатная квартира',
  'Светлая однушка',
  'Уютная студия',
  'Однушка с утепленной лоджией',
  'Роскошные апартаменты',
];

const OFFER_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const OFFER_CHECKTIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const OFFER_FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const OFFER_PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const OFFER_DESCRIPTIONS = [
  'Просторное светлое жилье сбольшим количеством спальных мест.',
  'Отличные апартаменты с видом на закат.',
  'Уютная квартира с джакузи.',
  'Однушка с утепленной лоджией в развитом районе.',
  'Пляжный домик с очень красивым видом.',
  'Отличные апартаменты в развитом районе.',
  'Просторное светлое жилье с джакузи.',
  'Трехкомнатные апартаменты в центре города.',
  'Двухэтажный коттедж в тихой лесистой местности',
  'Отличные апартаменты с очень красивым видом.',
];

const MIN_LOCATION_COORDINATE = 35.65000;
const MAX_LOCATION_COORDINATE = 35.70000;
const DECIMAL_POINTS_COUNT = 5;
const MIN_PRICE = 1000;
const MAX_PRICE = 10000;
const MIN_ROOMS_COUNT = 1;
const MAX_ROOMS_COUNT = 5;
const MIN_GUESTS_COUNT = 1;
const MAX_GUESTS_COUNT = 7;

const getAuthorAvatar = (number) => {
  return AUTHOR_AVATARS[number];
};

const getOfferFeatures = () => {
  let features = OFFER_FEATURES.slice();
  for (let i = 0; i < getRandomPositiveInteger(0, OFFER_FEATURES.length - 1); i++) {
    features.splice(getRandomPositiveInteger(0, OFFER_FEATURES.length - 1), 1);
  }
  return features;
};

const getOfferPhotos = () => {
  return Array.from({length: Math.floor(Math.random() * 10)}, () => OFFER_PHOTOS[getRandomPositiveInteger(0, OFFER_PHOTOS.length - 1)]);
}

const createSimilarAdNearby = (numberOfAd) => {

  return {
    author: {
      avatar: getAuthorAvatar(numberOfAd),
    },
    offer: {
      title: getRandomArrayElement(OFFER_TITLES),
      address: '',
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(OFFER_TYPES),
      rooms: getRandomPositiveInteger(MIN_ROOMS_COUNT, MAX_ROOMS_COUNT),
      guests: getRandomPositiveInteger(MIN_GUESTS_COUNT, MAX_GUESTS_COUNT),
      checkin: getRandomArrayElement(OFFER_CHECKTIMES),
      checkout: getRandomArrayElement(OFFER_CHECKTIMES),
      features: getOfferFeatures(),
      description: getRandomArrayElement(OFFER_DESCRIPTIONS),
      photos: getOfferPhotos(),
    },
    location: {
      lat: getRandomPositiveFloat(MIN_LOCATION_COORDINATE, MAX_LOCATION_COORDINATE, DECIMAL_POINTS_COUNT),
      lng: getRandomPositiveFloat(MIN_LOCATION_COORDINATE, MAX_LOCATION_COORDINATE, DECIMAL_POINTS_COUNT),
    },
  }
}

const SIMILAR_AD_COUNT = 1;
const SIMILAR_AD = [];

for (let currentObject = 0; currentObject < SIMILAR_AD_COUNT; currentObject++) {
  SIMILAR_AD.push(createSimilarAdNearby(currentObject));
  SIMILAR_AD[currentObject]['offer'].address = `${SIMILAR_AD[currentObject]['location'].lat}, ${SIMILAR_AD[currentObject]['location'].lng}`;
}

export {SIMILAR_AD};
