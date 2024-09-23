export default class Card {
  constructor(cardSelector) {
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

        popupCardImage.setAttribute("src", card.link);
        popupCardImage.setAttribute("alt", card.name);
        popupCardTitle.textContent = card.name;
        openPopup(popupImage);
      });
  }

  generateCard() {
    // cards__container clonado
    this._element = this._getTempade();
    this._setEventListeners;

    // cardElement.querySelector(".cards__container-name").textContent = card.name;
    // cardElement.querySelector(".cards__image").setAttribute("src", card.link);
    // cardElement.querySelector(".cards__image").setAttribute("alt", card.name);
    // cardElement
    //   .querySelector(".cards__delete")
    //   .addEventListener("click", (evt) => {
    //     evt.target.parentElement.remove();
    //   });
    // cardElement
    //   .querySelector(".cards__button-like")
    //   .addEventListener("click", (evt) => {
    //     if (evt.target.getAttribute("src") === "./images/image__like.png") {
    //       return evt.target.setAttribute(
    //         "src",
    //         "./images/image__like_color.png"
    //       );
    //     }

    //     return evt.target.setAttribute("src", "./images/image__like.png");
    //   });
    // return cardElement;
  }
}
