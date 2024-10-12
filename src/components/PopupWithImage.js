import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageSelector, titleSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._imageElement = this._popup.querySelector(imageSelector);
    this._titleElement = this._popup.querySelector(titleSelector);
  }

  open(title, image) {
    this._imageElement.setAttribute("src", image);
    this._imageElement.setAttribute("alt", title);
    this._titleElement.textContent = title;

    super.open();
  }

  close() {
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
