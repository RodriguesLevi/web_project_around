import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import {
  popupEdit,
  editbutton,
  buttonclose,
  buttonSave,
  cardsAdd,
  formAddCard,
  popupImage,
  popupButtonImage,
  buttonAdd,
  popupAddCard,
  buttonCloseAdd,
  popup,
  initialCards,
  openPopup,
  closePopup,
  addNames,
  addImage,
} from "./utils.js";

// evento para fechar popup de editar perfil
buttonclose.addEventListener("click", () => closePopup(popupEdit));

buttonSave.addEventListener("click", addNames);

// // fechar o popup
buttonCloseAdd.addEventListener("click", () => closePopup(popupAddCard));

formAddCard.addEventListener("submit", addImage);

initialCards.forEach((card) => {
  const newCard = new Card({
    card,
    cardSelector: "#card-template",
    popupCardImage: ".popup__image-open",
    popupCardTitle: ".popup__image-name",
  }).generateCard();
  cardsAdd.prepend(newCard);
});

// fecha popup de imagem
popupButtonImage.addEventListener("click", () => closePopup(popupImage));

// FUNÇÃO PARA SAIR APERTANDO O "ESC"
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopup(popupAddCard);
    closePopup(popupEdit);
    closePopup(popupImage);
  }
});

// FUNÇÃO PARA SAIR APERTANDO O "click"

popup.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__container")) {
    closePopup(popupImage);
  }
});
popupEdit.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__container")) {
    closePopup(popupEdit);
  }
});

popupAddCard.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__container")) {
    closePopup(popupAddCard);
  }
});

//                   valida os formularios

const userForm = new FormValidator(
  {
    formElement: "form",
    inputElement: "input",
    showErrorMessage: "form__input-error-message",
    inputInvalidErrorMessage: "form__input-invalid",
    popupSaveButton: ".form__button",
    formAddButton: "#create-button",
  },
  "#user-form"
);

const cardForm = new FormValidator(
  {
    formElement: "form",
    inputElement: "input",
    showErrorMessage: "form__input-error-message",
    inputInvalidErrorMessage: "form__input-invalid",
    popupSaveButton: ".form__button",
    formAddButton: "#create-button",
  },
  "#card-form"
);

// evento para abrir popup de editar perfil
editbutton.addEventListener("click", () => {
  openPopup(popupEdit);
  userForm.enableValidation();
});

//  abrir o popup para adicionar imagens
buttonAdd.addEventListener("click", () => {
  openPopup(popupAddCard);
  cardForm.enableValidation();
});
