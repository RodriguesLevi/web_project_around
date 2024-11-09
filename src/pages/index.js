import "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Api from "../components/Api.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithConfirmation from "../components/PoupWithConfirmation.js";
import {
  editbutton,
  buttonAdd,
  config,
  profileEditeAvt,
  nome,
  description,
  avatar,
} from "../components/utils.js";

// criar instancias de Api
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/web-ptbr-cohort-14",
  headers: {
    authorization: "d667c682-8c33-4a60-879f-a362c285fdc1",
    "Content-Type": "application/json",
  },
});

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__description",
  ".profile__image"
);

// Buscar Usuario
let userOwner;
api
  .getUsers()
  .then((res) => res.json())
  .then((users) => {
    // userOwner = users;
    userInfo.setUserInfo(users.name, users.about, users.avatar);
    const userObj = userInfo.getUserInfo();

    nome.textContent = userObj.name;
    description.textContent = userObj.about;
    avatar.src = userObj.avatar;
  })
  .catch((error) => {
    console.log(`[GET Users] - Error: ${error}`);
  });

const popupWithConfirmation = new PopupWithConfirmation(
  ".popup-form-confirm",
  (cardId, cardElement) => deleteCard(cardId, cardElement)
);

popupWithConfirmation.setEventListeners();

// adicionando nome e mudando informações
function addNames(values) {
  if (values.name != "" && values.description != "") {
    const userObj = userInfo.getUserInfo();
    userInfo.setUserInfo(values.name, values.description, userObj.avatar);

    // chamar a api de edição de perfil
    api.editProfile({ name: values.name, about: values.description });

    popupEditProfile.close();
  }
}

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

const popupEditAvatar = new PopupWithForm(
  ".popup-edit-avatar",
  addPhotoProfile,
  ".form_edit-avatar"
);
// adicionando uma foto de perfil nova
popupEditAvatar.setEventListeners();
function addPhotoProfile(value) {
  const userObj = userInfo.getUserInfo();
  userInfo.setUserInfo(userObj.name, userObj.about, value.link);

  api.editProfileAvatar({
    avatar: value.link,
  });
  popupEditAvatar.close();
}

//  abrir o popup para adicionar imagens
buttonAdd.addEventListener("click", () => {
  popupAddCard.open();
  cardForm.enableValidation();
});

// abrir popup de editar foto de perfil
profileEditeAvt.addEventListener("click", () => {
  popupEditAvatar.open();
  avatarForm.enableValidation();
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

const avatarForm = new FormValidator(
  {
    formElement: "form",
    inputElement: "input",
    showErrorMessage: "form__input-error-message",
    inputInvalidErrorMessage: "form__input-invalid",
    popupSaveButton: ".form__button",
    formAddButton: "#create-button",
  },
  "#avatar-form"
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
    popupConfirmationOpen: (cardId, cardElement) =>
      popupWithConfirmation.open(cardId, cardElement),
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
function deleteCard(id, cardElement) {
  api
    .deleteCard(id)
    .then((res) => {
      cardElement.remove();

      if (res.status == 200) {
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
