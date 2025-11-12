function calculator(first, operator, second) {

    let result = '';

    if (operator === '+')  result = first + second;
    else if (operator === '-') result = first - second;
    else if (operator === '*') result = first * second;
    else if (operator === '/') result = first / second;

    console.log(result.toFixed(2));
}

calculator(5, '+', 10);
calculator(25.5, '-', 3);
calculator(5, '*', 5);
calculator(20, '/', 5);