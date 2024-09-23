import Card from "./Card.js";
const newC = new Card("#card-template");
newC.generateCard();

// variaveis que manipulam o popup do usuario
const popupEdit = document.querySelector(".popup-edit");
const editbutton = document.querySelector(".profile__button");

// variaveis que manipulam o popup de adicionar imagem
const buttonclose = document.querySelector(".popup__button");
const buttonSave = document.querySelector(".form__button");
const form = document.querySelector(".form");

// variaveis para adicionar o novo nome e descrição
const nome = document.querySelector(".profile__name");
const description = document.querySelector(".profile__description");
const addNome = document.querySelector(".form__input-name");
const addDescription = document.querySelector(".form__input-description");

// variaveis para adicionar a imagem
const inputTitle = document.querySelector("#title");
const inputUrl = document.querySelector("#url");
const buttonImage = document.querySelector("#create-button");
const cardsAdd = document.querySelector(".cards");
const formAddCard = document.querySelector(".form-add");
const buttonRemove = document.querySelector("#remove-image");

const popupImage = document.querySelector(".popup-image");

const popupButtonImage = document.querySelector(".popup__button-image");

// abrir o popup
function openPopup(popup) {
  popup.classList.add("popup-opened");
}

// fechar popup
function closePopup(popup) {
  popup.classList.remove("popup-opened");
}

// evento para abrir popup de editar perfil
editbutton.addEventListener("click", () => openPopup(popupEdit));

// evento para fechar popup de editar perfil
buttonclose.addEventListener("click", () => closePopup(popupEdit));

const initialCards = [
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

initialCards.forEach((card) => {
  const newCard = createCard(card);
  cardsAdd.prepend(newCard);
});

// adicionando nome e mudando info
function addNames(event) {
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
buttonSave.addEventListener("click", addNames);

// abrir popup para adicionar a imagem
const buttonAdd = document.querySelector(".profile__add");
const popupAddCard = document.querySelector(".popup-add");
const buttonCloseAdd = document.querySelector(".popup__close-add");

//  abrir o popup para adicionar imagens
buttonAdd.addEventListener("click", () => openPopup(popupAddCard));

// // fechar o popup
buttonCloseAdd.addEventListener("click", () => closePopup(popupAddCard));

// adicionando imagens e tema
function addImage(event) {
  event.preventDefault();
  if (inputTitle.value != "" && inputUrl.value != "") {
    const newCard = createCard({
      name: inputTitle.value,
      link: inputUrl.value,
    });
    cardsAdd.prepend(newCard);
    inputTitle.value = "";
    inputUrl.value = "";

    closePopup(popupAddCard);
  }
}

formAddCard.addEventListener("submit", addImage);

function createCard(card) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate
    .querySelector(".cards__container")
    .cloneNode(true);
  cardElement.querySelector(".cards__image").addEventListener("click", () => {
    const popupCardImage = document.querySelector(".popup__image-open");
    const popupCardTitle = document.querySelector(".popup__image-name");

    popupCardImage.setAttribute("src", card.link);
    popupCardImage.setAttribute("alt", card.name);
    popupCardTitle.textContent = card.name;
    openPopup(popupImage);
  });

  cardElement.querySelector(".cards__container-name").textContent = card.name;
  cardElement.querySelector(".cards__image").setAttribute("src", card.link);
  cardElement.querySelector(".cards__image").setAttribute("alt", card.name);
  cardElement
    .querySelector(".cards__delete")
    .addEventListener("click", (evt) => {
      evt.target.parentElement.remove();
    });
  cardElement
    .querySelector(".cards__button-like")
    .addEventListener("click", (evt) => {
      if (evt.target.getAttribute("src") === "./images/image__like.png") {
        return evt.target.setAttribute("src", "./images/image__like_color.png");
      }

      return evt.target.setAttribute("src", "./images/image__like.png");
    });
  return cardElement;
}

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

const popup = document.querySelector(".popup");

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
