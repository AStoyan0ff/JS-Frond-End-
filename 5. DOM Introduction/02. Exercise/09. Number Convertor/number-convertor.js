function solve() {
    
    const number = document.getElementById('input');
    const selectElement = document.getElementById('selectMenuTo');
    const result = document.getElementById('result');

    const num = Number(number.value.trim());
    const unitTo = selectElement.value;

    if (unitTo === 'binary')
        result.value += num.toString(2);

    else if (unitTo === 'hexadecimal')
        result.value += num.toString(16).toLocaleUpperCase();
}