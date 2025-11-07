function cities(object) {

    let pairs = Object.entries(object);
    
    for (const pair of pairs) {
        console.log(`${pair[0]} -> ${pair[1]}`);
    }
}

cities({
    
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
});