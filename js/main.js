import {setFormSubmit, setResetForm} from './form-validate.js';
import {showSuccessMessage, showErrorMessage} from './modal.js';
import './avatar.js';

setFormSubmit(showSuccessMessage, showErrorMessage);
setResetForm();
