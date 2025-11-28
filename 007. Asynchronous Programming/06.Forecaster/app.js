function attachEvents() {

    const input = document.getElementById('location');
    const btn = document.getElementById('submit');
    const forecastDiv = document.getElementById('forecast');
    const currDiv = document.getElementById('current');
    const upcomingDiv = document.getElementById('upcoming');

    const symbols = {

        // innerHTML -> превръща ги в символи ☀️, ⛅, ☔, ☁️, °
        // textContent -> мога да ползвам директно иконките
        
        'Sunny': '&#x2600;',        
        'Partly sunny': '&#x26C5;', 
        'Overcast': '&#x2601;',     
        'Rain': '&#x2614;',         
        'Degrees': '&#176;'         
    };

    btn.addEventListener('click', getWeather);

    async function getWeather() {
        const locationName = input.value;

        clearForecast();

        try {
            
            const res = await fetch('http://localhost:3030/jsonstore/forecaster/locations');

            if (!res.ok) {
                throw new Error('Error');
            }

            const locations = await res.json();
            const location = locations.find(l => l.name === locationName);

            if (!location) {
                throw new Error('Error');
            }
            
            const todayRes = await fetch(`http://localhost:3030/jsonstore/forecaster/today/${location.code}`);
            const todayData = await todayRes.json();
            
            const upcomingRes = await fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${location.code}`);
            const upcomingData = await upcomingRes.json();

            forecastDiv.style.display = 'block';

            displayToday(todayData);
            displayUpcoming(upcomingData);

        } catch (error) {
            showError();
        }
    }

    function displayToday(data) {
        const { name, forecast } = data;

        const div = document.createElement('div');
        div.className = 'forecasts'; // classList.add() === className

        const conditionSymbol = document.createElement('span');
        conditionSymbol.className = 'condition symbol';
        conditionSymbol.innerHTML = symbols[forecast.condition];

        const condition = document.createElement('span');
        condition.classList.add('condition'); // className 

        const spanName = document.createElement('span');
        spanName.className = 'forecast-data';
        spanName.textContent = name; // innerHTML

        const spanTemp = document.createElement('span');
        spanTemp.className = 'forecast-data';
        spanTemp.innerHTML = `${forecast.low}${symbols.Degrees}/${forecast.high}${symbols.Degrees}`;

        const spanCond = document.createElement('span');
        spanCond.className = 'forecast-data';
        spanCond.textContent = forecast.condition;

        condition.appendChild(spanName);
        condition.appendChild(spanTemp);
        condition.appendChild(spanCond);

        div.appendChild(conditionSymbol);
        div.appendChild(condition);

        currDiv.appendChild(div);
    }

    function displayUpcoming(data) {
        const { forecast } = data;

        const div = document.createElement('div');
        div.className = 'forecast-info';

        forecast.forEach(day => {

            const span = document.createElement('span');
            span.className = 'upcoming'; 

            const symbol = document.createElement('span');
            symbol.className = 'symbol';
            symbol.innerHTML = symbols[day.condition];

            const temp = document.createElement('span');
            temp.className = 'forecast-data';
            temp.innerHTML = `${day.low}${symbols.Degrees}/${day.high}${symbols.Degrees}`;

            const cond = document.createElement('span');
            cond.className = 'forecast-data';
            cond.textContent = day.condition;

            span.appendChild(symbol);
            span.appendChild(temp);
            span.appendChild(cond);

            div.appendChild(span);
        });

        upcomingDiv.appendChild(div);
    }

    function clearForecast() {

        Array.from(currDiv.querySelectorAll('.forecasts')).forEach(e => e.remove());
        Array.from(upcomingDiv.querySelectorAll('.forecast-info')).forEach(e => e.remove());
    }

    function showError() {

        forecastDiv.style.display = 'block';
        clearForecast();

        const error = document.createElement('div');
        error.textContent = 'Error';

        currDiv.appendChild(error);
    }
}

attachEvents();
