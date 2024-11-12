export default class FormValidator {
  constructor(config, formSelector) {
    this._config = config;
    this._formSelector = formSelector;
  }
  _addErrorMessage(errorMessage) {
    const errorMessageElement = this._input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    errorMessageElement.classList.add(this._config.showErrorMessage);
    this._input.classList.add(this._config.inputInvalidErrorMessage);
  }

  _removeErrorMessage() {
    const errorMessageElement = this._input.nextElementSibling;
    errorMessageElement.textContent = "";
    errorMessageElement.classList.remove(this._config.showErrorMessage);
    this._input.classList.remove(this._config.inputInvalidErrorMessage);
  }
  // habilitar o botao
  _enableButton(form) {
    const button = form.querySelector(this._config.popupSaveButton);
    button.classList.remove("form__button-disabled");
    button.removeAttribute("disabled");
  }
  // disabilidar o botao
  _disableButton(form) {
    const button = form.querySelector(this._config.popupSaveButton);
    button.classList.add("form__button-disabled");
    button.setAttribute("disabled", true);
  }

  _checkIsValid(form, input) {
    this._input = input;
    const isValid =
      this._input.validity.valid && !/^\s*$/.test(this._input.value);
    const errorMessage = this._input.validationMessage;

    if (!isValid) {
      this._addErrorMessage(errorMessage);
      this._disableButton(form);
    } else {
      this._removeErrorMessage();
    }
    if (form.checkValidity()) {
      this._enableButton(form);
    }
  }

  _getForm() {
    const form = document.querySelector(this._formSelector);
    return form;
  }

  _setEventListeners() {
    this._disableButton(this._form);
    const button = this._form.querySelector(this._config.popupSaveButton);
    const inputs = Array.from(
      this._form.querySelectorAll(this._config.inputElement)
    );
    inputs.forEach((input) =>
      input.addEventListener("input", () =>
        this._checkIsValid(this._form, input)
      )
    );
  }

  enableValidation() {
    this._form = this._getForm();
    this._form.addEventListener("submit", (e) => {
      e.preventDefault();
    });

    this._setEventListeners();
  }
}
