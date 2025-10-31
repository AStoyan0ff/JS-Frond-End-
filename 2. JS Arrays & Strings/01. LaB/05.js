function censored(text, word) {

    // while (text.includes(word)) {
    //     text = text.replace(word, '*'.repeat(word.length));
    // }

    let template = '*'.repeat(word.length);
    newCopy = text.replaceAll(word, template);
    console.log(newCopy);
}

censored('A small sentence with some words', 'small');
censored('Find the hidden word', 'hidden');