let container = document.querySelector(".popup__container");
let editbutton = document.querySelector(".profile__button");
let popup = document.querySelector(".popup");
let buttonclose = document.querySelector(".popup__button");
let botaosalvar = document.querySelector(".form__button");

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

function adicionandoNomes() {
  let nome = document.querySelector(".profile__name");
  let descrição = document.querySelector(".profile__description");
  let addNome = document.querySelector(".form__input-name");
  let addDescrição = document.querySelector(".form__input-description");

  nome.textContent = addNome.value;
  descrição.textContent = addDescrição.value;
}
botaosalvar.addEventListener("click", adicionandoNomes);
