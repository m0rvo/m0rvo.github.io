document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    const numberInput = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');

    checkButton.addEventListener('click', function() {
        const num = parseInt(numberInput.value);
        
        if (isNaN(num) || num < 0) {
            resultElement.textContent = "Пожалуйста, введите корректное положительное число";
            return;
        }
        
        const last = num % 10;
        const lastTwo = num % 100;
        let message = '';

        // Реализация с if...else
        if (lastTwo !== 11 && lastTwo !== 12 && lastTwo !== 13 && lastTwo !== 14) {
            if (last === 1) {
                message = `На ветке сидит ${num} ворона`;
            } else if (last >= 2 && last <= 4) {
                message = `На ветке сидит ${num} вороны`;
            } else {
                message = `На ветке сидит ${num} ворон`;
            }
        } else {
            message = `На ветке сидит ${num} ворон`;
        }
        
        
        
        resultElement.textContent = message;
    });
});