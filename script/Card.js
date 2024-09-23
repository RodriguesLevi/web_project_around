export default class Card {
  constructor(card, cardSelector) {
    this._card = card;
    this._cardSelector = cardSelector;
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
    this._element
      .querySelector(".cards__image")
      .addEventListener("click", () => {
        const popupCardImage =
          this._element.querySelector(".popup__image-open");
        const popupCardTitle =
          this._element.querySelector(".popup__image-name");

        popupCardImage.setAttribute("src", this._card.link);
        popupCardImage.setAttribute("alt", this._card.name);
        popupCardTitle.textContent = this._card.name;
        openPopup(popupImage);
      });
  }

  generateCard() {
    // cards__container clonado
    this._element = this._getTempade();
    this._setEventListeners;

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
    this._setEventListeners;
    return this._element;
  }
}
