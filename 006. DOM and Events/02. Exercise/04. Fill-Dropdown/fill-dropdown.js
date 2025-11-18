document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const menu = document.getElementById('menu');
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // спира формата да се презареди...

        const text = document.getElementById('newItemText').value;
        const value = document.getElementById('newItemValue').value;
        const option = document.createElement('option');

        option.text = text;
        option.value = value;

        menu.appendChild(option);

        // изчиства полетата
        document.getElementById('newItemText').value = '';
        document.getElementById('newItemValue').value = '';
    });
}
