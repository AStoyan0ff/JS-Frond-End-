function solve(start, end) {

    let result = 0;
    let row = ""; // принтира ги в един ред

    for (let pos = start; pos <= end; pos++) {
        row += `${pos} `;
        result += pos;
    }

    console.log(row);
    console.log(`Sum: ${result}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);