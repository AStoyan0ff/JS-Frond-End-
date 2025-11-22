function solve(input) {

    let N = Number(input.shift());
    let heroes = {};

    for (let idx = 0; idx < N; idx++) {

        let [name, hp, bullets] = input.shift().split(' ');
        hp = Number(hp);
        bullets = Number(bullets);

        heroes[name] = {
            hp,
            bullets
        };
    }

    for (let line of input) {
        if (line === 'Ride Off Into Sunset') break;

        let parts = line.split(' - ');
        let cmd = parts[0];
        let name = parts[1];

        if (cmd === 'FireShot') {
            let target = parts[2];

            if (heroes[name].bullets > 0) {

                heroes[name].bullets--;
                console.log(`${name} has successfully hit ${target} and now has ${heroes[name].bullets} bullets!`);

            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
            }

        } else if (cmd === 'TakeHit') {

            let dmg = Number(parts[2]);
            let attack = parts[3];

            heroes[name].hp -= dmg;

            if (heroes[name].hp > 0) {
                console.log(`${name} took a hit for ${dmg} HP from ${attack} and now has ${heroes[name].hp} HP!`);

            } else {

                console.log(`${name} was gunned down by ${attack}!`);
                delete heroes[name];
            }

        } else if (cmd === 'Reload') {
            let currBullets = heroes[name].bullets;

            if (currBullets < 6) {

                let reloaded = 6 - currBullets;
                heroes[name].bullets = 6;
                console.log(`${name} reloaded ${reloaded} bullets!`);

            } else {
                console.log(`${name}'s pistol is fully loaded!`);
            }

        } else if (cmd === 'PatchUp') {

            let qty = Number(parts[2]);
            let hpBefore = heroes[name].hp;

            if (hpBefore < 100) {

                heroes[name].hp = Math.min(100, hpBefore + qty);
                console.log(`${name} patched up and recovered ${heroes[name].hp - hpBefore} HP!`);

            } else {
                console.log(`${name} is in full health!`);
            }
        }
    }

    for (let hero in heroes) {

        console.log(`${hero}`);
        console.log(` HP: ${heroes[hero].hp}`);
        console.log(` Bullets: ${heroes[hero].bullets}`);
    }
}

solve([
    "2",
    "Gus 100 0",
    "Walt 100 6",
    "FireShot - Gus - Bandit",
    "TakeHit - Gus - 100 - Bandit",
    "Reload - Walt",
    "Ride Off Into Sunset"
]);
console.log('-------------');

solve([
    "2",
    "Jesse 100 4",
    "Walt 100 5",
    "FireShot - Jesse - Bandit",
    "TakeHit - Walt - 30 - Bandit",
    "PatchUp - Walt - 20" ,
    "Reload - Jesse",
    "Ride Off Into Sunset"
]);
console.log('-------------');
solve([
    "2",
    "Gus 100 4",
    "Walt 100 5",
    "FireShot - Gus - Bandit",
    "TakeHit - Walt - 100 - Bandit",
    "Reload - Gus",
    "Ride Off Into Sunset"
]);