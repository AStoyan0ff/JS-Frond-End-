function checkSign(first, second, third) {

    const numbers = [first, second, third];
    let negativeCnt = 0;

    for (let num of numbers) {

        if (num === 0) {

            console.log("Positive");
            return; 
        }

        if (num < 0) negativeCnt++;
    }
    
    if (negativeCnt % 2 === 0) console.log("Positive");
    else console.log("Negative");
}

checkSign(5, 12, -15);   //* Negative *
checkSign(-6, -12, 14);  //* Positive *
checkSign(-1, -2, -3);   //* Negative *
checkSign(-5, 1, 1);     //* Negative *
