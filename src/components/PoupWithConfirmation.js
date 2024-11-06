import Popup from "./Popup";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._handleSubmit = handleSubmit;
    this._confirmationButton = this._popup.querySelector(
      ".form__button_del-confirm"
    );
  }

  setEventListeners() {
    super.setEventListeners();
    this._confirmationButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._cardId, this._cardElement);
      this.close();
    });
  }

  open(cardId, cardElement) {
    super.open();
    this._cardId = cardId;
    this._cardElement = cardElement;
  }

  close() {
    super.close();
  }
}
