function perfectNum(number) {

    let result = 0;

    for (let pos = 1; pos < number; pos++) 
        if (number % pos === 0) result += pos;

        console.log(result === number 

            ? "We have a perfect number!" 
            : "It's not so perfect.");
    
}
perfectNum(81);
perfectNum(6);
perfectNum(28);
perfectNum(1236498);