import Card from "./Card.js";
export const popupEdit = document.querySelector(".popup-edit");
export const editbutton = document.querySelector(".profile__button");
export const buttonclose = document.querySelector(".popup__button");
export const buttonSave = document.querySelector(".form__button");
export const form = document.querySelector(".form");
export const nome = document.querySelector(".profile__name");
export const description = document.querySelector(".profile__description");
export const addNome = document.querySelector(".form__input-name");
export const addDescription = document.querySelector(
  ".form__input-description"
);
export const inputTitle = document.querySelector("#title");
export const inputUrl = document.querySelector("#url");
export const buttonImage = document.querySelector("#create-button");
export const cardsAdd = document.querySelector(".cards");
export const formAddCard = document.querySelector(".form-add");
export const buttonRemove = document.querySelector("#remove-image");
export const popupImage = document.querySelector(".popup-image");
export const popupButtonImage = document.querySelector(".popup__button-image");
export const buttonAdd = document.querySelector(".profile__add");
export const popupAddCard = document.querySelector(".popup-add");
export const buttonCloseAdd = document.querySelector(".popup__close-add");
export const popup = document.querySelector(".popup");

export const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];
//  função para abrir o popup
export function openPopup(popup) {
  popup.classList.add("popup-opened");
}
// função para fechar o poup
export function closePopup(popup) {
  popup.classList.remove("popup-opened");
}

// adicionando nome e mudando informações
export function addNames(event) {
  event.preventDefault();
  if (addNome.value != "" && addDescription.value != "") {
    nome.textContent = addNome.value;
    description.textContent = addDescription.value;
  }
  // fechar botao
  closePopup(popupEdit);
  addNome.value = "";
  addDescription.value = "";
}
// adicionando nome e imagem
export function addImage(event) {
  event.preventDefault();
  if (inputTitle.value != "" && inputUrl.value != "") {
    const newCard = new Card({
      card: { name: inputTitle.value, link: inputUrl.value },
      cardSelector: "#card-template",
      popupCardImage: ".popup__image-open",
      popupCardTitle: ".popup__image-name",
    }).generateCard();

    cardsAdd.prepend(newCard);
    inputTitle.value = "";
    inputUrl.value = "";

    closePopup(popupAddCard);
  }
}
