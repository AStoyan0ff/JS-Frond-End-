async function lockedProfile() {

    const main = document.getElementById('main');
    main.replaceChildren();

    const URL = 'http://localhost:3030/jsonstore/advanced/profiles';

    const res = await fetch(URL);
    const data = await res.json();

    Object.values(data).forEach((user, idx) => {
        main.appendChild(createProfile(user, idx + 1));
    });
}

function createProfile(user, idx) {

    const div = document.createElement('div');
    div.className = 'profile';

    div.innerHTML = `
        <img src="./iconProfile2.png" class="userIcon">
        <label>Lock</label>
        <input type="radio" name="user${idx}Locked" value="lock" checked>
        <label>Unlock</label>
        <input type="radio" name="user${idx}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user${idx}Username" value="${user.username}" disabled readonly>
        
        <div id="user${idx}Hidden" style="display:none">
            <hr>
            <label>Email:</label>
            <input type="email" name="user${idx}Email" value="${user.email}" disabled readonly>
            <label>Age:</label>
            <input type="number" name="user${idx}Age" value="${user.age}" disabled readonly>
        </div>

        <button>Show more</button>
    `;

    const btn = div.querySelector('button');
    const hiddenDiv = div.querySelector(`#user${idx}Hidden`);
    const lockRadio = div.querySelector(`input[value="lock"]`);
    const unlockRadio = div.querySelector(`input[value="unlock"]`);

    btn.addEventListener('click', () => {

        if (unlockRadio.checked) {
            if (hiddenDiv.style.display === 'none') {

                hiddenDiv.style.display = 'block';
                btn.textContent = 'Hide it';

            } else {

                hiddenDiv.style.display = 'none';
                btn.textContent = 'Show more';
            }
        }
    });

    lockRadio.addEventListener('change', () => {

        hiddenDiv.style.display = 'none';
        btn.textContent = 'Show more';
    });

    return div;
}