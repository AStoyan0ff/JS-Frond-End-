document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const daysInp = document.getElementById('days-input');
    const hoursInp = document.getElementById('hours-input');
    const minutesInp = document.getElementById('minutes-input');
    const secondsInp = document.getElementById('seconds-input');

    const times = {

        days: 86400,
        hours: 3600,
        minutes: 60,
        seconds: 1
    };

    function convert(value, timeInSeconds) {
        const totalSeconds = Number(value) * timeInSeconds;

        daysInp.value = (totalSeconds / times.days).toFixed(2);
        hoursInp.value = (totalSeconds / times.hours).toFixed(2);
        minutesInp.value = (totalSeconds / times.minutes).toFixed(2);
        secondsInp.value = (totalSeconds / times.seconds).toFixed(2);
    }

    document.addEventListener('submit', function (e) {

        e.preventDefault();
        const form = e.target;

        if (form.id === 'days') convert(daysInp.value, times.days);
        else if (form.id === 'hours') convert(hoursInp.value, times.hours);
        else if (form.id === 'minutes') convert(minutesInp.value, times.minutes);
        else if (form.id === 'seconds') convert(secondsInp.value, times.seconds);
    });
}