function sequences(input) {

    const unique = {};

    for (let iss of input) {
        const arr = JSON.parse(iss);

        const key = [...arr].sort((a, s) => a - s).join(',');

        if (!unique.hasOwnProperty(key)) unique[key] = arr;
    }

    const result = Object.values(unique);
    result.sort((a, s) => a.length - s.length);

    for (let array of result) {

        const sorted = [...array].sort((a, s) => s - a);
        console.log(`[${sorted.join(', ')}]`);
    }
}   

sequences([
    "[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);
console.log('-------------');

sequences([
    "[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"
]);