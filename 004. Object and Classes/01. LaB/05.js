function phoneBook(input) {

    const phoneList = {};

    for (const line of input) {
        
        const [name, number] = line.split(' ');
        phoneList[name] = number;
    }

    for (const key in phoneList) {
        console.log(`${key} -> ${phoneList[key]}`);
        
    }

    // let pair = Object.entries(phoneList);

    // for (let [name, number] of pair) {
    //     console.log(`${name} -> ${number}`);
    // }
}

phoneBook([
    
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);