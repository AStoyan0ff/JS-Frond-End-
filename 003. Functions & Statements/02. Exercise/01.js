function findSmallest(first, second, third) {
    
    return Math.min(first, second, third);
}

console.log(findSmallest(2, 5, 3));

//! Variant 2 -> Lecture
    
function getMin(arr) {

    let min = Number.MAX_VALUE;

    for (const element of arr) {

        if (element < min) min = element;
        return min;
    }

    const number = [a, b, c];
    console.log(getMin(number));
}