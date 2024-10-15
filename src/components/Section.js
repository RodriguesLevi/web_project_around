export default class Section {
  constructor({ items, acao }, config) {
    this._items = items; //cards array
    this._acao = acao; // função
    this._container = config.cardsAdd;
    this._config = config;
  }

  setItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._items.forEach((card) => {
      this._acao(card);
    });
  }
}
