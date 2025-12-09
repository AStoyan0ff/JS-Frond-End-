window.addEventListener("load", solve);

function solve() {

    const emailInpRef = document.getElementById('email');
    const eInpRef = document.getElementById('event');
    const locationInput = document.getElementById('location');
    const nextBtn = document.getElementById('next-btn');

    const previewList = document.getElementById('preview-list');
    const eList = document.getElementById('event-list');

    nextBtn.addEventListener('click', isNext);

    function isNext() {

        const email = emailInpRef.value.trim();
        const eName = eInpRef.value.trim();
        const location = locationInput.value.trim();

        if (!email || !eName || !location) return;

        const li = document.createElement('li');
        li.classList.add('application');

        const article = document.createElement('article');

        const h4 = document.createElement('h4');
        h4.textContent = email;

        const pEvent = document.createElement('p');
        pEvent.innerHTML = `<strong>Event:</strong><br>${eName}`;

        const pLocation = document.createElement("p");
        pLocation.innerHTML = `<strong>Location:</strong><br>${location}`;

        article.appendChild(h4);
        article.appendChild(pEvent);
        article.appendChild(pLocation);

        const editBtn = document.createElement('button');
        editBtn.textContent = 'edit';
        editBtn.classList.add('action-btn', 'edit');

        const applyBtn = document.createElement('button');
        applyBtn.textContent = 'apply';
        applyBtn.classList.add('action-btn', 'apply');

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(applyBtn);

        previewList.appendChild(li);

        nextBtn.disabled = true;

        emailInpRef.value = '';
        eInpRef.value = '';
        locationInput.value = '';

        editBtn.addEventListener('click', () => {

            emailInpRef.value = email;
            eInpRef.value = eName;
            locationInput.value = location;

            li.remove();
            nextBtn.disabled = false;
        });

        applyBtn.addEventListener('click', () => {

            editBtn.remove();
            applyBtn.remove();

            previewList.removeChild(li);
            eList.removeChild(li);

            nextBtn.disabled = false;
        });
    }
}
