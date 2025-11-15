function carParking(inp) {

    const parking = {};

    for (const element of inp) {
        const [direction, carNum] = element.split(', ');

        if (direction === 'IN') {
            parking[carNum] = true;

        } else if (direction === 'OUT') {
            delete parking[carNum];
        }
    }

    const cars = Object.keys(parking).sort();

    if (cars.length === 0) {
        console.log('Parking Lot is Empty');
        
    } else {
        cars.forEach(car => console.log(car));
    }
}

carParking([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);

carParking([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);