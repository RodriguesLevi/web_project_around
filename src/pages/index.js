import "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import {
  editbutton,
  buttonAdd,
  initialCards,
  addNames,
  config,
} from "../components/utils.js";

// criar instancias de Api
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-14",
  headers: {
    authorization: "d667c682-8c33-4a60-879f-a362c285fdc1",
    "Content-Type": "application/json",
  },
});

// Buscar Usuario
let userOwner;
api
  .getUsers()
  .then((res) => res.json())
  .then((users) => {
    userOwner = users.find((user) => user.id == config, ownerId);
    // console.log("eu mesmo", userOwner);
  })
  .catch((error) => {
    console.log(`[GET Users] - Error: ${error}`);
  });

// Instancia o PopupWithForm para edição de perfil
const popupEditProfile = new PopupWithForm(".popup-edit", addNames, ".form");
popupEditProfile.setEventListeners();

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

// evento para abrir popup de editar perfil
editbutton.addEventListener("click", () => {
  popupEditProfile.open();
  userForm.enableValidation();
});

// adicionando nome e imagem ao cartão
function addImage(values) {
  if (values.title != "" && values.url != "") {
    renderCards({ name: values.title, link: values.url });
  }
}

// evento para abrir popup de adicionar cartão
const popupAddCard = new PopupWithForm(".popup-add", addImage, ".form-add");
popupAddCard.setEventListeners();

//                   valida os formularios

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

//  abrir o popup para adicionar imagens
buttonAdd.addEventListener("click", () => {
  popupAddCard.open();
  cardForm.enableValidation();
});

// Instancia o PopupWithImage
const popupWithImage = new PopupWithImage(
  ".popup-image",
  ".popup__image-open",
  ".popup__image-name"
);
popupWithImage.setEventListeners();

function renderCards(card) {
  const newCard = new Card({
    card,
    cardSelector: config.cardTemplateId,
    handleCardClick: (title, image) => popupWithImage.open(title, image),
  }).generateCard();

  sectionCards.setItem(newCard);
}
let sectionCards;
api
  .get("/cards")
  .then((res) => res.json())
  .then((cards) => {
    sectionCards = new Section({ items: cards, acao: renderCards }, config);
    sectionCards.renderItems();
  });
