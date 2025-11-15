function largest(a, b, c) {

    let res;

    if (a > b && a > c) {
        res = a;
    }
    else if (b > a && b > c) {
        res = b;
    }
    else if (c > a && c > b) {
        res = c;
    }
    console.log(`The largest number is ${res}.`);
}

//largest(-3, 2, 16);


