function cookingNumbers(N, one, two, three, four, five) {

    let result = Number(N);
    let operations = [one, two, three, four, five];

    for (let pos = 0; pos < operations.length; pos++) {
        let operation = operations[pos];

        if (operation === "chop") result /= 2;
        else if (operation === "dice") result = Math.sqrt(result);
        else if (operation === "spice") result += 1;
        else if (operation === "bake") result *= 3;
        else if (operation === "fillet") result *= 0.8;

        console.log(result);
    }

}

cookingNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');