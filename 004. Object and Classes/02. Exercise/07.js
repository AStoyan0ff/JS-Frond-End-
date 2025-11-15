function extractOccurrences(input) {

    const words = input.toLowerCase().split(' ');
    const count = {};

    for (const element of words) {

        if (!count[element]) {
            count[element] = 0;
        }
        
        count[element]++;
    }

    const result = [];

    for (const element of words) {

        if (count[element] % 2 !== 0 && !result.includes(element)) {
            result.push(element);
        }
    }

    console.log(result.join(' '));
}

extractOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
extractOccurrences('Cake IS SWEET is Soft CAKE sweet Food');