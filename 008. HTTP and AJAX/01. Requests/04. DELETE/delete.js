async function deleteGame() {

    await fetch(DATA_URL, {
        method: 'DELETE',
    });

    await loadGames(); // function ()
}

