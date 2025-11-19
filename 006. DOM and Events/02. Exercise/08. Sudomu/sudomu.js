document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const form = document.querySelector('#solutionCheck');
    const table = form.querySelector('table');
    const field = table.querySelector('tbody');
    const sizeS = document.querySelector('#size');
    const paragraph = document.querySelector('#check');

    sizeS.addEventListener('change', function () {
        const size = Number(sizeS.value);
        
        field.innerHTML = '';

        for (let r = 0; r < size; r++) {
            const tr = document.createElement('tr');

            for (let c = 0; c < size; c++) {

                const td = document.createElement('td');
                const input = document.createElement('input');

                input.type = 'number';
                input.min = 1;
                input.max = size;
                input.required = true;

                td.appendChild(input);
                tr.appendChild(td);
            }

            field.appendChild(tr);
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const size = Number(sizeS.value);
        const checkRow = [];
        const checkCol = [];

        for (let pos = 0; pos < size; pos++) {

            checkRow[pos] = {};
            checkCol[pos] = {};
        }

        let flag = true;
        const rows = field.querySelectorAll('tr');

        for (let r = 0; r < size; r++) {
            const cell = rows[r].querySelectorAll('td');

            for (let c = 0; c < size; c++) {

                const input = cell[c].querySelector('input');
                const value = input.value;

                if (checkRow[r][value] || checkCol[c][value]) {

                    flag = false;
                    break;
                }

                checkRow[r][value] = true;
                checkCol[c][value] = true;
            }

            if (!flag) break;
        }

        if (flag) {

            paragraph.textContent = 'Success!';
            table.style.border = '2px solid green';

        } else {

            paragraph.textContent = 'Keep trying...';
            table.style.border = '2px solid red';
        }
    });

    form.addEventListener('reset', function () {

        paragraph.textContent = '';
        table.style.border = 'none';
    });
}