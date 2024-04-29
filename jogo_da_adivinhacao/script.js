const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const feedback = document.querySelector("#feedback"); // Elemento para feedback de erro

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;
const maxAttempts = 5; // Limite de tentativas

function handleTryClick(event) {
    event.preventDefault();
    const inputNumber = document.querySelector("#inputNumber");
    const guess = Number(inputNumber.value);

    if (guess === randomNumber) {
        screen1.classList.add("hide");
        screen2.classList.remove("hide");
        screen2.querySelector('h2').innerText = `Você acertou em ${xAttempts} tentativas`;
    } else {
        if (guess < randomNumber) {
            feedback.innerText = "É maior. Tente novamente!";
        } else {
            feedback.innerText = "É menor. Tente novamente!";
        }
        feedback.style.display = "block";
        xAttempts++;
        if (xAttempts > maxAttempts) {
            feedback.innerText = `Fim de jogo! O número era ${randomNumber}`;
            btnTry.disabled = true; // Desabilita o botão de tentar após o fim das tentativas
        }
    }
    inputNumber.value = "";
}

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function () {
    screen1.classList.remove("hide");
    screen2.classList.add("hide");
    feedback.style.display = "none";
    btnTry.disabled = false;
    xAttempts = 1;
});
