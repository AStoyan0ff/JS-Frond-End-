function solve() {

    const sentence = document.getElementById('input')
        .value
        .split('.')
        .map(s => s.trim())
        .filter(s => s);

    const output = document.getElementById('output');
    output.innerHTML = '';
    
    for (let pos = 0; pos < sentence.length; pos += 3) {

        let text = sentence.slice(pos, pos + 3).join('. ') + '.';
        output.innerHTML += `<p>${text}</p>`;
    }

}