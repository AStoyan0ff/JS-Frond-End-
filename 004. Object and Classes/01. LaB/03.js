function convertToJson(json) {

    let obcect = JSON.parse(json);
    let pairs = Object.entries(obcect);

    for (const [key, value] of pairs) {
        console.log(`${key}: ${value}`);
    }
}

convertToJson('{"name": "George", "age": 40, "town": "Sofia"}');