function extractText() {
    
    const liItem = document.querySelectorAll('li');
    const texarea = document.getElementById('result');

    for (const liElement of liItem) {
        const liText = liElement.textContent;

        texarea.textContent += liText + '\n';
    }
}