function booking(input) {

    let meeting = {}; // Асоциативен масив ...

    for (const pair of input) {

        let [day, name] = pair.split(' ');

        if (day in meeting) {

            console.log(`Conflict on ${day}!`);
        }     
        else {

            meeting[day] = name;
            console.log(`Scheduled for ${day}`);
            
        }    
    }

    // for (const key in meeting) {
    //     console.log(`${key} -> ${meeting[key]}`);
        
    // }

    let pairs = Object.entries(meeting);

    for (const [day, name] of pairs) {

        console.log(`${day} -> ${name}`);
    }
    
}

booking([

    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);