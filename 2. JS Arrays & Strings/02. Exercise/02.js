function print(arr, step) {

    const result = [];

    for (let pos = 0; pos < arr.length; pos += step) {
        result.push(arr[pos]);
    }

    return result;
}

console.log(print(['5', '20', '31', '4', '20'], 2));
console.log(print(['dsa', 'asd', 'test', 'tset'], 2));
console.log(print(['1', '2', '3', '4', '5'], 6));
