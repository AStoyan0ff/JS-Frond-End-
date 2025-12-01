async function loadCommits() {
    // Try it with Fetch API

    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;
    const ul = document.getElementById('commits');

    ul.innerHTML = '';
    const URL = `https://api.github.com/repos/${username}/${repo}/commits`;

    try {
        const res = await fetch(URL);

        if (!res.ok) {
            throw new Error(res.status);
        }

        const data = await res.json();

        data.forEach(e => {

            const li = document.createElement('li');
            li.textContent = `${e.commit.author.name}: ${e.commit.message}`;
            ul.appendChild(li);
        })
    } catch (err) {

        const li = document.createElement('li');
        li.textContent = `Error: ${err.message} (Not Found)`;
        ul.appendChild(li);
    }
}