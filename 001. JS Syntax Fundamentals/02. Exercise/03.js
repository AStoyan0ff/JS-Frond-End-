function leap(year) {

    let isFind = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
    console.log(isFind ? "yes" : "no");
}

leap(1984);
leap(2003);
leap(4);
leap(2000);
leap(1990);