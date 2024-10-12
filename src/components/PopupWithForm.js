import Popup from "./Popup";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitCallBack, formSelector) {
    super(popupSelector);
    this._popup = document.querySelector(popupSelector);
    this._formElement = this._popup.querySelector(formSelector);
    this._subimtCallBack = submitCallBack;
  }

  _getInputValues() {
    const inputs = Array.from(this._formElement.querySelectorAll("input"));
    const values = {};

    inputs.forEach((input) => {
      values[input.name] = input.value;
    });

    return values;
  }
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const values = this._getInputValues();
      this._subimtCallBack(values);
      this._formElement.reset();
      this.close();
    });
  }

  close() {
    super.close();
  }
}
