function catalogue(input) {

    const products = {};

    for (let iss of input) {

        let [name, price] = iss.split(' : ');
        price = Number(price);
        const letter = name[0]; 

        if (!products[letter]) products[letter] = [];
        products[letter].push({ name, price });
    }
    
    const sortLetters = Object.keys(products)
        .sort((a, b) => a.localeCompare(b));

    for(let words of sortLetters) {
        console.log(words);

        const sortProducts = products[words].sort((a, b) =>
            a.name.localeCompare(b.name)
        );

        for (let product of sortProducts) {
            console.log(`${product.name}: ${product.price}`);
        }
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
