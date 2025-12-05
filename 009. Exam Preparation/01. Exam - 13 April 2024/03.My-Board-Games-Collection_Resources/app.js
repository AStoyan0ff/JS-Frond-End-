const nameInput = document.getElementById('g-name');
const typeInput = document.getElementById('type');
const playersInput = document.getElementById('players');

const addBtn = document.getElementById('add-game');
const editBtn = document.getElementById('edit-game');
const loadBtn = document.getElementById('load-games');

const divGamesList = document.getElementById('games-list');

const URL = 'http://localhost:3030/jsonstore/games/';

let selectedGameId = null;

loadBtn.addEventListener('click', loadGames);
addBtn.addEventListener('click', addGame);
editBtn.addEventListener('click', saveEditedGame);

// ================================
// LOAD ALL GAMES
// ================================
async function loadGames() {

    const res = await fetch(URL);
    const data = await res.json();

    divGamesList.replaceChildren();

    Object.values(data).forEach(game => {

        const gameDiv = document.createElement('div');
        gameDiv.classList.add('board-game');

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        const nameP = document.createElement('p');
        nameP.textContent = game.name;

        const typeP = document.createElement('p');
        typeP.textContent = game.type;

        const playersP = document.createElement('p');
        playersP.textContent = game.players;

        contentDiv.appendChild(nameP);
        contentDiv.appendChild(typeP);
        contentDiv.appendChild(playersP);

        const btnContainer = document.createElement('div');
        btnContainer.classList.add('buttons-container');

        const changeBtn = document.createElement('button');
        changeBtn.classList.add('change-btn');
        changeBtn.textContent = 'Change';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.textContent = 'Delete';

        btnContainer.appendChild(changeBtn);
        btnContainer.appendChild(deleteBtn);

        gameDiv.appendChild(contentDiv);
        gameDiv.appendChild(btnContainer);

        divGamesList.appendChild(gameDiv);
       
        changeBtn.addEventListener('click', () => {
            loadGameForEdit(game);
        });
        
        deleteBtn.addEventListener('click', async () => {

            await fetch(URL + game._id, {
                method: 'DELETE',
            });

            loadGames();
        });
    });
}

// ================================
// LOAD GAME INTO FORM FOR EDITING
// ================================
function loadGameForEdit(game) {

    nameInput.value = game.name;
    typeInput.value = game.type;
    playersInput.value = game.players;

    selectedGameId = game._id;

    editBtn.disabled = false;
    addBtn.disabled = true;
}

// ================================
// ADD NEW GAME (POST)
// ================================
async function addGame() {

    const name = nameInput.value.trim();
    const type = typeInput.value.trim();
    const players = playersInput.value.trim();

    if (!name || !type || !players) return;

    await fetch(URL, {
        
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, type, players })
    });

    clearInputs();
    loadGames();
}

// ================================
// SAVE EDITED GAME (PUT)
// ================================
async function saveEditedGame() {

    const name = nameInput.value.trim();
    const type = typeInput.value.trim();
    const players = playersInput.value.trim();

    if (!name || !type || !players) return;

    await fetch(URL + selectedGameId, {

        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({

            name,
            type,
            players,
            _id: selectedGameId
        })
    });

    clearInputs();

    selectedGameId = null;
    editBtn.disabled = true;
    addBtn.disabled = false;

    loadGames();
}

// ================================
// CLEAR INPUT FIELDS
// ================================
function clearInputs() {

    nameInput.value = '';
    typeInput.value = '';
    playersInput.value = '';
}
