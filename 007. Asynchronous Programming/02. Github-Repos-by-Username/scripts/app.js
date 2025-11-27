function loadRepos() {
	
	const userInput = document.getElementById('username');
	const repoUl = document.getElementById('repos');
	repoUl.innerHTML = '';

	const user = userInput.value.trim();
	const URL = `https://api.github.com/users/${username}/repos`;

	fetch(URL) 
		.then(res => { 

			if (!res.ok) {
				throw new Error(res.status);
			}
		return res.json()

		})
		.then(data => {

			data.forEach(repo => {

				const li = document.createElement('li');
				const a = document.createElement('a');

				a.href = repo.html_url;
				a.textContent = repo.full_name;

				li.appendChild(a);
				repoUl.appendChild(li);
			})
		})
		.catch(errMsg => {
			
			const liEl = document.createElement('li');
			liEl.textContent = `${errMsg} (Not Found)`;
			repoUl.appendChild(liEl);
		})
}		