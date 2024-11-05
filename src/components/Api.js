export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUsers() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    });
  }

  get(path) {
    return fetch(`${this._baseUrl}${path}`, {
      method: "GET",
      headers: this._headers,
    });
  }

  createCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  deleteCard(imageId) {
    return fetch(`${this._baseUrl}/cards/${imageId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  likeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  unlikeCard(cardId) {
    return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  profile(avatar) {
    return fetch(`${this._baseUrl}/users/me/${avatar}`, {
      method: "PATCH",
      headers: this._headers,
    });
  }
}
