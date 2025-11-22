window.addEventListener("load", solve);

function solve() {

  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const categoryInput = document.getElementById('category');

  const addBtn = document.getElementById('add-btn');
  const checkList = document.getElementById('check-list');
  const contactList = document.getElementById('contact-list');

  addBtn.addEventListener('click', addContact);

  function addContact(e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const category = categoryInput.value;

    if (!name || !phone || !category) return;

    const li = document.createElement('li');
    const article = document.createElement('article');

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `name:${name}`;

    const phoneParagraph = document.createElement('p');
    phoneParagraph.textContent = `phone:${phone}`;

    const categoryParahraph = document.createElement('p');
    categoryParahraph.textContent = `category:${category}`;

    const divBtn = document.createElement('div');
    divBtn.classList.add('buttons');

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit-btn');

    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-btn');

    article.appendChild(nameParagraph);
    article.appendChild(phoneParagraph);
    article.appendChild(categoryParahraph);

    divBtn.appendChild(editBtn);
    divBtn.appendChild(saveBtn);

    li.appendChild(article);
    li.appendChild(divBtn);
    checkList.appendChild(li);

    nameInput.value = '';
    phoneInput.value = '';
    categoryInput.value = '';

    editBtn.addEventListener('click', editContact);
    saveBtn.addEventListener('click', saveContact);

    function editContact() {

      nameInput.value = name;
      phoneInput.value = phone;
      categoryInput.value = category;

      li.remove();

    }

    function saveContact() {
      contactList.appendChild(li);

      editBtn.remove();
      saveBtn.remove();

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('del-btn');
      li.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', removeAll);

      function removeAll() {
        li.remove();
      }
    }
  }
}
