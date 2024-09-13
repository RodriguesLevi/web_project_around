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
function enableButton(item, config) {
  if (item == "name" || item == "description") {
    const button = document.querySelector(config.popupSaveButton);
    button.classList.remove("form__button_disabled");
    button.removeAttribute("disabled");
  }
  if (item == "title" || item == "url") {
    const button = document.querySelector(config.formAddButton);
    button.classList.remove("form__button_disabled");
    button.removeAttribute("disabled");
  }
}
// disabilidar o botao
function disableButton(item, config) {
  if (item == "name" || item == "description") {
    const button = document.querySelector(config.popupSaveButton);
    button.classList.add("form__button-disabled");
    button.setAttribute("disabled", true);
  }
  if (item == "title" || item == "url") {
    const button = document.querySelector(config.formAddButton);
    button.classList.add("form__button-disabled");
    button.setAttribute("disabled", true);
  }
}

function checkIsValid(event, config) {
  const input = event.target;
  const isValid = input.validity.valid && !/^\s*$/.test(input.value);
  const errorMessage = input.validationMessage;

  if (!isValid) {
    addErrorMessage(input, errorMessage, config);
    disableButton(input.id, config);
  } else {
    removeErrorMessage(input, errorMessage, config);
    enableButton(input.id, config);
  }
}

function enableValidation(config) {
  const forms = Array.from(document.querySelectorAll(config.formElement));

  for (const form of forms) {
    const inputs = Array.from(form.querySelectorAll(config.inputElement));
    for (const input of inputs) {
      input.addEventListener("input", (event) => checkIsValid(event, config));
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
