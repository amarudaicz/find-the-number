document.addEventListener("DOMContentLoaded", function (params) {
  findNumber();
});

const inputNumber = document.querySelector("#input");
const inputSubmit = document.querySelector("#submit");
const inputRestart = document.querySelector("#restart");
const contenidoScore = document.querySelector(".contenido-score");
const contenidoAnterior = document.querySelector(".contenido-anterior");
let randomNumber = getRandomIntInclusive(1, 20);
let number = 0;
let score = 100;
let alert = document.querySelector("#alert");
let icons = document.querySelectorAll(".fa-solid");

/*
Obtener un número entero aleatorio entre dos valores (incluyendo ambos)
La función getRandomInt() descrita anteriormente incluye el valor mínimo, pero excluye al máximo.
¿Y si necesitamos que el resultado incluya tanto al mínimo como al máximo? La siguiente función getRandomIntInclusive() lo consigue.
*/
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Ahora, tanto el valor mínimo como el máximo están incluidos en el resultado.

function findNumber() {
  const leerInput = evento => number = evento.target.value;
  inputNumber.addEventListener("input", leerInput);
  console.log(randomNumber);

  function showAlert() {
    if (number == randomNumber) {
      inputNumber.value = "";
      randomNumber = getRandomIntInclusive(1, 20);
      console.log(randomNumber);
      alert.innerHTML = "correcto";
      alert.classList.add("correcto");
      alert.classList.remove("muy-bajo" , "muy-alto");
      icons.forEach((element) => element.classList.add("fa-circle-check"));
      icons.forEach((element) =>element.classList.remove("fa-circle-arrow-up" , "fa-circle-arrow-down"));
      number = 0;
    } else if (number < randomNumber) {
      alert.innerHTML = "muy bajo";
      score -= 10;
      alert.classList.add("muy-bajo");
      alert.classList.remove("correcto", "muy-alto");
      icons.forEach((element) => element.classList.add("fa-circle-arrow-up"));
      icons.forEach((element) =>element.classList.remove("fa-circle-arrow-check" , "fa-circle-arrow-down"));

    } else if (number > randomNumber) {
      alert.innerHTML = "muy alto";
      score -= 10;
      alert.classList.add("muy-alto");
      alert.classList.remove("muy-bajo" , "correcto");
      icons.forEach((element) =>element.classList.remove("fa-circle-arrow-up" , "fa-circle-arrow-check"));
      icons.forEach((element) => element.classList.add("fa-circle-arrow-down"));
    }
  }
  inputSubmit.addEventListener("click", showAlert);

  function showScore() {
    const scoreAnterior = document.querySelector(".anterior");
    const scoreActual = document.querySelector(".score");
    scoreActual.innerHTML = score;

    if (number == 0) {
      let puntajeFinal = score;
      scoreAnterior.innerHTML = puntajeFinal;
      score = 100;
      scoreActual.innerHTML = score;
    }
  }
  inputSubmit.addEventListener("click", showScore);

  function detectarEnter(event) {
    let key = event.key;
    if (key === "Enter") {
      showAlert();
      showScore();
    }
    console.log(event.key);
  }

  document.addEventListener("keyup", detectarEnter);
}
