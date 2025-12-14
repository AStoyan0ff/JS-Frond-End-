window.addEventListener("load", solve);

function solve() {

    const placeInput = document.getElementById('place');
    const actionInput = document.getElementById('action');
    const personInput = document.getElementById('person');
    const addBtn = document.getElementById('add-btn');

    const taskList = document.getElementById('task-list');
    const doneList = document.getElementById('done-list');

    addBtn.addEventListener('click', addTask);

    function addTask() {

        const place = placeInput.value.trim();
        const action = actionInput.value.trim();
        const person = personInput.value.trim();

        
        if (!place || !action || !person) {
            return;
        }

        
        const li = document.createElement('li');
        li.classList.add('clean-task');

       
        const article = document.createElement('article');

        const pPlace = document.createElement('p');
        pPlace.textContent = `Place:${place}`;

        const pAction = document.createElement('p');
        pAction.textContent = `Action:${action}`;

        const pPerson = document.createElement('p');
        pPerson.textContent = `Person:${person}`;

        article.appendChild(pPlace);
        article.appendChild(pAction);
        article.appendChild(pPerson);

        
        const buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('buttons');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = 'Edit';

        const doneBtn = document.createElement('button');
        doneBtn.classList.add('done');
        doneBtn.textContent = 'Done';

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(doneBtn);

        li.appendChild(article);
        li.appendChild(buttonsDiv);
        taskList.appendChild(li);

        
        placeInput.value = '';
        actionInput.value = '';
        personInput.value = '';

        
        editBtn.addEventListener('click', () => editTask(li));
        doneBtn.addEventListener('click', () => moveToDone(li));
    }

    function editTask(li) {
      
        const article = li.querySelector('article');
        const [pPlace, pAction, pPerson] = article.querySelectorAll('p');

        placeInput.value = pPlace.textContent.replace('Place:', '');
        actionInput.value = pAction.textContent.replace('Action:', '');
        personInput.value = pPerson.textContent.replace('Person:', '');

        li.remove();
    }

    function moveToDone(li) {
        const article = li.querySelector('article');

        
        const doneLi = document.createElement('li');
        doneLi.appendChild(article);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';

        doneLi.appendChild(deleteBtn);
        doneList.appendChild(doneLi);

        li.remove();

        deleteBtn.addEventListener('click', () => {
            doneLi.remove();
        });
    }
}
