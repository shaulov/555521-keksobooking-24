import {setFormSubmit, setResetForm} from './form-validate.js';
import {showSuccessMessage, showErrorMessage} from './modal.js';

setFormSubmit(showSuccessMessage, showErrorMessage);
setResetForm();
