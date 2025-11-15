function addressBook(array) {

    let addressList = {};

    for (const elements of array) {

        let [name, address] = elements.split(':');
        addressList[name] = address;
    }

    let pairs = Object.entries(addressList).sort((a, s) => 
        a[0].localeCompare(s[0]));

    for (let [name, address] of pairs) {
         console.log(`${name} -> ${address}`);
    }
}

addressBook([

    'Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);