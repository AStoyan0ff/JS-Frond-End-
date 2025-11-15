function subString(text, start, cnt) {

    //вземa точно толкова символа колкото са зададени (start + cnt)
    let result = text.substring(start, start + cnt); // slice(1, 8);
    console.log(result);
}


subString('ASentence', 1, 8);  // Sentence -> от 1 до 8
subString('SkipWord', 4, 7);   // Word -> от 4 до 7
