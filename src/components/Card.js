import likeButtonClick from "../images/image__like_color.png";
import likeButton from "../images/image__like.png";
import { config } from "../components/utils";

export default class Card {
  constructor({
    card,
    cardSelector,
    handleCardClick,
    popupConfirmationOpen,
    handleLike,
    userOwner,
  }) {
    this._card = card;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._popupConfirmationOpen = popupConfirmationOpen;
    this._handleLike = handleLike;
    this._userOwner = userOwner;
  }

  // função privada

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__container")
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    // Percorre todos os likes para descobrir se o usuário deu like em algum cartão e caso o usuário tenha dado like, o cartão fica com o coração pintado
    this._card.likes.forEach((like) => {
      if (like._id === "9cdb9bbdd07bc77e32b73ebe") {
        return this._element
          .querySelector(".cards__button-like")
          .setAttribute("src", likeButtonClick);
      }
    });

    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () =>
        this._handleCardClick(this._card.name, this._card.link)
      );

    const likeCounter = this._element.querySelector(".cards__like-counter");
    likeCounter.textContent = this._card.likes.length;

    // botão do like
    this._element
      .querySelector(".cards__button-like")
      .addEventListener("click", (evt) => {
        // pega elemento de contador de likes
        const likeCounter = this._element.querySelector(".cards__like-counter");
        if (evt.target.getAttribute("src") === likeButton) {
          // utiliza a propriedade likes do card para adiconar o contador de likes
          // acessar o card -> acessar o array de likes -> verificar o comprimento do array de likes
          this._handleLike(this._card, false).then((card) => {
            // adiciona a quantidade de likes atualizada no contador de likes com base no retorno da api
            likeCounter.textContent = card.likes.length;
          });
          return evt.target.setAttribute("src", likeButtonClick);
        }

        // utiliza a propriedade likes do card para adiconar o contador de likes
        this._handleLike(this._card, true).then((card) => {
          // adiciona a quantidade de likes atualizada no contador de likes com base no retorno da api
          likeCounter.textContent = card.likes.length;
        });
        return evt.target.setAttribute("src", likeButton);
      });
  }

  generateCard() {
    // cards__container clonado
    this._element = this._getTemplate();

    this._element.querySelector(".cards__container-name").textContent =
      this._card.name;
    this._element
      .querySelector(".cards__image")
      .setAttribute("src", this._card.link);
    this._element
      .querySelector(".cards__image")
      .setAttribute("alt", this._card.name);

    if (config.ownerId !== this._card.owner._id) {
      this._element
        .querySelector(".cards__delete")
        .classList.add("cards__delete-hidden");
    }
    this._element
      .querySelector(".cards__delete")
      .addEventListener("click", (evt) => {
        this._popupConfirmationOpen(this._card._id, evt.target.parentElement);
      });

    this._setEventListeners();
    return this._element;
  }
}
