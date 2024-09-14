function addErrorMessage(input, errorMessage, config) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.textContent = errorMessage;
  errorMessageElement.classList.add(config.showErrorMessage);
  input.classList.add(config.inputInvalidErrorMessage);
}

function removeErrorMessage(input, errorMessage, config) {
  const errorMessageElement = input.nextElementSibling;
  errorMessageElement.textContent = errorMessage;
  errorMessageElement.classList.remove(config.showErrorMessage);
  input.classList.remove(config.inputInvalidErrorMessage);
}
// habilitar o botao
function enableButton(form, config) {
  const button = form.querySelector(config.popupSaveButton);
  button.classList.remove("form__button_disabled");
  button.removeAttribute("disabled");
}
// disabilidar o botao
function disableButton(form, config) {
  const button = form.querySelector(config.popupSaveButton);
  button.classList.add("form__button-disabled");
  button.setAttribute("disabled", true);
}

function checkIsValid(form, event, config) {
  const input = event.target;
  const isValid = input.validity.valid && !/^\s*$/.test(input.value);
  const errorMessage = input.validationMessage;

  if (!isValid) {
    addErrorMessage(input, errorMessage, config);
    disableButton(form, config);
  } else {
    removeErrorMessage(input, errorMessage, config);
  }
  if (form.checkValidity()) {
    enableButton(form, config);
  }
}

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formElement));

  for (const form of forms) {
    const inputs = Array.from(form.querySelectorAll(config.inputElement));
    for (const input of inputs) {
      input.addEventListener("input", (event) =>
        checkIsValid(form, event, config)
      );
    }
  }
}

enableValidation({
  formElement: "form",
  inputElement: "input",
  showErrorMessage: "form__input-error-message",
  inputInvalidErrorMessage: "form__input-invalid",
  popupSaveButton: ".form__button",
  formAddButton: "#create-button",
});
