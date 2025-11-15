function factorialDivision(firstNum, secondNum) {

    function factorial(N) { // found factorial on digit

        let result = 1;

        for (let idx = 2; idx <= N; idx++) {
            result *= idx;
        }

        return result;
    }

    const firstFact = factorial(firstNum);
    const secondFact = factorial(secondNum);
    const div = firstFact / secondFact;
    
    console.log(div.toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);