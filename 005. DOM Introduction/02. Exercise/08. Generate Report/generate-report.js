function solve() {
    
    let checkboxes = document.querySelectorAll('th input[type="checkbox"]');
    let cols = [];

    for (let pos = 0; pos < checkboxes.length; pos++) {
        if (checkboxes[pos].checked) cols.push(pos);
    }
   
    let rows = document.querySelectorAll('tbody tr');
    let result = [];

   
    for (let pos = 0; pos < rows.length; pos++) {

        let cells = rows[pos].querySelectorAll('td');
        let object = {};
       
        for (let idx = 0; idx < cols.length; idx++) {

            let colIdx = cols[idx];
            let name = checkboxes[colIdx].name;
            object[name] = cells[colIdx].textContent;
        }

        result.push(object);
    }
    document.getElementById('output').value = JSON.stringify(result);
}
