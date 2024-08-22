// variaveis que manipulam o popup do usuario

const container = document.querySelector(".popup__container");
const editbutton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const buttonclose = document.querySelector(".popup__button");
const buttonSave = document.querySelector(".form__button");
const form = document.querySelector(".form");

// variaveis para adicionar o novo nome e descrição
let nome = document.querySelector(".profile__name");
let description = document.querySelector(".profile__description");
let addNome = document.querySelector(".form__input-name");
let addDescription = document.querySelector(".form__input-description");

// abrir o popup

function openPopup() {
  container.style.display = "block";
  popup.style.display = "block";
}
editbutton.addEventListener("click", openPopup);
// fechar popup
function closePopup() {
  container.style.display = "none";
  popup.style.display = "none";
}
buttonclose.addEventListener("click", closePopup);

// adicionando nome e mudando info

function addNames(event) {
  event.preventDefault();
  if (addNome.value != "" && addDescription.value != "") {
    nome.textContent = addNome.value;
    description.textContent = addDescription.value;
  }
  // fechar botao
  closePopup();
  addNome.value = "";
  addDescription.value = "";
}
buttonSave.addEventListener("click", addNames);

// abrir popup para adicionar a imagem
const popupEdit = document.querySelector(".popup-edit");
const buttonEdit = document.querySelector(".profile__add");
const popupContainer = document.querySelector(".popup__container-edit");
const buttonCloseEdit = document.querySelector(".popup__close-edit");

//  abrir o popup para adicionar imagens
function openPopupEdit() {
  popupEdit.style.display = "block";
  popupContainer.style.display = "block";
}
buttonEdit.addEventListener("click", openPopupEdit);

// fechar o popup
function closePopupEdit() {
  popupEdit.style.display = "none";
  popupContainer.style.display = "none";
}
buttonCloseEdit.addEventListener("click", closePopupEdit);

// variaveis para adicionar a imagem
const inputTitle = document.querySelector("#title");
const inputUrl = document.querySelector("#url");
const buttonImage = document.querySelector("#create-button");
const cardsAdd = document.querySelector(".cards__container");
const formAddCard = document.querySelector(".form-edit");

// adicionando imagens e tema

function addImage(event) {
  event.preventDefault();
  if (inputTitle.value != "" && inputUrl.value != "") {
    insertCard(inputTitle.value, inputUrl.value);
  }
}
// assinatura de função
function insertCard(imageTitle, imageUrl) {
  console.log(imageUrl);
  cardsAdd.insertAdjacentHTML(
    "beforeend",
    `<div class="cards__container">
      <img
        src="${imageUrl}"
        alt="${imageTitle}"
        class="cards__image"
      />
       <img src="./images/Trash.png" alt="delete" class="cards__delete" />
      <div class="cards__container-title">
        <h3 class="cards__container-name">${imageTitle}</h3>
        <button class="cards__button" type="button"></button>
      </div>
    </div>`
  );
}
formAddCard.addEventListener("submit", addImage);

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
initialCards.forEach();
