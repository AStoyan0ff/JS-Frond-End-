document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const encode = document.getElementById('encode');
    const decode = document.getElementById('decode');
    const encodeInp = encode.querySelector('textarea');
    const decodeInp = decode.querySelector('textarea');

    encode.addEventListener('submit', function (e) {
        e.preventDefault();

        const msg = transform(encodeInp.value, 1);
        encodeInp.value = '';
        decodeInp.value = msg;
    });

    decode.addEventListener('submit', function (e) {
        e.preventDefault();

        const msg = transform(decodeInp.value, -1);
        decodeInp.value = msg;
    });

    function transform(text, shift) {
        let result = '';

        for (let pos = 0; pos < text.length; pos++) {
            result += String.fromCharCode(text.charCodeAt(pos) + shift);
        }
        return result;
    }
}
