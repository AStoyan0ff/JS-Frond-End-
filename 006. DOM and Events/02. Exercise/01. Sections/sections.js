document.addEventListener('DOMContentLoaded', solve);

function solve() {

      const div = document.createElement('div');
      const p = document.createElement('p');

      p.textContent = text;
      p.hidden = true;

      div.appendChild(p);

      div.addEventListener('click', function () {
            p.hidden = false;
      });

   output.appendChild(div);
}

function handleSubmit(e) {
   e.preventDefault();

   const items = input.value.split(', ');
   output.innerHTML = '';

   items.forEach(createItems);
}
