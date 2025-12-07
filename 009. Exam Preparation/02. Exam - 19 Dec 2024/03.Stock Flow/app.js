const URL = 'http://localhost:3030/jsonstore/orders/';

const loadBtn = document.getElementById("load-orders");
const orderBtn = document.getElementById("order-btn");
const editOrderBtn = document.getElementById("edit-order");

const nameInput = document.getElementById("name");
const qtyInput = document.getElementById("quantity");
const dateInput = document.getElementById("date");

const divList = document.getElementById("list");

let currEdit = null;

loadBtn.addEventListener("click", loadOrders);
orderBtn.addEventListener("click", createOrder);
editOrderBtn.addEventListener("click", updateOrder);

async function loadOrders() {
    divList.innerHTML = "";

    const res = await fetch(URL);
    const data = await res.json();

    Object.values(data).forEach(order => renderOrder(order));
}

function renderOrder(order) {

    const container = document.createElement("div");
    container.className = "container";

    const nameEl = document.createElement("h2");
    nameEl.textContent = order.name;

    const dateEl = document.createElement("h3");
    dateEl.textContent = order.date;

    const qtyEl = document.createElement("h3");
    qtyEl.textContent = order.quantity;

    const changeBtn = document.createElement("button");
    changeBtn.className = "change-btn";
    changeBtn.textContent = "Change";

    const doneBtn = document.createElement("button");
    doneBtn.className = "done-btn";
    doneBtn.textContent = "Done";

    changeBtn.addEventListener("click", () => isChange(order, container));
    doneBtn.addEventListener("click", () => isDelete(order._id));

    container.appendChild(nameEl);
    container.appendChild(dateEl);
    container.appendChild(qtyEl);
    container.appendChild(changeBtn);
    container.appendChild(doneBtn);

    divList.appendChild(container);
}

async function createOrder(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const quantity = qtyInput.value.trim();
    const date = dateInput.value;

    if (!name || !quantity || !date) return;

    const newOrder = { name, quantity, date };

    await fetch(URL, {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newOrder)
    });

    clearInputs();
    await loadOrders();
}

function isChange(order, container) {

    nameInput.value = order.name;
    qtyInput.value = order.quantity;
    dateInput.value = order.date;

    currEdit = order._id;

    editOrderBtn.disabled = false;
    orderBtn.disabled = true;

    container.remove();
}

async function updateOrder(e) {
    e.preventDefault();

    if (!currEdit) return;

    const updatedOrder = {

        name: nameInput.value.trim(),
        quantity: qtyInput.value.trim(),
        date: dateInput.value
    };

    await fetch(URL + currEdit, {

        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedOrder)
    });

    clearInputs();
    currEdit = null;

    editOrderBtn.disabled = true;
    orderBtn.disabled = false;

    await loadOrders();
}

async function isDelete(id) {

    await fetch(URL + id, { 
        method: "DELETE" 
    });

    await loadOrders();
}

function clearInputs() {

    nameInput.value = "";
    qtyInput.value = "";
    dateInput.value = "";
}
// Yabba-Dabba-Doo =)