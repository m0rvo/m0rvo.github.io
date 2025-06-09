'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('pension-form');
    const clearBtn = document.getElementById('clear-btn');
    
    // Обработчик отправки формы
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        calculatePension();
    });
    
    // Обработчик кнопки очистки
    clearBtn.addEventListener('click', clearForm);
    
    // Обработчик нажатия Enter в поле ввода возраста
    document.getElementById('age').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            calculatePension();
        }
    });
});

function calculatePension() {
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);
    const genderElement = document.querySelector('input[name="gender"]:checked');
    const result = document.getElementById('result');

    // Валидация возраста
    if (ageInput.value === '' || isNaN(age) || age < 0) {
        result.textContent = 'Введите корректный возраст';
        return;
    }

    // Проверка выбора пола
    if (!genderElement) {
        result.textContent = 'Пожалуйста, выберите пол';
        return;
    }

    const gender = genderElement.value;
    let message = '';

    // Определение сообщения в зависимости от возраста и пола
    if (age <= 17) {
        message = 'Вам работать ещё рано — учитесь';
    } 
    else if ((gender === 'м' && age >= 18 && age <= 59) || 
             (gender === 'ж' && age >= 18 && age <= 54)) {
        message = 'Вам ещё работать и работать';
    } 
    else if ((gender === 'м' && age >= 60 && age <= 64) || 
             (gender === 'ж' && age >= 55 && age <= 59)) {
        message = 'Скоро пенсия!';
    } 
    else if ((gender === 'м' && age >= 65 && age <= 100) || 
             (gender === 'ж' && age >= 60 && age <= 100)) {
        message = 'Вам пора на пенсию';
    } 
    else {
        message = 'Да кто ты такой?';
    }

    result.textContent = message;
}

function clearForm() {
    document.getElementById('pension-form').reset();
    document.getElementById('result').textContent = '';
}