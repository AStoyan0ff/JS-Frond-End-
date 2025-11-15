function loadBar(percent) {
   
    const load = percent / 10; 
    const statusBar = '%'.repeat(load) + '.'.repeat(10 - load);

    if (percent === 100) {

        console.log("100% Complete!");
        console.log(`[${statusBar}]`);
    }
    else {

        console.log(`${percent}% [${statusBar}]`);
        console.log("Still loading...");
    }
}

loadBar(30);
loadBar(50);
loadBar(100);