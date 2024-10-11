import { openPopup } from "../utils/utils.js";
export default class Card {
  constructor({ card, cardSelector, popupCardImage, popupCardTitle, form }) {
    this._card = card;
    this._cardSelector = cardSelector;
    this._popupCardImage = popupCardImage;
    this._popupCardTitle = popupCardTitle;
    this._form = form;
  }

  // função privada

  _getTempade() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content.querySelector(".cards__container")
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    const popupImage = document.querySelector(".popup-image");
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        this._popupCardImage = popupImage.querySelector(".popup__image-open");

        this._popupCardTitle = popupImage.querySelector(".popup__image-name");

        this._popupCardImage.setAttribute("src", this._card.link);
        this._popupCardImage.setAttribute("alt", this._card.name);
        this._popupCardTitle.textContent = this._card.name;
        openPopup(popupImage);
      });

    // botão do like
    this._element
      .querySelector(".cards__button-like")
      .addEventListener("click", (evt) => {
        if (evt.target.getAttribute("src") === "./images/image__like.png") {
          return evt.target.setAttribute(
            "src",
            "./images/image__like_color.png"
          );
        }

        return evt.target.setAttribute("src", "./images/image__like.png");
      });
  }

  generateCard() {
    // cards__container clonado
    this._element = this._getTempade();

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
