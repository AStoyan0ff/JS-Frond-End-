function orders(product, cnt) {

    let price = 0;

    if (product === 'coffee') price = 1.50;
    else if (product === 'water') price = 1.00;
    else if (product === 'coke') price = 1.40;
    else if (product === 'snacks') price = 2.00;

    let totalCost = price * cnt;
    console.log(totalCost.toFixed(2));
}

orders("water", 5);   //* 5.00
orders("coffee", 2);  //* 3.00