function deleteByEmail() {
    
    const input = document.querySelector('input[name="email"]').value;
    const rows = document.querySelectorAll('tbody tr');

    let isDelete = false;

    rows.forEach(r => {
        const email = r.children[1].textContent;

        if (email === input) {
            
            r.remove();
            isDelete = true;
        }
    });

    const result = document.getElementById('result');
    result.textContent = isDelete
        ? 'Deleted.'
        : 'Not found.';
}
