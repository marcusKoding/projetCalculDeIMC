const BMIData = [
  {
    name: "Selon L'OMS vous êtes en état de Maigreur",
    color: "midnightblue",
    range: [0, 18.5],
  },
  {
    name: "Selon L'OMS vous êtes en Bonne santé",
    color: "green",
    range: [18.5, 25],
  },
  {
    name: "Selon L'OMS vous êtes en Surpoids",
    color: "lightcoral",
    range: [25, 30],
  },
  {
    name: "Selon L'OMS vous êtes en Obésité modérée",
    color: "orange",
    range: [30, 35],
  },
  {
    name: "Selon L'OMS vous êtes en état d'Obésité sévère",
    color: "crimson",
    range: [35, 40],
  },
  {
    name: "Selon L'OMS vous êtes en état d'Obésité morbide",
    color: "purple",
    range: 40,
  },
];

const form = document.querySelector("form");

form.addEventListener("submit", handleForm);
function handleForm(e) {
  e.preventDefault();
  calculateBMI();
}
const inputs = document.querySelectorAll("input");

function calculateBMI() {
  const height = inputs[0].value;
  const weight = inputs[1].value;

  if (!height || !weight || height <= 0 || weight <= 0) {
    handleError();
    return;
  }

  const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
  console.log(BMI);

  showResult(BMI);
}

const displayBMI = document.querySelector(".bmi-value");
const result = document.querySelector(".result");

function handleError() {
  displayBMI.textContent = "Attention!";
  displayBMI.style.color = "#c23616";
  result.textContent = "Remplissez correctement les cases.";
}

function showResult(BMI) {
  const rank = BMIData.find((data) => {
    if (BMI >= data.range[0] && BMI < data.range[1]) return data;
    else if (typeof data.range === "number" && BMI >= data.range) return data;
  });

  displayBMI.textContent = BMI;
  displayBMI.style.color = `${rank.color}`;
  result.textContent = `Résultat : ${rank.name}`;
}
