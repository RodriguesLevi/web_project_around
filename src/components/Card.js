import likeButtonClick from "../images/image__like_color.png";
import likeButton from "../images/image__like.png";

export default class Card {
  constructor({ card, cardSelector, handleCardClick }) {
    this._card = card;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
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
    // const popupImage = document.querySelector(".popup-image");
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () =>
        this._handleCardClick(this._card.name, this._card.link)
      );

    // botão do like
    this._element
      .querySelector(".cards__button-like")
      .addEventListener("click", (evt) => {
        if (evt.target.getAttribute("src") === likeButton) {
          return evt.target.setAttribute("src", likeButtonClick);
        }

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
    this._element
      .querySelector(".cards__delete")
      .addEventListener("click", (evt) => {
        evt.target.parentElement.remove();
      });

    this._setEventListeners();
    return this._element;
  }
}
