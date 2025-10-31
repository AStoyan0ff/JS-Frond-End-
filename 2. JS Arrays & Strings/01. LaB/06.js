function strOccurrences(str, searchWord) {
    
    let words = str.split(' ');
    let cnt = 0;
    
    for (let word of words) {
        
        if (word === searchWord) 
            cnt++;
    }
    console.log(cnt);
}

// let arr = str.split(' ').filter(word => word === searchWord);
// console.log(arr.length);

strOccurrences
('This is a word and it also is a sentence', 'is');

strOccurrences
('softuni is great place for learning new programming languages', 'softuni');

