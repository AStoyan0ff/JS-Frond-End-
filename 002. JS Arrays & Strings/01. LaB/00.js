                    // forEach()
                //----------------
// let arr = ['Blagoevgrad', 'Sofia', 'Varna', 'Burgas'];
// arr.forEach(city => console.log(city)); 
//---------------------------------------------------------------------

                    // map()
                //--------------
// let number = [1, 3, 5, 7, -12, 8];
// let doubleNumber = number.map(number => number * 2);

// console.log(doubleNumber);
//-----------------------------------------------------------------------

                    // find() -> за единично търсене .filter() -> за повече от 1 съвпадевние
                //-------------

// let cities = ['Blagoevgrad', 'Sofia', 'Varna', 'Burgas'];
// let elevenCityLetters = cities.find(city => city.length === 11);
// console.log(elevenCityLetters); 
//------------------------------------------------------------------------

                    // filter
                //--------------
                    
let cities = ['Blagoevgrad', 'Sofia', 'Varna', 'Burgas'];
let elevenCityLetters = cities.filter(city => city.length === 5);
console.log(elevenCityLetters); 

