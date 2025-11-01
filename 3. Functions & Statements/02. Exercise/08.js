function perfectNum(N) {

    let result = 0;

    for (let pos = 1; pos < N; pos++) 
        if (N % pos === 0) result += pos;

    if (result === N) 
        console.log("We have a perfect number!");

    else 
        console.log("It's not so perfect.");
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);