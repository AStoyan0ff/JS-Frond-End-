function wordTracker(input) {
    class Word {

        constructor(name) {
            this.name = name;
            this.cnt = 0;
        }
    }
    
    let search = input.shift().split(' ');
    let wordsArr = [];
   
    for (let w of search) {
        wordsArr.push(new Word(w));
    }
   
    for (let currWord of input) {

        let word = wordsArr.find(w => w.name === currWord);
        if (word) word.cnt++;
    }
    
    wordsArr.sort((a, b) => b.cnt - a.cnt);
   
    for (let w of wordsArr) {
        console.log(`${w.name} - ${w.cnt}`);
    }
}

wordTracker([

    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the',
    'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
