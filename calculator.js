document.addEventListener("DOMContentLoaded", function () {
  const outputElement = document.getElementById("output");
  let currentExpression = "";

  function updateOutput(value) {
    outputElement.textContent = value;
  }

  function handleButtonClick(value) {
    currentExpression += value;
    updateOutput(currentExpression);
  }

  function calculate() {
    try {
      const result = eval(currentExpression);
      updateOutput(result);
      currentExpression = result.toString();
    } catch (error) {
      updateOutput("Error");
      currentExpression = "";
    }
  }

  function handleKeyPress(event) {
    const key = event.key;
    if (!isNaN(key)) {
      handleButtonClick(key);
    } else if (key === "+") {
      handleButtonClick("+");
    } else if (key === "-") {
      handleButtonClick("-");
    } else if (key === "*") {
      handleButtonClick("*");
    } else if (key === "/") {
      handleButtonClick("/");
    } else if (key === "Enter") {
      calculate();
      audio.play();
    } else if (key === "Backspace") {
      displayExpression = displayExpression.slice(0, -1);
      evalExpression = evalExpression.slice(0, -1);
      updateOutput(currentExpression || "0");
    } else if (key === "Escape") {
      displayExpression = "";
      evalExpression = "";
      updateOutput("0");
    } else if (key === ".") {
      if (!displayExpression.includes(".")) {
        handleButtonClick(".");
      }
    } else if (key === "%") {
      handleButtonClick("%");
    }
  }
  document
    .getElementById("btn-0")
    .addEventListener("click", () => handleButtonClick("0"));
  document
    .getElementById("btn-1")
    .addEventListener("click", () => handleButtonClick("1"));
  document
    .getElementById("btn-2")
    .addEventListener("click", () => handleButtonClick("2"));
  document
    .getElementById("btn-3")
    .addEventListener("click", () => handleButtonClick("3"));
  document
    .getElementById("btn-4")
    .addEventListener("click", () => handleButtonClick("4"));
  document
    .getElementById("btn-5")
    .addEventListener("click", () => handleButtonClick("5"));
  document
    .getElementById("btn-6")
    .addEventListener("click", () => handleButtonClick("6"));
  document
    .getElementById("btn-7")
    .addEventListener("click", () => handleButtonClick("7"));
  document
    .getElementById("btn-8")
    .addEventListener("click", () => handleButtonClick("8"));
  document
    .getElementById("btn-9")
    .addEventListener("click", () => handleButtonClick("9"));
  document
    .getElementById("btn-percent")
    .addEventListener("click", () => handleButtonClick("%"));
  document
    .getElementById("btn-mul")
    .addEventListener("click", () => handleButtonClick("*"));
  document
    .getElementById("btn-sub")
    .addEventListener("click", () => handleButtonClick("-"));
  document
    .getElementById("btn-plus")
    .addEventListener("click", () => handleButtonClick("+"));
  document
    .getElementById("btn-div")
    .addEventListener("click", () => handleButtonClick("/"));

  document.getElementById("btn-ac").addEventListener("click", function () {
    currentExpression = "";
    updateOutput("0");
  });

  document.getElementById("btn-del").addEventListener("click", function () {
    currentExpression = currentExpression.slice(0, -1);
    updateOutput(currentExpression || "0");
  });

  document.getElementById("btn-equals").addEventListener("click", function () {
    calculate();
    audio.play(); //Play click audio when equals button is clicked
  });
  const audio = new Audio();
  audio.src = "./click.mp3";

  document.getElementById("btn-percent").addEventListener("click", function () {
    handleButtonClick("%");
  });

  document.addEventListener("keydown", handleKeyPress);
});
