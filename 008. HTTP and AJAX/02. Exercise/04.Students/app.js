const tableBody = document.querySelector("#results tbody");
const form = document.querySelector("#form");

const URL = 'http://localhost:3030/jsonstore/collections/students';

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const student = Object.fromEntries(formData);

    await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(student),
    });

    form.reset();
    await loadStudents();
});

async function loadStudents() {

    const res = await fetch(URL);
    const students = await res.json();

    tableBody.replaceChildren();

    Object.values(students).forEach(st => {
        const tr = document.createElement("tr");

        ["firstName", "lastName", "facultyNumber", "grade"].forEach(key => {

            const td = document.createElement("td");
            td.textContent = st[key];
            tr.appendChild(td);
        });

        tableBody.appendChild(tr);
    });
}

loadStudents();
