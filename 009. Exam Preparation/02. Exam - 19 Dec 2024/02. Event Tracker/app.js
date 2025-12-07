window.addEventListener("load", solve);

function solve() {

    const eInput = document.getElementById("event");
    const noteInput = document.getElementById("note");
    const dateInput = document.getElementById("date");
    const saveBtn = document.getElementById("save");

    const upList = document.getElementById("upcoming-list");
    const endList = document.getElementById("events-list");
    const deleteBtn = document.querySelector(".btn.delete");

    saveBtn.addEventListener("click", onSave);

    function onSave() {

        const name = eInput.value.trim();
        const note = noteInput.value.trim();
        const date = dateInput.value;

        if (!name || !note || !date) return;

        const li = createItems(name, note, date);
        upList.appendChild(li);
        
        eInput.value = "";
        noteInput.value = "";
        dateInput.value = "";
    }

    function createItems(name, note, date) {

        const li = document.createElement("li");
        li.className = "event-item";

        const container = document.createElement("div");
        container.className = "event-container";

        const article = document.createElement("article");

        article.innerHTML = `
            <p>Name: ${name}</p>
            <p>Note: ${note}</p>
            <p>Date: ${date}</p>
        `;

        const divBtn = document.createElement("div");
        divBtn.clasName = "buttons";

        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "edit"); //! className not work!!!
        editBtn.textContent = "Edit";

        const doneBtn = document.createElement("button");
        doneBtn.classList.add("btn", "done");
        doneBtn.textContent = "Done";

        divBtn.appendChild(editBtn);
        divBtn.appendChild(doneBtn);
        container.appendChild(article);
        container.appendChild(divBtn);
        li.appendChild(container);
        
        editBtn.addEventListener("click", () => {
            const [nameP, noteP, dateP] = article.querySelectorAll("p");

            eInput.value = nameP.textContent.replace("Name: ", "");
            noteInput.value = noteP.textContent.replace("Note: ", "");
            dateInput.value = dateP.textContent.replace("Date: ", "");

            li.remove();
        });
        
        doneBtn.addEventListener("click", () => {
            
            const endLi = document.createElement("li");
            endLi.className = "event-item";

            const endArt = document.createElement("article");
            endArt.innerHTML = article.innerHTML;

            endLi.appendChild(endArt);
            endList.appendChild(endLi);

            li.remove();
        });

        return li;
    }
    
    deleteBtn.addEventListener("click", () => {
        endList.innerHTML = "";
    });
}
