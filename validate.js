const forms = Array.from(document.querySelectorAll("form"));
const config = {
  showErrorMessage: "error__message_show_error",
};

function checkIsValid(event) {
  const isValid = event.target.validity.valid;
  const errorMessage = event.target.validationMessage;
  const p = event.target.nextElementSibling;

  if (!isValid) {
    p.textContent = errorMessage;
    p.classList.add("error__message_show_error");
    event.target.classList.add("invalid-input");
    const buttonEdit = document.querySelector(".form__button-edit");
    buttonEdit.classList.add("form__btn_disabled");
    buttonEdit.setAttribute("disabled", true);
    const buttonSave = document.querySelector("#button-save");
    buttonSave.classList.add("form__btn_disabled");
    buttonSave.setAttribute("disabled", true);
  } else {
    p.textContent = errorMessage;
    p.classList.remove("error__message_show_error");
    event.target.classList.remove("invalid-input");
    const buttonEdit = document.querySelector(".form__button-edit");
    buttonEdit.classList.remove("form__btn_disabled");
    buttonEdit.removeAttribute("disabled");
    const buttonSave = document.querySelector("#button-save");
    buttonSave.classList.remove("form__btn_disabled");
    buttonSave.removeAttribute("disabled");
  }
}

for (const form of forms) {
  const inputs = Array.from(form.querySelectorAll("input"));
  for (const input of inputs) {
    input.addEventListener("input", checkIsValid);
  }
}
