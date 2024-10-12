export default class UserInfo {
  constructor(nameSelector, aboutSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._aboutElement = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._aboutElement.textContent,
    };
  }

  setUserInfo(name, about) {
    this._nameElement.textContent = name;
    this._aboutElement.textContent = about;
  }
}
