function even_odd(arr) {
    
    let even = 0;
    let odd = 0;

    for (let N of arr) {

        if (N % 2 === 0) even += N;
        else odd += N;
    }

    console.log(even - odd); 
}

even_odd([1,2,3,4,5,6]);
even_odd([3,5,7,9]);
even_odd([2,4,6,8,10]);