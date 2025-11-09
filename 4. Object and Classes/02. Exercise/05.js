function registerHeros(input) {

    class Hero {
        constructor(name, level, items) {

            this.name = name;
            this.level = Number(level);
            this.items = items;
        }
    }

    let heroes = [];

    for (const element of input) {

        let [name, level, items] = element.split(' / ');
        // тернарен оператор директно в новия герой ;) -> работи...
        let hero = new Hero(name, level, items ? items.split(', ') : []);
        
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const element of heroes) {

        console.log(`Hero: ${element.name}`);
        console.log(`level => ${element.level}`);
        console.log(`items => ${element.items.join(', ')}`);
    }
}

registerHeros([

    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);