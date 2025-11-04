// Аrrow function

function print(message, transformFunc) {

    console.log(transformFunc(message));
}

print("AStoyanoff", msg => msg.toUpperCase());
print("AStoyanoff", msg => msg.toLowerCase());
print("AStoyanoff", msg => msg + "!");
print("AStoyanoff", msg => msg.toUpperCase().split("").reverse().join("")); 

//--------------------------------------------------------------------------------------

// Algorithm за смяна на местата на индексите -> Variant 1

let arr = [2, 3, 4, 5 ,6 ,7];

function swapEl(arr) {

    function swap(arr, idx, idx2) {
        let temp = arr[idx];

        arr[idx] = arr[idx2];
        arr[idx2] = temp;
    }

    for (let idx = 0; idx < arr.length / 2; idx++) {
        swap(arr, idx, arr.length - 1 - idx);
    }
}

swapEl(arr);
console.log(arr);

//-------------------------------------------------------------------------
                            // Variant 2 

function swapIndex(arr) {

    function swap(arr, idx, idx2) {
        [arr[idx], arr[idx2]] = [arr[idx2], arr[idx]];
    }

    for (let idx = 0; idx < arr.length / 2; idx++) {
        swap(arr, idx, arr.length - 1 - idx);
    }

    return arr;
}

const result = swapIndex([2, 3, 4, 5, 6, 7]);
console.log(result);

