import {setDeactivePage, setActivePage} from './form-activate.js';
import './popup.js';
import './form-validate.js';

setDeactivePage();

document.addEventListener('DOMContentLoaded', () => {
  setActivePage();
});
