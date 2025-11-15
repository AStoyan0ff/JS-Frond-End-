function sumTable() {
   
    const priceTd = Array.from(document.querySelectorAll('tbody tr td:nth-child(2)'));
    const sumTdElement = priceTd.pop();
    let result = 0;

    for (const element of priceTd) {
        result += Number(element.textContent);
    }
    
    sumTdElement.textContent = result;
}