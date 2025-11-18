function addItem() {

    const getItems = document.getElementById('items');
    const newItems = document.getElementById('newItemText');

    const currItems = newItems.value.trim();
    const newLiItems = document.createElement('li');

    newLiItems.textContent = currItems;

    const ahrefDelete = document.createElement('a');
    ahrefDelete.textContent = '[Delete]';
    ahrefDelete.href = '#';

    ahrefDelete.addEventListener('click', handleFunction);

    newLiItems.appendChild(ahrefDelete);
    getItems.appendChild(newLiItems);

    function handleFunction() {
        newLiItems.remove();
    }
}
                        //----------------
                            //Variant 2
                        //----------------
function addItem() {

    const itemsList = document.getElementById('items');
    const input = document.getElementById('newItemText');

    const text = input.value.trim();
    if (text === '') return;         

    const li = document.createElement('li');
    li.textContent = text + ' ';

    const deleteBtn = document.createElement('a');

    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';
    deleteBtn.addEventListener('click', () => li.remove());

    li.appendChild(deleteBtn);
    itemsList.appendChild(li);

    input.value = '';                 
}



