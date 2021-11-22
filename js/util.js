const ALERT_SHOW_TIME = 5000;

const setDisabledFormElements = (disabledObject) => {
  for (const element of disabledObject) {
    element.disabled = true;
  }
};

export {setDisabledFormElements};


const setUndisableFormElements = (undisabledObject) => {
  for (const element of undisabledObject) {
    element.disabled = false;
  }
};

export {setUndisableFormElements};

// Позаимствовано из демонстрации курса
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {showAlert};

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

export {isEscapeKey};
