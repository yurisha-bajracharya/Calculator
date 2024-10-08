document.addEventListener("DOMContentLoaded", function () {
  const outputElement = document.getElementById("output");
  let evalExpression = "";
  let displayExpression = "";
  let isDegreeMode = false;
  let previousResult = 0;
  let lastActionWasCalculation = false;

  function updateOutput(value) {
    outputElement.textContent = value;
  }

  function handleButtonClick(value, evalValue = value) {
    if (lastActionWasCalculation && !isNaN(value)) {
      displayExpression = value;
      evalExpression = evalValue;
      console.log("updated evalexpression: ", evalExpression);
      updateOutput(displayExpression);
    } else {
      displayExpression += value;
      evalExpression += evalValue;
      updateOutput(displayExpression);
    }
    lastActionWasCalculation = false;
  }

  function calculate() {
    try {
      let expressionToEvaluate = evalExpression;
      console.log("initial expression: ", expressionToEvaluate);
      if (isDegreeMode) {
        expressionToEvaluate = expressionToEvaluate.replace(
          /Math\.sin\(([^)]+)\)/g,
          "Math.sin($1 * Math.PI / 180)"
        );
        expressionToEvaluate = expressionToEvaluate.replace(
          /Math\.cos\(([^)]+)\)/g,
          "Math.cos($1 * Math.PI / 180)"
        );
        expressionToEvaluate = expressionToEvaluate.replace(
          /Math\.tan\(([^)]+)\)/g,
          "Math.tan($1 * Math.PI / 180)"
        );
      }
      if (expressionToEvaluate.includes("Ans")) {
        expressionToEvaluate = expressionToEvaluate.replace(
          /Ans/g,
          previousResult
        );
      }
      //for evaluating factorial
      if (expressionToEvaluate.includes("factorial(")) {
        console.log("And I detected it now factorial");
        expressionToEvaluate = expressionToEvaluate.replace(
          /factorial\((\d+)\)/g,
          function (match, number) {
            console.log("reached here");
            console.log("factorial match:", match, "number:", number);
            return factorial(parseInt(number));
          }
        );
      }
      console.log("fianl expression: ", expressionToEvaluate);
      console.log("final expression: ", expressionToEvaluate);
      const result = eval(expressionToEvaluate);
      updateOutput(result);
      displayExpression = result.toString();
      evalExpression = result.toString();
      previousResult = result;
      lastActionWasCalculation = true;
    } catch (error) {
      updateOutput("Error");
      displayExpression = "";
      evalExpression = "";
    }
  }

  function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
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

  document.getElementById("btn-0").addEventListener("click", () => {
    handleButtonClick("0");
  });
  document.getElementById("btn-1").addEventListener("click", () => {
    handleButtonClick("1");
  });
  document.getElementById("btn-2").addEventListener("click", () => {
    handleButtonClick("2");
  });
  document.getElementById("btn-3").addEventListener("click", () => {
    handleButtonClick("3");
  });
  document.getElementById("btn-4").addEventListener("click", () => {
    handleButtonClick("4");
  });
  document.getElementById("btn-5").addEventListener("click", () => {
    handleButtonClick("5");
  });
  document.getElementById("btn-6").addEventListener("click", () => {
    handleButtonClick("6");
  });
  document.getElementById("btn-7").addEventListener("click", () => {
    handleButtonClick("7");
  });
  document.getElementById("btn-8").addEventListener("click", () => {
    handleButtonClick("8");
  });
  document.getElementById("btn-9").addEventListener("click", () => {
    handleButtonClick("9");
  });

  document.getElementById("btn-plus").addEventListener("click", function () {
    handleButtonClick("+");
  });

  document.getElementById("btn-sub").addEventListener("click", function () {
    handleButtonClick("-");
  });

  document.getElementById("btn-mul").addEventListener("click", function () {
    handleButtonClick("*");
  });

  document.getElementById("btn-div").addEventListener("click", function () {
    handleButtonClick("/");
  });

  document.getElementById("btn-deg").addEventListener("click", function () {
    isDegreeMode = !isDegreeMode;
    this.textContent = isDegreeMode ? "Rad" : "Deg";
  });

  document.getElementById("btn-!").addEventListener("click", function () {
    handleButtonClick("fact(", "factorial(");
    console.log("hey!! you clicked factorial");
  });

  document.getElementById("btn-sqrt").addEventListener("click", function () {
    handleButtonClick("√(", "Math.sqrt(");
  });

  document.getElementById("btn-ln").addEventListener("click", function () {
    handleButtonClick("ln", "Math.log(");
  });

  document.getElementById("btn-sin").addEventListener("click", function () {
    handleButtonClick("sin(", "Math.sin(");
  });

  document.getElementById("btn-log").addEventListener("click", function () {
    handleButtonClick("log(", "Math.log10(");
  });

  document.getElementById("btn-cos").addEventListener("click", function () {
    handleButtonClick("cos(", "Math.cos(");
  });

  document.getElementById("btn-sqr").addEventListener("click", function () {
    handleButtonClick("²", "**2");
  });

  document.getElementById("btn-tan").addEventListener("click", function () {
    handleButtonClick("tan(", "Math.tan(");
  });

  document.getElementById("btn-exp").addEventListener("click", function () {
    handleButtonClick("exp(", "Math.exp(");
  });

  document.getElementById("btn-pi").addEventListener("click", function () {
    handleButtonClick("π", "Math.PI");
  });

  document.getElementById("btn-(").addEventListener("click", function () {
    handleButtonClick("(");
  });

  document.getElementById("btn-)").addEventListener("click", function () {
    handleButtonClick(")");
  });

  document.getElementById("btn-e").addEventListener("click", function () {
    handleButtonClick("e", "Math.E");
  });

  document.getElementById("btn-ans").addEventListener("click", function () {
    handleButtonClick("Ans", "Ans");
  });

  document.getElementById("btn-dot").addEventListener("click", function () {
    if (!displayExpression.includes(".")) {
      handleButtonClick(".");
    }
  });

  document.getElementById("btn-percent").addEventListener("click", function () {
    handleButtonClick("%");
  });

  document.getElementById("btn-ac").addEventListener("click", function () {
    displayExpression = "";
    evalExpression = "";
    updateOutput("0");
  });

  document.getElementById("btn-del").addEventListener("click", function () {
    if (displayExpression.endsWith("Ans")) {
      displayExpression = displayExpression.slice(0, -3);
      evalExpression = evalExpression.slice(0, -3);
    } else {
      displayExpression = displayExpression.slice(0, -1);
      evalExpression = evalExpression.slice(0, -1);
    }
    updateOutput(displayExpression || "0");
  });

  document.getElementById("btn-equals").addEventListener("click", function () {
    calculate();
    audio.play(); //Play click audio when equals button is clicked
  });

  const audio = new Audio();
  audio.src = "./click.mp3";

  document.addEventListener("keydown", handleKeyPress);
});
