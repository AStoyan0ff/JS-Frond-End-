document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const distanceInp = document.getElementById('inputDistance');
    const unitsInp = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const output = document.getElementById('outputDistance');
    const button = document.getElementById('convert');

    const times = {

        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convertDistance() {

        const distance = Number(distanceInp.value);
        const form = unitsInp.value;
        const toUnit = outputUnits.value;

        const distanceMeter = distance * times[form];
        const convert = distanceMeter / times[toUnit];

        output.value = convert;
    }

    button.addEventListener('click', convertDistance);
}