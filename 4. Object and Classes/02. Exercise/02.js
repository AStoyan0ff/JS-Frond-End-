function townsToJson(data) {

    for (const element of data) {
       
        let [town, latitude, longitude] = element.split(' | ');
        
        latitude = Number(latitude).toFixed(2);
        longitude = Number(longitude).toFixed(2);
        
        let objTown = { town, latitude, longitude };
        console.log(objTown);
    }
}

townsToJson([

    'Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);