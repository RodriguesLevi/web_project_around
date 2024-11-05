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
  addNames,
  config,
  profileEditeAvt,
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
    userOwner = users;
  })
  .catch((error) => {
    console.log(`[GET Users] - Error: ${error}`);
  });

// Instancia o PopupWithForm para edição de perfil
const popupEditProfile = new PopupWithForm(".popup-edit", addNames, ".form");
popupEditProfile.setEventListeners();

// evento para abrir popup de editar perfil
editbutton.addEventListener("click", () => {
  popupEditProfile.open();
  userForm.enableValidation();
});

// instancia para abrir popup de adicionar cartão
const popupAddCard = new PopupWithForm(".popup-add", addImage, ".form-add");
popupAddCard.setEventListeners();

// adicionando nome e imagem ao cartão
function addImage(values) {
  if (values.title != "" && values.url != "") {
    api
      .createCard({
        name: values.title,
        link: values.url,
      })
      .then((response) => response.json())
      .then((card) => {
        // console.log(card);

        renderCards(card);
      });
  }
}

//  abrir o popup para adicionar imagens
buttonAdd.addEventListener("click", () => {
  popupAddCard.open();
  cardForm.enableValidation();
});
const popupEditAvatar = new PopupWithForm(
  ".popup-edit-avatar",
  addPhotoProfile,
  ".form_edit-avatar"
);
popupEditAvatar.setEventListeners();
// adicionando uma foto de perfil nova
function addPhotoProfile(value) {
  // fazer um querysecleter para capturar o elemento da img do avatar
  const imgAvatar = document.querySelector(".profile__image");
  // com esse elemento em mãos atribuir o value recebido por parametro ao src a imagem do avatar
  imgAvatar.setAttribute("src", value.link);
  popupEditAvatar.close();
}

// evento para abrir popup de editar foto de perfil
profileEditeAvt.addEventListener("click", () => {
  popupEditAvatar.open();
});

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

// Instancia o PopupWithImage
const popupWithImage = new PopupWithImage(
  ".popup-image",
  ".popup__image-open",
  ".popup__image-name"
);
popupWithImage.setEventListeners();

// Função para adicionar e remover like
function handleApiLike(card, isLiked) {
  // Se isLiked for true a função dá deslike no card
  if (isLiked) {
    return api
      .unlikeCard(card._id)
      .then((res) => res.json())
      .then((card) => card);
  } else {
    // Se isLiked for false a função dá like no card
    return api
      .likeCard(card._id)
      .then((res) => res.json())
      .then((card) => card);
  }
}

// Cria e adiciona um novo card na página
function renderCards(card) {
  const newCard = new Card({
    card,
    cardSelector: config.cardTemplateId,
    deleteCard,
    userOwner,
    handleCardClick: (title, image) => popupWithImage.open(title, image),
    handleLike: (card, isLiked) => handleApiLike(card, isLiked),
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

// deleteCard
function deleteCard(id) {
  api
    .deleteCard(id)
    .then((res) => {
      if (res.status == 204) {
        return null;
      } else {
        return Promise.reject(res.status);
      }
    })
    .catch((error) => {
      console.log(`[DELETE Card] - Card Id: ${id}`);
      console.log(`[DELETE Card] - Error: ${error}`);
    });
}
