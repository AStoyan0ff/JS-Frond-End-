function employees(input) {

    let employee = [];

    for (let name of input) {

        let object = {
            
            name: name,
            personalNum: name.length
        };

        employee.push(object);
    }

    for (const element of employee) {
        console.log(`Name: ${element.name} -- Personal Number: ${element.personalNum}`);
    }

    //! Variant 2 

    const employees = {};

    for (const name of input) {
        employees[name] = name.length;
    }

    for (const name in employees) {
        console.log(`Name: ${name} -- Personal Number: ${employees[name]}`);
    }

    
}

employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);

console.log('***************'); 

employees([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
