function mathOperation(num1, num2, operator) {

    console.log(eval(`${num1} ${operator} ${num2}`));
}

mathOperation(3, 5.5, '*');   //16.5
mathOperation(5, 6, '+');     //11