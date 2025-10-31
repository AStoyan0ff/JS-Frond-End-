function fruits(fruit, grams, kgPrice) {

    const weight = grams / 1000;
    const totalMoney = weight * kgPrice;

    console.log(`I need $${totalMoney.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`);
}

fruits('orange', 2500, 1.80);
fruits('apple', 1563, 2.35);