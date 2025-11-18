document.addEventListener('DOMContentLoaded', solve);

function solve() {

    const inputForm = document.getElementById("input");
    const inputArea = inputForm.querySelector("textarea");
    const shopForm = document.getElementById("shop");
    const tableBody = shopForm.querySelector("tbody");
    const outputArea = shopForm.querySelector("textarea");

    function createTextCell(value) {

      const td = document.createElement("td");
      const p = document.createElement("p");

      p.textContent = value;
      td.appendChild(p);

      return td;
  }

  function createImgCell(src) {

      const td = document.createElement("td");
      const img = document.createElement("img");

      img.src = src;
      td.appendChild(img);

      return td;
  }

  function createCheckboxCell() {

      const td = document.createElement("td");
      const check = document.createElement("input");

      check.type = "checkbox";
      td.appendChild(check);

      return td;
  }

  function createRow(f) {
      const tr = document.createElement("tr");

      tr.appendChild(createImgCell(f.img));
      tr.appendChild(createTextCell(f.name));
      tr.appendChild(createTextCell(f.price));
      tr.appendChild(createTextCell(f.decFactor));
      tr.appendChild(createCheckboxCell());

      tableBody.appendChild(tr);
  }

  inputForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const list = JSON.parse(inputArea.value);
        list.forEach(createRow);
  });

  shopForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const rows = tableBody.querySelectorAll("tr");
      const bought = [];

      let totalCost = 0;
      let totalDecor = 0;

    rows.forEach(function (row) {
        const check = row.querySelector("input[type='checkbox']");

        if (check && check.checked) {

            const name = row.children[1].textContent;
            const price = Number(row.children[2].textContent);
            const dec = Number(row.children[3].textContent);

            bought.push(name);
            totalCost += price;
            totalDecor += dec;
        }
    });

    const avg = totalDecor / bought.length || 0;

    outputArea.value =
        `Bought furniture: ${bought.join(", ")}\n` +
        `Total price: ${totalCost}\n` +
        `Average decoration factor: ${avg}`;
    });
}

