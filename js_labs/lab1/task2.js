document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    const numberInput = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');

    function checkAndDisplayResult() {
        const num = parseInt(numberInput.value);
        
        if (isNaN(num) || num < 0) {
            resultElement.textContent = "Пожалуйста, введите корректное положительное число";
            return;
        }
        
        const last = num % 10;
        const lastTwo = num % 100;
        let message = '';

        // Проверка склонения слова "ворона"
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
    }

    // Обработчик для кнопки
    checkButton.addEventListener('click', checkAndDisplayResult);

    // Обработчик для нажатия Enter в поле ввода
    numberInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            checkAndDisplayResult();
        }
    });
});