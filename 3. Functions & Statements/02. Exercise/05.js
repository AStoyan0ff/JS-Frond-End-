function palindromeInteger(N) {

    for (const num of N) {
        
        let numStr = num.toString(); //! правим числата в стринг
        let reverse = numStr
            .split('') 
            .reverse() //* обръщаме стринга
            .join('');

            console.log(numStr === reverse 
                ? 'true' 
                : 'false'); //? тернанрен оператор (спестява доста писане)
    }
}

//palindromeInteger([123, 323, 421, 121]);
//*palindromeInteger([32, 2, 232, 1010]);