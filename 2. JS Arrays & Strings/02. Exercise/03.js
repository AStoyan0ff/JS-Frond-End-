function listOfName(arrNames) {

    arrNames.sort((a, b) => a.toLowerCase() > b.toLowerCase() 
        ? 1 
        : -1);

    for (let pos = 0; pos < arrNames.length; pos++) {
        console.log(`${pos + 1}.${arrNames[pos]}`);
    }
}

listOfName(["John", "Bob", "Christina", "Ema"]);