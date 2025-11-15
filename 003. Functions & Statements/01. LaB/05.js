function simpleCalculator(firstNum, secondNum, operator) {

    const operations = {

        multiply: (x, y) => x * y,
        divide: (x, y) => x / y,
        add: (x, y) => x + y,
        subtract: (x, y) => x - y
    };

    console.log(operations[operator](firstNum, secondNum));
}

simpleCalculator(5, 5, 'multiply');     //* 25
simpleCalculator(40, 8, 'divide');      //* 5
simpleCalculator(12, 19, 'add');        //* 31
simpleCalculator(50, 13, 'subtract');   //* 37