function sumDigits(N) {

    let result = 0;
    while(N !== 0) {

        result += N % 10;
        N = Math.trunc(N / 10); // floor
    }
    console.log(result);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);