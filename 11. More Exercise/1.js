function check(x1, y1, x2, y2) {

    function isValid(xA, yA, xB, yB) {

        const distance = Math.sqrt((xA - xB) ** 2 + (yA - yB) ** 2); // формула
        return Number.isInteger(distance);
    }

    function print(xA, yA, xB, yB) {

        const result = isValid(xA, yA, xB, yB) 
            ? 'valid' 
            : 'invalid';

        console.log(`{${xA}, ${yA}} to {${xB}, ${yB}} is ${result}`);
    }

    print(x1, y1, 0, 0);
    print(x2, y2, 0, 0);
    print(x1, y1, x2, y2);
}

check(3, 0, 0, 4);
console.log();
check(2, 1, 1, 1);
