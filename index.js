const container = document.querySelector(".popup__container");
const editbutton = document.querySelector(".profile__button");
const popup = document.querySelector(".popup");
const buttonclose = document.querySelector(".popup__button");
const botaosalvar = document.querySelector(".form__button");
const form = document.querySelector(".form");

// abrir o popup

function abrirPopup() {
  container.style.display = "block";
  popup.style.display = "block";
}
editbutton.addEventListener("click", abrirPopup);

function fecharPopup() {
  container.style.display = "none";
  popup.style.display = "none";
}
buttonclose.addEventListener("click", fecharPopup);

// adicionando nome e mudando info

function adicionandoNomes(event) {
  event.preventDefault();
  let nome = document.querySelector(".profile__name");
  let description = document.querySelector(".profile__description");
  let addNome = document.querySelector(".form__input-name");
  let addDescription = document.querySelector(".form__input-description");

  nome.textContent = addNome.value;
  description.textContent = addDescription.value;
  // fechar botao
  fecharPopup();
}
botaosalvar.addEventListener("click", adicionandoNomes);
