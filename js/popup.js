const OfferTypeValues = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
  HOTEL: 'Отель',
};

const template = document.querySelector('#card').content;
const similarAdTemplate = template.children[0];

const createSimilarAdPopup = (ad) => {
  const {author, offer} = ad;

  const adElement = similarAdTemplate.cloneNode(true);

  author.avatar ? adElement.querySelector('.popup__avatar').src = author.avatar : adElement.querySelector('.popup__avatar').style.display = 'none';
  offer.title ? adElement.querySelector('.popup__title').textContent = offer.title : adElement.querySelector('.popup__title').style.display = 'none';
  offer.address ? adElement.querySelector('.popup__text--address').textContent = offer.address : adElement.querySelector('.text--address').style.display = 'none';
  offer.price ? adElement.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь` : adElement.querySelector('.popup__text--price').style.display = 'none';
  offer.type ? adElement.querySelector('.popup__type').textContent = OfferTypeValues[offer.type.toUpperCase()] : adElement.querySelector('.popup__type').style.display = 'none';
  (offer.rooms || offer.guests) ? adElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`: adElement.querySelector('.popup__text--capacity').style.display = 'none';
  (offer.checkin || offer.checkout) ? adElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`: adElement.querySelector('.popup__text--time').style.display = 'none';
  offer.description ? adElement.querySelector('.popup__description').textContent = offer.description : adElement.querySelector('.popup__description').style.display = 'none';

  const featuresContainer = adElement.querySelector('.popup__features');
  const featuresList = featuresContainer.querySelectorAll('.popup__feature');
  if (offer.features) {
    const modifiers = offer.features.map((feature) => {
      return `popup__feature--${feature}`;
    });

    featuresList.forEach((feature) => {
      const modifier = feature.classList[1];

      if (!modifiers.includes(modifier)) {
        feature.remove();
      }

      if (!modifiers.length) {
        featuresContainer.style.display = 'none';
      }
    });
  } else {
    featuresContainer.style.display = 'none';
  }

  const photosList = adElement.querySelector('.popup__photos');
  if (offer.photos) {
    const fragment = document.createDocumentFragment();
    offer.photos.forEach((photoSrc) => {
      const adPhoto = adElement.querySelector('.popup__photo').cloneNode(true);
      adPhoto.src = photoSrc;
      fragment.appendChild(adPhoto);
    });
    photosList.innerHTML = '';
    photosList.appendChild(fragment);
  } else {
    photosList.style.display = 'none';
  }

  return adElement;
};

export {createSimilarAdPopup};
