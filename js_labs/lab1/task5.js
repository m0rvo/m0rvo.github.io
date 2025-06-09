document.addEventListener('DOMContentLoaded', function() {
    const drawTableButton = document.getElementById('drawTableButton');
    const clearConsoleButton = document.getElementById('clearConsoleButton');
    const rowsInput = document.getElementById('rowsInput');
    const resultElement = document.getElementById('result');

    // Основная функция для отрисовки таблицы
    function drawAnimalTable(rows) {
        const pattern = ['dog', 'dog', 'dog', 'cat', 'cat'];
        let tableOutput = '';
        let consoleOutput = '';

        for (let i = 0; i < rows; i++) {
            let row = [];
            // Создаем строку из 6 животных (повторяем паттерн)
            for (let j = 0; j < 6; j++) {
                const index = (i * 6 + j) % pattern.length;
                row.push(pattern[index]);
            }
            
            // Формируем строку с табуляцией в качестве разделителя
            const rowText = row.join('\t');
            tableOutput += rowText + '\n';
            consoleOutput += rowText + '\n';
        }

        // Выводим в консоль
        console.log("Таблица животных (" + rows + " строк):");
        console.log(consoleOutput);

        // Выводим на страницу
        resultElement.textContent = tableOutput;
    }

    // Функция обработки ввода
    function handleDrawTable() {
        const rows = parseInt(rowsInput.value);
        
        if (isNaN(rows) || rows < 1) {
            resultElement.textContent = "Пожалуйста, введите число строк больше 0";
            return;
        }
        
        drawAnimalTable(rows);
    }

    // Обработчик кнопки "Нарисовать таблицу"
    drawTableButton.addEventListener('click', handleDrawTable);

    // Обработчик нажатия Enter в поле ввода
    rowsInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleDrawTable();
        }
    });

    // Обработчик кнопки "Очистить консоль"
    clearConsoleButton.addEventListener('click', function() {
        console.clear();
        resultElement.textContent = "Консоль очищена";
        setTimeout(() => { resultElement.textContent = ""; }, 2000);
    });

    // Отрисовка таблицы при загрузке (по умолчанию 5 строк)
    drawAnimalTable(5);
});