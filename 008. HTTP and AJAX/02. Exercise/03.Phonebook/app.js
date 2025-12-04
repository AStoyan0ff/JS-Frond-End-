function attachEvents() {

    const listEl = document.querySelector("#phonebook");
    const personEl = document.querySelector("#person");
    const phoneEl = document.querySelector("#phone");
    const loadBtn = document.querySelector("#btnLoad");
    const createBtn = document.querySelector("#btnCreate");

    async function loadPhonebook() {

        const response = await fetch("http://localhost:3030/jsonstore/phonebook");
        const data = await response.json();

        listEl.replaceChildren();

        Object.values(data).forEach(entry => {

            const li = document.createElement("li");
            li.textContent = `${entry.person}: ${entry.phone}`;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";

            deleteBtn.addEventListener("click", async () => {
                await fetch(`http://localhost:3030/jsonstore/phonebook/${entry._id}`, { method: "DELETE" });
                li.remove();
            });

            li.appendChild(deleteBtn);
            listEl.appendChild(li);
        });
    }

    loadBtn.addEventListener("click", loadPhonebook);

    createBtn.addEventListener("click", async () => {

        const newEntry = {
            
            person: personEl.value.trim(),
            phone: phoneEl.value.trim()
        };

        await fetch("http://localhost:3030/jsonstore/phonebook", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEntry)
        });

        personEl.value = "";
        phoneEl.value = "";

        await loadPhonebook();
    });
}

attachEvents();
