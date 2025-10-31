function extractWords(input) {

    let words = input.split(' ');
    let result = [];

    for (let word of words) {

        if (word.startsWith('#') && word.length > 1) {
            let tag = word.slice(1);

            if (/^[A-Za-z]+$/g.exec(tag)) { // test
                result.push(tag);
            }
        }
    }

    for (let tag of result) {
        console.log(tag);
    }
}


extractWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
