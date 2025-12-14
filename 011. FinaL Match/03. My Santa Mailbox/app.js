const URL = 'http://localhost:3030/jsonstore/gifts/';

const giftInp = document.getElementById('gift');
const forWhomInp = document.getElementById('for-whom');
const priceInp = document.getElementById('price');

const loadBtn = document.getElementById('load-presents');
const addBtn = document.getElementById('add-present');
const editBtn = document.getElementById('edit-present');

const giftList = document.getElementById('gift-list');

let currGiftID = null;

loadBtn.addEventListener('click', loadPresents);
addBtn.addEventListener('click', addPresent);
editBtn.addEventListener('click', editPresent);
giftList.addEventListener('click', onGiftAction);

async function loadPresents() {

    giftList.innerHTML = '';
    editBtn.disabled = true;
    addBtn.disabled = false;

    const res = await fetch(URL);
    const data = await res.json();

    Object.values(data).forEach(gift => {
        giftList.appendChild(createGift(gift));
    });
}

async function addPresent() {

    const gift = giftInp.value.trim();
    const forWhom = forWhomInp.value.trim();
    const price = priceInp.value.trim();

    if (!gift || !forWhom || !price) return;

    await fetch(URL, {

        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gift, forWhom, price })
    });

    clearInputs();
    loadPresents();
}

function createGift(gift) {

    const giftBox = document.createElement('div');
    giftBox.className = 'gift-box';
    giftBox.dataset.id = gift._id;

    giftBox.innerHTML = `
            <div class="content">
                <p>${gift.gift}</p>
                <p>${gift.price}</p>
                <p>${gift.forWhom}</p>
            </div>
            <div class="buttons-container">
                <button class="change-btn">Change</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

    return giftBox;
}

function onGiftAction(e) {

    if (e.target.tagName !== 'BUTTON')  return;

    const giftBox = e.target.closest('.gift-box');
    const id = giftBox.dataset.id;
    const [gift, price, forWhom] = giftBox.querySelectorAll('.content p');

    if (e.target.classList.contains('change-btn')) {

        giftInp.value = gift.textContent;
        priceInp.value = price.textContent;
        forWhomInp.value = forWhom.textContent;

        currGiftID = id;

        addBtn.disabled = true;
        editBtn.disabled = false;

        giftBox.remove();
    }

    if (e.target.classList.contains('delete-btn')) {
        deleteGift(id);
    }
}

async function editPresent() {

    const gift = giftInp.value.trim();
    const forWhom = forWhomInp.value.trim();
    const price = priceInp.value.trim();

    if (!gift || !forWhom || !price) return;

    await fetch(URL + currGiftID, {

        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gift, forWhom, price })
    });

    clearInputs();
    currGiftID = null;

    editBtn.disabled = true;
    addBtn.disabled = false;

    loadPresents();
}

async function deleteGift(id) {

    await fetch(URL + id, {
        method: 'DELETE'
    });

    loadPresents();
}

function clearInputs() {

    giftInp.value = '';
    forWhomInp.value = '';
    priceInp.value = '';
}