function loadBar(num) {

    // изчислява колко % трябва да се покажат 
    const load = num / 10; 

    // създава лента така че дължината да е винаги 10 [%%%%%.....]
    const bar = '%'.repeat(load) + '.'.repeat(10 - load);

    if (num === 100) {

        console.log("100% Complete!");
        console.log(`[${bar}]`);
    }
    else {

        console.log(`${num}% [${bar}]`);
        console.log("Still loading...");
    }
}

loadBar(30);
loadBar(50);
loadBar(100);