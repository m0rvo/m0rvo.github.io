document.getElementById('pensionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const resultTextarea = document.getElementById('result');
    
    let message = "Да кто ты такой?";
    
    if (age >= 0 && age <= 17) {
        message = "Вам работать ещё рано — учитесь";
    } else if (gender === 'male') {
        if (age >= 18 && age <= 59) {
            message = "Вам ещё работать и работать";
        } else if (age >= 60 && age <= 64) {
            message = "Скоро пенсия!";
        } else if (age >= 65) {
            message = "Вам пора на пенсию";
        }
    } else if (gender === 'female') {
        if (age >= 18 && age <= 54) {
            message = "Вам ещё работать и работать";
        } else if (age >= 55 && age <= 59) {
            message = "Скоро пенсия!";
        } else if (age >= 60) {
            message = "Вам пора на пенсию";
        }
    }
    
    resultTextarea.value = message;
});