function solve(input) {

    const N = Number(input.shift());
    const farmers = {};

    for (let idx = 0; idx < N; idx++) {
        let [name, area, tasks] = input.shift().split(' ');

        farmers[name] = {
            area,
            tasks: tasks.split(',')
        };
    }

    while (input[0] !== 'End') {

        let parts = input.shift().split(' / ');
        let cmd = parts[0];
        let name = parts[1];

        if (cmd === 'Execute') {

            let area = parts[2];
            let task = parts[3];

            if (farmers[name].area === area && farmers[name].tasks.includes(task)) {
                console.log(`${name} has executed the task: ${task}!`);

            } else {
                console.log(`${name} cannot execute the task: ${task}.`)
            }

        } else if (cmd === 'Change Area') {

            let currArea = parts[2];
            farmers[name].area = currArea;
            console.log(`${name} has changed their work area to: ${currArea}`);

        } else if(cmd === 'Learn Task') {
            
            let currTask = parts[2];

            if (farmers[name].tasks.includes(currTask)) {
                console.log(`${name} already knows how to perform ${currTask}.`);

            } else {

                farmers[name].tasks.push(currTask);
                console.log(`${name} has learned a new task: ${currTask}.`);
            }
        }
    }

    for (let [name, data] of Object.entries(farmers)) {

        let sorted = data.tasks.slice().sort((a, b) => a.localeCompare(b));
        console.log(`Farmer: ${name}, Area: ${data.area}, Tasks: ${sorted.join(', ')}`);
    }
}

solve([
    "2",
    "John garden watering,weeding",
    "Mary barn feeding,cleaning",
    "Execute / John / garden / watering",
    "Execute / Mary / garden / feeding",
    "Learn Task / John / planting",
    "Execute / John / garden / planting",
    "Change Area / Mary / garden",
    "Execute / Mary / garden / cleaning",
    "End"
]);

console.log('-------------------');

solve([
    "3",
    "Alex apiary harvesting,honeycomb",
    "Emma barn milking,cleaning",
    "Chris garden planting,weeding",
    "Execute / Alex / apiary / harvesting",
    "Learn Task / Alex / beeswax",
    "Execute / Alex / apiary / beeswax",
    "Change Area / Emma / apiary",
    "Execute / Emma / apiary / milking",
    "Execute / Chris / garden / watering",
    "Learn Task / Chris / pruning",
    "Execute / Chris / garden / pruning",
    "End"
]);