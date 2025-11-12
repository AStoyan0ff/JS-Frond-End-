function solve() {

   const text = document.getElementById('searchText').value;
   const towns = document.querySelectorAll('#towns li');

   let cnt = 0;

   for (const town of towns) {

      if (town.textContent.includes(text) && text !== '') {

         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         cnt++;

      } else {
         
         town.style.fontWeight = 'normal';
         town.style.textDecoration = 'none';
      }
   }

   document.getElementById('result').textContent = `${cnt} matches found`;
}