document.addEventListener('DOMContentLoaded', function() {
    const pensionForm = document.getElementById('pensionForm');
    
    pensionForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const ageInput = document.getElementById('age');
        const age = parseInt(ageInput.value);
        const genderInput = document.querySelector('input[name="gender"]:checked');
        const resultTextarea = document.getElementById('result');
        const ageError = document.getElementById('ageError');
        const genderError = document.getElementById('genderError');
        
        // Сброс сообщений об ошибках
        ageError.textContent = '';
        genderError.textContent = '';
        resultTextarea.value = '';
        
        // Валидация ввода
        if (isNaN(age) || age < 0 || age > 120) {
            ageError.textContent = 'Пожалуйста, введите корректный возраст (0-120)';
            return;
        }
        
        if (!genderInput) {
            genderError.textContent = 'Пожалуйста, укажите ваш пол';
            return;
        }
        
        const gender = genderInput.value;
        let message = '';
        
        if (age >= 0 && age < 18) {
            message = "Вам пока рано работать - сосредоточьтесь на учёбе";
        } else if (gender === 'male') {
            if (age >= 18 && age < 65) {
                message = "Вам ещё работать до пенсии";
            } else if (age >= 65) {
                message = "Вы достигли пенсионного возраста (65 лет)";
            }
        } else if (gender === 'female') {
            if (age >= 18 && age < 60) {
                message = "Вам ещё работать до пенсии";
            } else if (age >= 60) {
                message = "Вы достигли пенсионного возраста (60 лет)";
            }
        }
        
        resultTextarea.value = message;
    });
});