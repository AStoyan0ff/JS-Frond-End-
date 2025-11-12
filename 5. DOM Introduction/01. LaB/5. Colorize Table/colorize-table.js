function colorize() {
    
    const trElements = document.querySelectorAll('tbody tr');
    
    trElements.forEach((trElements, idx) => {
        if (idx % 2 !== 0) trElements.style.backgroundColor = 'Teal';
    });
    
}