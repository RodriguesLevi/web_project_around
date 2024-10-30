export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getUsers() {
    return fetch(`${this._baseUrl}/users`, {
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

  create(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  upadate(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "PUT",
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
}
