function getInfo() {

    const stopIdInput = document.getElementById('stopId');
    const stopNameDiv = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');

    const stopId = stopIdInput.value;

    stopNameDiv.textContent = '';
    busesUl.innerHTML = '';

    const URL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    fetch(URL)
        .then(res => {

            if (!res.ok) {
                throw new Error();
            }
            return res.json();
        })
        .then(data => {
            stopNameDiv.textContent = data.name;

            for (let busId in data.buses) {

                const li = document.createElement('li');
                li.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
                busesUl.appendChild(li);
            }
        })
        .catch(() => {
            stopNameDiv.textContent = 'Error';
        });
}

                    //---------------------------------
                    //             VARIANT 2 - async/await
                    //---------------------------------

async function getInfo() {

    const stopIdInput = document.getElementById('stopId');
    const stopNameDiv = document.getElementById('stopName');
    const busesUl = document.getElementById('buses');

    const stopId = stopIdInput.value;
    
    stopNameDiv.textContent = '';
    busesUl.innerHTML = '';

    const URL = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;

    try {

        const res = await fetch(URL);

        if (!res.ok) {
            throw new Error('Invalid request');
        }

        const data = await res.json();
        stopNameDiv.textContent = data.name;
        
        for (let busId in data.buses) {

            const li = document.createElement('li');
            li.textContent = `Bus ${busId} arrives in ${data.buses[busId]} minutes`;
            busesUl.appendChild(li);
        }

    } catch (error) {
        stopNameDiv.textContent = 'Error';
    }
}
