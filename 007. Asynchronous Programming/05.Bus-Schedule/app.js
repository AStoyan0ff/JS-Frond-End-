function solve() {

    const infoBox = document.querySelector("#info .info");
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");

    let stop = {
        next: "depot"
    };

    async function depart() {
        const URL = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`;

        try {
            const res = await fetch(URL);

            if (res.ok === false) {
                throw new Error('Network error');
            }

            const data = await res.json();
            stop = data;

            infoBox.textContent = `Next stop ${data.name}`;

            departBtn.disabled = true;
            arriveBtn.disabled = false;

        } catch (err) {

            infoBox.textContent = "Not Connected";
            departBtn.disabled = true;
            arriveBtn.disabled = true;
        }
    }

    function arrive() {

        infoBox.textContent = `Arriving at ${stop.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {

        depart,
        arrive
    };
}

let result = solve();
