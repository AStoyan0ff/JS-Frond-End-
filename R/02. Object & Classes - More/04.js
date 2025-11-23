function airportFlights(data) {

    const allFlights = data[0];
    const changeStatus = data[1];
    const checkStatus = data[2][0];
    
    const flights = {};

    allFlights.forEach(fly => {
        const [flightNumber, ...destination] = fly.split(' ');

        flights[flightNumber] = {

            Destination: destination.join(' '),
            Status: 'Ready to fly'
        };
    });
    
    changeStatus.forEach(change => {
        const [flightNumber, newStatus] = change.split(' ');

        if (flights[flightNumber]) {
            flights[flightNumber].Status = newStatus;
        }
    });
  
    for (const f in flights) {
        const object = flights[f];

        if (checkStatus === 'Ready to fly') {
            
            if (!changeStatus.some(change => change.startsWith(f))) {
                console.log(object);
            }

        } else {
            
            if (object.Status === checkStatus) {
                console.log(object);
            }
        }
    }
}

airportFlights([
    ['WN269 Delaware',
     'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK430 Cancelled'],
    ['Cancelled']
]);

console.log('--------------');

airportFlights([
    ['WN269 Delaware',
     'FL2269 Oregon',
     'WN498 Las Vegas',
     'WN3145 Ohio',
     'WN612 Alabama',
     'WN4010 New York',
     'WN1173 California',
     'DL2120 Texas',
     'KL5744 Illinois',
     'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
     'WN612 Cancelled',
     'WN1173 Cancelled',
     'SK330 Cancelled'],
    ['Ready to fly']
]);

/**
 * 1. Разделям всеки полет по номер и дестинация и ги слагам в {[]};
 * 2. Обновявам статусите според новата информация
 * 3. Проверявам условието:
 *    - ако е 'Ready to fly' -> показвам само неизменените полети
 *    - в противен случай показвам само променените полети
 *  4. Може да се направи и с map И filter, без обект с ключове =) 
 */