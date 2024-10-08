// Atualizar o relógio a cada segundo (1000 milissegundos)
function updateClock() {
  const currentTime = new Date().toLocaleTimeString("en", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  const clock = document.getElementById("clock");
  clock.innerHTML = currentTime;
}

setInterval(updateClock, 1000);

//Atualizar anos de experiencia
const startYear = 2023;
const startMonth = 3; 
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

const yearsWorking = document.getElementById("years-working");

let yearsDifference = currentYear - startYear;
let monthsDifference = currentMonth - startMonth;

if (monthsDifference < 0) {
    yearsDifference--; 
    monthsDifference += 12; 
}

let result = "";
if (yearsDifference > 0) {
    result += `${yearsDifference} year${yearsDifference > 1 ? 's' : ''}`;
}
if (monthsDifference > 0) {
    if (yearsDifference > 0) {
        result += " and ";
    }
    result += `${monthsDifference} month${monthsDifference > 1 ? 's' : ''}`;
}

yearsWorking.innerHTML = result;

//Tocar som de erro
function playWindowsSound() {
  let audio = new Audio('./assets/sounds/windows-error.mp3');
  audio.play();
}

//Som chimes
function playChimeSound() {
  let audio = new Audio('./assets/sounds/chimes.mp3');
  audio.play();
}

document.getElementById("startButton").addEventListener("click", playChimeSound);
document.getElementById("portfolioButton").addEventListener("click", playChimeSound);

document.querySelectorAll(".control-button").forEach(button => {
  button.addEventListener("click", playWindowsSound);
});

//Mudar tela ao clicar no start
document.getElementById("startButton").addEventListener("click", function() {
  fetch("windows95.html")
      .then(response => response.text())
      .then(data => {
          document.getElementById("mainContent").innerHTML = data;
          document.getElementById("mainContent").classList.add("windows-background");
      });
});

//Voltar para o conteúdo original ao clicar no portfolio
const originalContent = document.getElementById("mainContent").innerHTML;

document.getElementById("portfolioButton").addEventListener("click", function() {
  document.getElementById("mainContent").innerHTML = originalContent;
  document.getElementById("mainContent").classList.remove("windows-background");
});

//Botões Start e Portfolio
document.getElementById("startButton").addEventListener("click", function() {
  this.classList.add("bg-white");
  document.getElementById("portfolioButton").classList.remove("bg-white");
});

document.getElementById("portfolioButton").addEventListener("click", function() {
  this.classList.add("bg-white");
  document.getElementById("startButton").classList.remove("bg-white");
});