// function repearStr(str, cnt) {

//     let result = '';

//     for (let pos = 0; pos < cnt; pos++) {
//         result += str;
//     }
//     return result;
// }

function repearStr(str, n) {
    return str.repeat(n);
}

console.log(repearStr("abc", 3));     //* abcabcabc
console.log(repearStr("String", 2));  //* StringString