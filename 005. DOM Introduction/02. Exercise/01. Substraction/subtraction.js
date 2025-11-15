function subtract() {
    //TODO

    const firstNumber = Number(document.getElementById("firstNumber").value);
    const secondNumber = Number(document.getElementById("secondNumber").value);
    const resultContainer = document.getElementById("result");
    
    const result = firstNumber - secondNumber;
    resultContainer.textContent = result;
}