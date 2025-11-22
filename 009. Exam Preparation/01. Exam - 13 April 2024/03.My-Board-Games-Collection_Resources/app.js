const nameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');

const addBtn = document.getElementById('add-game');
const editBtn = document.getElementById('edit-game');
const loadBtn = document.getElementById('load-games');

const divGamesList = document.getElementById('games-list');

loadBtn.addEventListener('click', loadGames);
addBtn.addEventListener('click', addGame);
editBtn.addEventListener('click', editGame);

const DATA_URL = 'http://localhost:3030/jsonstore/games/';
let selectGameId = null;

async function loadGames() {

    const gamesRes = await fetch(DATA_URL);
    const gamesData = await gamesRes.json();
    const gameArr = Object.values(gamesData);

    divGamesList.innerHTML = '';

    gameArr.forEach(object => {

        const gameDiv = document.createElement('div');
        gameDiv.classList.add('board-game');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = object.name;

        const playerParagraph = document.createElement('p');
        playerParagraph.textContent = object.players;

        const typeParagraph = document.createElement('p');
        typeParagraph.textContent = object.type;

        const divBtn = document.createElement('button');
        divBtn.classList.add('buttons-container');

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        contentDiv.appendChild(nameParagraph);
        contentDiv.appendChild(playerParagraph);
        contentDiv.appendChild(typeParagraph);

        divBtn.appendChild(changeBtn);
        divBtn.appendChild(deleteBtn);

        gameDiv.appendChild(contentDiv);
        gameDiv.appendChild(divBtn);

        divGamesList.appendChild(gameDiv);

        changeBtn.addEventListener('click', editGame);
        deleteBtn.addEventListener('click', deleteGame);

        function editGame() {

            nameInput.value = object.name;
            typeInput.value = object.type;
            playersInput.value = object.players;

            editBtn.disabled = false;
            addBtn.disabled = true;

            selectGameId = object._id;

        }

        async function deleteGame() {
            
            await fetch(`${DATA_URL}/${object._id}`, {
                method: 'DELETE',
            });

            await loadGames();
        }

    });
}

async function addGame() {

    const name = nameInput.value.trime();
    const type = typeInput.value.trim();
    const players = playersInput.value.trim();

    await fetch(BaseDataURL, {

        method: 'POST',
        headers: {
            'Content-Type': application/json
        },
        body: JSON.stringify({ name, type, players})
    });

    nameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';

    await loadGames();
}

async function editGame() {

    const name = nameInput.value.trime();
    const type = typeInput.value.trim();
    const players = playersInput.value.trim();

    await fetch(`${BaseDataURL}/${selectGameId}`, {

        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, type, players })
    });



    nameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';

    selectGameId = null;

    addBtn.disabled = false;
    editBtn.disabled = true;

    await loadGames();
}