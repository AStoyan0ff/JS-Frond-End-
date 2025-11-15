function revealWords(str, text) {

    let words = str.split(', ');
    let templates = text.split(' ');

    for (let pos = 0; pos < templates.length; pos++) {

        if (templates[pos].includes('*')) {
            let word = words.find(w => w.length === templates[pos].length);

            if (word) {
                templates[pos] = word;
            }
        }
    }

    console.log(templates.join(' '));
}

revealWords('great', 'softuni is ***** place for learning new programming languages');
revealWords('great, learning', 'softuni is ***** place for ******** new programming languages');
