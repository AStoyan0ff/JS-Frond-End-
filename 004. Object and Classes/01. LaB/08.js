function getCats(input) {

    class Cat {
        constructor(name, age) {

            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (const elements of input) {

        let [name, age] = elements.split(' ');
        let cat = new Cat(name, age);
        cat.meow();
    }
}

getCats(['Mellow 2', 'Tom 5']);