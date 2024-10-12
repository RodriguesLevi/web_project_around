export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
  }

  open() {
    this._popup.classList.add("popup-opened");
  }

  close() {
    this._popup.classList.remove("popup-opened");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    const popupButtonClose = this._popup.querySelector(".popup__button");
    popupButtonClose.addEventListener("click", () => this.close());

    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup__container")) {
        this.close();
      }
    });

    document.addEventListener("keydown", this._handleEscClose);
  }
}
