document.addEventListener('DOMContentLoaded', focused);

function focused() {
    
    const panels = document.querySelectorAll('.panel input');

    panels.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused')
        });

        input.addEventListener('blur', () => {
            input.parentElement.classList.remove('focused')
        });
    });
}
