function calc() {
    
    const numOne = document.getElementById('num1');
    const numTwo = document.getElementById('num2');
    const result = document.getElementById('sum');

    const num1 = Number(numOne.value);
    const num2 = Number(numTwo.value);

    const sumResult = num1 + num2;
    result.value = sumResult;
}