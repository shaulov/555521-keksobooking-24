/* global L:readonly */
import {setDeactivePage, setActivePage} from './form-activate.js';
import {createSimilarAdPopup} from './popup.js';
import {filterAd} from './filter.js';

'use strict';

const MAP_CENTER_LAT = 35.690;
const MAP_CENTER_LNG = 139.692;
const SIMILAR_AD_COUNT = 10;

setDeactivePage();

const map = L.map('map-canvas')
  .on('load', () => {
    setActivePage();
  })
  .setView({
    lat: MAP_CENTER_LAT,
    lng: MAP_CENTER_LNG,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker({
  lat: MAP_CENTER_LAT,
  lng: MAP_CENTER_LNG,
}, {
  draggable: true,
  icon: mainPinIcon,
});

mainPinMarker.addTo(map);

const adressInput = document.querySelector('#address');
adressInput.value = `${MAP_CENTER_LAT}, ${MAP_CENTER_LNG}`;

mainPinMarker.on('moveend', (evt) => {
  const mainMarkerCoords = evt.target.getLatLng();
  adressInput.value = `${mainMarkerCoords.lat.toFixed(3)}, ${mainMarkerCoords.lng.toFixed(3)}`;
});

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (ad) => {
  const pinIcon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker({
    lat: ad['location'].lat,
    lng: ad['location'].lng,
  }, {
    icon: pinIcon,
  });

  marker.bindPopup(createSimilarAdPopup(ad));

  return marker;
}

const createSimilarAdsOnMap = (ads) => {
  markerGroup.clearLayers();
  ads
    .filter(ad => filterAd(ad))
    .slice(0, SIMILAR_AD_COUNT)
    .forEach((ad) => {
      const marker = createMarker(ad);
      marker.addTo(markerGroup);
    });
}

const resetMap = () => {
  mainPinMarker.setLatLng({
    lat: MAP_CENTER_LAT,
    lng: MAP_CENTER_LNG,
  });
  adressInput.value = `${MAP_CENTER_LAT}, ${MAP_CENTER_LNG}`;
  map.closePopup();
}

export {createSimilarAdsOnMap, resetMap};
