function sameNumbers(N) {

    let lastDigit = N % 10; // намираме последната цифра
    let result = 0;
    let isFind = true; 

    while (N !== 0) {
        curr = N % 10;

        if (curr !== lastDigit) isFind = false;
        result += curr;

        N = Math.trunc(N / 10);
    }

    console.log(isFind);
    console.log(result);
}

sameNumbers(2222222);
sameNumbers(1234);