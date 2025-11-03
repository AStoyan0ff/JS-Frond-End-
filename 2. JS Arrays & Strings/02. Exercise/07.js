/**
 * @param {string} word 
 * @param {string} text 
 */

function srtSub(word, text) {

    const words = text.split(' ');
    let isFound = false;

    for (let w of words) {

        if (w.toLowerCase() === word.toLowerCase()) {

            console.log(word);
            isFound = true;

            break; 
        }
    }

    if (!isFound) {
        console.log(`${word} not found!`);
    }
}

srtSub('javascript', 'JavaScript is the best programming language');
srtSub('python', 'JavaScript is the best programming language');

//-------------------------------------------------------------------------------------
                            // Variant 2 -> return

// function srtSub(word, text) {

//     let words = text.split(' ');

//      for (let w of words) {

//         if (w.toLowerCase() === word.toLowerCase()) {

//             console.log(word);
//             return; // спира програмата при съвпадение
//         }
//     }
//     console.log(`${word} not found!`);
// }

// srtSub('javascript', 'JavaScript is the best programming language');
// srtSub('python', 'JavaScript is the best programming language');

