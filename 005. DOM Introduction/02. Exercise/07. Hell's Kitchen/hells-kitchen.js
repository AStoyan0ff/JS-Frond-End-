function solve() {

    let input = document.querySelector('#inputs textarea').value;
    let arr = JSON.parse(input);

    let restaurants = {};

    for (const element of arr) {
        let [name, data] = element.split(' - ');
        let workers = data.split(', ');

        if (!restaurants[name]) {
            restaurants[name] = [];
        }

        for (const info of workers) {
            let [workerName, salary] = info.split(' ');
            restaurants[name].push({ name: workerName, salary: Number(salary) });
        }
    }

    let bestName = '';
    let bestAvg = 0;

    for (let name in restaurants) {
        let workers = restaurants[name];
        let result = 0;

        for (const element of workers) result += element.salary;

        let avg = result / workers.length;

        if (avg > bestAvg) {
            bestAvg = avg;
            bestName = name;
        }
    }

    let bestWorkers = restaurants[bestName].sort((a, b) => b.salary - a.salary);
    let bestSalary = bestWorkers[0].salary;

    document.querySelector('#bestRestaurant p').textContent =
        `Name: ${bestName} Average Salary: ${bestAvg.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    document.querySelector('#workers p').textContent = bestWorkers
        .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
        .join(' ');
}