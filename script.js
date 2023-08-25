const dropDown = document.querySelectorAll(".icon");
const perguntas = document.querySelectorAll(".pergunta");

for (i = 0; i < perguntas.length; i++) {
  perguntas[i].addEventListener("click", function () {
    this.classList.toggle("visible");
  });

  dropDown.forEach((drop) => {
    drop.addEventListener("click", () => {
      drop.classList.toggle("clicked");
    });
  });
}