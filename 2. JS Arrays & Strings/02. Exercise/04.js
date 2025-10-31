function sortNumbers(array) {

    array.sort((a, b) => a - b); // сортира масива във възходящ ред
    let result = [];

    while (array.length > 0) {
        result.push(array.shift()); //взема най-малкия елемент (първия)

        if (array.length > 0) {
            result.push(array.pop()); // взема най-големият елемент (последният)
        }
    }
    return result;
}

console.log(sortNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
