function storeCars(input) {

    class Garage {
        constructor(N) {

            this.N = N;
            this.cars = [];
        }

        addCar(info) {
            this.cars.push(info);
        }

        print() {
            console.log(`Garage № ${this.N}`);

            for (let car of this.cars) {
                console.log(`--- ${car}`);
            }
            
        }
    }

    const garages = {};

    for (let iss of input) {

        let [number, info] = iss.split(' - ');
        number = Number(number);

        if (!garages[number]) {
            garages[number] = new Garage(number);
        }

        let formatCar = info
            .split(', ')
            .map(param => param.replace(':', ' -'))
            .join(', ');

        garages[number].addCar(formatCar);    
    }

    Object.values(garages)
        .sort((a, s) => a.number - s.number)
        .forEach(g => g.print());

}

storeCars([
    '1 - color: blue, fuel type: diesel', 
    '1 - color: red, manufacture: Audi', 
    '2 - fuel type: petrol', 
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
console.log(`---------------`);

storeCars([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
]);