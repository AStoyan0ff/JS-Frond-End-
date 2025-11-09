function storeProvision(stock, order) {

    let store = {};

    function getProducts(arrs) {

        for (let pos = 0; pos < arrs.length; pos += 2) {

            let product = arrs[pos];
            let quantity = Number(arrs[pos + 1]);

            if (store.hasOwnProperty(product)) store[product] += quantity;
            else store[product] = quantity;
        }
    }
   
    getProducts(stock);
    getProducts(order);
    
    for (const info in store) {
        console.log(`${info} -> ${store[info]}`);
    }
}

storeProvision(

    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
