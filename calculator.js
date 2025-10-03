/* Arithmetic functions (top-level functions as required) */
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    return number1 / number2;
}

/* Add event listeners after DOM has loaded */
document.addEventListener('DOMContentLoaded', function() {
    const num1Input = document.getElementById('number1');
    const num2Input = document.getElementById('number2');
    const resultSpan = document.getElementById('calculation-result');

    document.getElementById('add').addEventListener('click', function() {
        const number1 = parseFloat(num1Input.value) || 0;
        const number2 = parseFloat(num2Input.value) || 0;
        const result = add(number1, number2);
        resultSpan.textContent = result;
    });

    document.getElementById('subtract').addEventListener('click', function() {
        const number1 = parseFloat(num1Input.value) || 0;
        const number2 = parseFloat(num2Input.value) || 0;
        const result = subtract(number1, number2);
        resultSpan.textContent = result;
    });

    document.getElementById('multiply').addEventListener('click', function() {
        const number1 = parseFloat(num1Input.value) || 0;
        const number2 = parseFloat(num2Input.value) || 0;
        const result = multiply(number1, number2);
        resultSpan.textContent = result;
    });

    document.getElementById('divide').addEventListener('click', function() {
        const number1 = parseFloat(num1Input.value) || 0;
        const number2 = parseFloat(num2Input.value) || 0;
        const result = divide(number1, number2);
        resultSpan.textContent = result;
    });
});
