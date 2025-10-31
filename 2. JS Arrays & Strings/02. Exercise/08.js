function pascalCase(input) {

    let arrWords = [];
    let currWord = input[0];

    for (let pos = 1; pos < input.length; pos++) {
        let char = input[pos];

        if (char === char.toUpperCase()) {

            arrWords.push(currWord);
            currWord = char;
        }
        else {
            currWord += char;
        }
    }
    arrWords.push(currWord);
    console.log(arrWords.join(', '));
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
pascalCase('HoldTheDoor');
pascalCase('ThisIsSoAnnoyingToDo');