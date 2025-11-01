function printSum(N) {

    //! превръщаме числото в string за да обходим... 
    //! ползваме .map(number) за да може да не получим символи а числа...

    const digits = N
        .toString()
        .split('')
        .map(Number);

    let oddSum = 0;
    let evenSum = 0;

    for (let digit of digits) {

        if (digit % 2 === 0) evenSum += digit;
        else oddSum += digit;
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

printSum(1000435);             //? Odd sum = 9, Even sum = 4
printSum(3495892137259234);    //? Odd sum = 54, Even sum = 22
