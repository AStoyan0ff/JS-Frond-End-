function firstLastArray(input) {

    let first = input[0]; // начало '0'
    let last = input[input.length - 1]; // край -> дължината - 1

    console.log(first + last); // consile.dir() също става ... 
}

firstLastArray([20, 30, 40]);
firstLastArray([10, 17, 22, 33]);
firstLastArray([11, 58, 69]);