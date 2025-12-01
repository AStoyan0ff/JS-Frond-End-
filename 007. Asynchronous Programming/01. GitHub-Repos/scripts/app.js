function loadRepos() {

   const resDiv = document.getElementById('res');
   const URL = 'https://api.github.com/users/testnakov/repos';

   fetch(URL)

      .then(res => res.text())
      .then(data => {
           resDiv.textContent = data;
      });
}

async function loadRepos() {

   const resDiv = document.getElementById('res');
   const URL = 'https://api.github.com/users/testnakov/repos';

   const res =  await fetch(URL);
   const data = await res.text();
   
   resDiv.textContent = data;
}