function loadRepos() {

   const resDiv = document.getElementById('res');
   const URL = 'https://api.github.com/users/testnakov/repos';

   fetch(URL)

      .then(res => res.text())
      .then(data => {
           resDiv.textContent = data;
      });
}