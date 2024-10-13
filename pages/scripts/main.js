const googleBtn = document.querySelector(".btn.google");
const emailBtn = document.querySelector(".btn.email");
const createBtn = document.querySelector(".btn.create");

googleBtn.addEventListener("click", () => {
  // Aqui você pode adicionar código para redirecionar para a página de login do Google
  console.log("Login com Google");
});

emailBtn.addEventListener("click", () => {
  // Aqui você pode adicionar código para exibir um formulário de login por email e senha
  console.log("Login por email e senha");
});

createBtn.addEventListener("click", () => {
  // Aqui você pode adicionar código para redirecionar para a página de criação de conta
  console.log("Criar conta");
});

let currentIndex = 0;

function moveSlide(direction) {
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  document.querySelector(".carousel-inner").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}
