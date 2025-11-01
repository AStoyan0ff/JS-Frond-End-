function charRange(firstCh, secondCh) {

    const start = Math.min(firstCh.charCodeAt(0), secondCh.charCodeAt(0));
    const end = Math.max(firstCh.charCodeAt(0), secondCh.charCodeAt(0));

    let results = [];

    for (let pos = start + 1; pos < end; pos++) {
        results.push(String.fromCharCode(pos));
    }

    console.log(results.join(' '));
    
}

charRange('a', 'd');
charRange('#', ':');
charRange('C', '#');