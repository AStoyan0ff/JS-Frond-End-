function reverseArray(N, array) {

    let result = array
        .slice(0, N)
        .reverse(); // вграден метод 
        
    console.log(result.join(' '));
}



// function reverseArray(N, array) {

//     let arr = [];

//     for (let pos = 0; pos < N; pos++) { // взимаме първият елемент
//         arr.push(array[pos]);
//     }

//     let reverse = [];

//     for (let idx = arr.length - 1; idx >= 0; idx--) { // обръщаме ръчно
//         reverse.push(arr[idx]);
//     }

//     console.log(reverse.join(' '));
    
// }

reverseArray(3, [10, 20, 30, 40, 50]);
reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);