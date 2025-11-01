function printMatrix(N) {

    for (let pos = 0; pos < N; pos++) {
        
        console.log((N + ' ')
            .repeat(N) // N- пъти реда от числото
            .trim());
    }
}

printMatrix(3);
printMatrix(7);