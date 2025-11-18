function attachGradientEvents() {

    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', onMove);

    function onMove(e) {

        const width = e.currentTarget.clientWidth;
        const x = e.offsetX;
        const percent = Math.min(100, Math.max(0, Math.floor((x / width) * 100)));

        result.textContent = `${percent}%`;
    }
}
/**
 * 1. Взимам елемента с id "gradient"
 * 2. Взимам елемента с id "result"
 * 
 * 3. Чакам събитието 'mousemove', което се активира при всяко движение
 *    на мишката върху елемента
 * 
 * 4. e.offsetX -> показва колко px в сме изминали върху градиента
 * 5. e.currentTarget.clientWidth -> връща дължината на елемента или (ширината)
 * 
 * 6. Правия onMove, в която използвам формулата за изчисление на процента 

 */


    