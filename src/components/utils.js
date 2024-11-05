const nome = document.querySelector(".profile__name");
const description = document.querySelector(".profile__description");
// import Card from "../components/Card.js";
export const popupEdit = document.querySelector(".popup-edit");
export const editbutton = document.querySelector(".profile__button");
export const buttonclose = document.querySelector(".popup__button");
export const buttonSave = document.querySelector(".form__button");
export const cardsAdd = document.querySelector(".cards");
export const formAddCard = document.querySelector(".form-add");
export const popupImage = document.querySelector(".popup-image");
export const popupButtonImage = document.querySelector(".popup__button-image");
export const buttonAdd = document.querySelector(".profile__add");
export const popupAddCard = document.querySelector(".popup-add");
export const buttonCloseAdd = document.querySelector(".popup__close-add");
export const popup = document.querySelector(".popup");
const ownerId = "9cdb9bbdd07bc77e32b73ebe";
export const popupEditAvatar = document.querySelector(".popup-edit-avatar");
export const profileEditeAvt = document.querySelector(".profile-edit-avt");
export const config = {
  cardTemplateId: "#card-template",
  cardsAdd,
  ownerId,
};

// export const initialCards = [
//   {
//     name: "Vale de Yosemite",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
//   },
//   {
//     name: "Lago Louise",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
//   },
//   {
//     name: "Montanhas Carecas",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
//   },
//   {
//     name: "Latemar",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
//   },
//   {
//     name: "Parque Nacional da Vanoise ",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
//   },
//   {
//     name: "Lago di Braies",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
//   },
// ];

// adicionando nome e mudando informações
export function addNames(values) {
  if (values.name != "" && values.description != "") {
    nome.textContent = values.name;
    description.textContent = values.description;
  }
}
