function addItem() {
    
    const getItems = document.getElementById('items');
    const newItems = document.getElementById('newItemText');

    const currItems = newItems.value.trim(); 
    const newLiItems = document.createElement('li'); 

    newLiItems.textContent = currItems;
    getItems.appendChild(newLiItems); 
}

/**
 *  1. Взимаме всички 'li' elements по id 
 *  2. Взимаме новите 'li' elements по id
 *  -----------------------------------------------------------------------------
 *  3. Към текущите 'li' добавяме стойността на новите, и премахваме интервалите
 *  4. Създаваме нов елемент към DOM с таг -> (li) в края на "колекцията"
 *  -----------------------------------------------------------------------------
 *  5. Съдържанието на новият 'li' елемент става текущият 'li' елеменет
 *  6. Взимаме всички 'li' елементи и добавяме към тях новият 'li' елемент 
 *  -----------------------------------------------------------------------------
 *  7. crеateElement() -> създава НОВ елемент в DOM дървото 
 *  8. appendChild() -> добавят елемент в края на колекцията
 */