document.addEventListener("DOMContentLoaded", ()=>{
    let outputElement = document.getElementById("output");

    function updateOutput(value){
        outputElement.textContent = value;
    }

    let currentExpression = "";

    function handleButtonClick(value){
        currentExpression += value;
        updateOutput(currentExpression);
    }

    document.getElementById("btn-0").addEventListener("click", ()=>handleButtonClick("0"));
    document.getElementById("btn-1").addEventListener("click", ()=>handleButtonClick("1"));
    document.getElementById("btn-2").addEventListener("click", ()=>handleButtonClick("2"));
    document.getElementById("btn-3").addEventListener("click", ()=>handleButtonClick("3"));
    document.getElementById("btn-4").addEventListener("click", ()=>handleButtonClick("4"));
    document.getElementById("btn-5").addEventListener("click", ()=>handleButtonClick("5"));
    document.getElementById("btn-6").addEventListener("click", ()=>handleButtonClick("6"));
    document.getElementById("btn-7").addEventListener("click", ()=>handleButtonClick("7"));
    document.getElementById("btn-8").addEventListener("click", ()=>handleButtonClick("8"));
    document.getElementById("btn-9").addEventListener("click", ()=>handleButtonClick("9"));
    document.getElementById("btn-percent").addEventListener("click", ()=>handleButtonClick("%"));
    document.getElementById("btn-mul").addEventListener("click", ()=>handleButtonClick("*"));
    document.getElementById("btn-sub").addEventListener("click", ()=>handleButtonClick("-"));
    document.getElementById("btn-plus").addEventListener("click", ()=>handleButtonClick("+"));

    });
