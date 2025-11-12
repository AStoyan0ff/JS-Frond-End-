function solve() {
   
   const search = document.getElementById('searchField').value.toLowerCase();
   const rows = document.querySelectorAll('tbody tr');
   
   for (const element of rows) {
      element.classList.toggle('select', search && element.textContent.toLocaleLowerCase().includes(search));
   }
   
   document.getElementById('searchField').value = '';
}