function lockedProfile() {
    loadProfiles();
}

async function loadProfiles() {
    const main = document.getElementById("main");

    const res = await fetch("http://localhost:3030/jsonstore/advanced/profiles");
    const profiles = await res.json();

    let idx = 0;

    Object.values(profiles).forEach(profile => {
        idx++;

        const container = el("div", { className: "profile" });

        container.append(
            el("img", { src: "./icon-profile.png", className: "userIcon" }),
            el("label", {}, "Lock"),
            el("input", { type: "radio", name: `user${idx}Locked`, value: "lock", checked: true }),
            el("label", {}, "Unlock"),
            el("input", { type: "radio", name: `user${idx}Locked`, value: "unlock" }),
            el("hr"),
            el("label", {}, "Username"),
            el("input", {
                
                type: "text",
                value: profile.username,
                disabled: true,
                readOnly: true
            })
        );
       
        const hidden = el("div", { id: `user${idx}HiddenFields`, style: "display: none" },
            el("label", {}, "Email:"),
            el("input", {

                type: "email",
                value: profile.email,
                disabled: true,
                readOnly: true
            }),
            el("label", {}, "Age:"),
            el("input", {

                type: "number",
                value: profile.age,
                disabled: true,
                readOnly: true
            })
        );

        container.appendChild(hidden);
       
        const btn = el("button", { disabled: true }, "Show more");
        container.appendChild(btn);

        const [lockRadio, unlockRadio] = container.querySelectorAll(`input[name="user${idx}Locked"]`);

        lockRadio.addEventListener("change", () => (btn.disabled = true));
        unlockRadio.addEventListener("change", () => (btn.disabled = false));

        let expanded = false;

        btn.addEventListener("click", () => {

            expanded = !expanded;
            hidden.style.display = expanded ? "block" : "none";
            btn.textContent = expanded ? "Hide it" : "Show more";
        });

        main.appendChild(container);
    });
}

function el(type, props = {}, ...content) {

    const element = document.createElement(type);
    Object.assign(element, props);

    for (const item of content) {
        element.append(item instanceof Node ? item : document.createTextNode(item));
    }

    return element;
}
