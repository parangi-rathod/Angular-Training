document.addEventListener('DOMContentLoaded', function () {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.button');

    let currentInput = '';
    let operator = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;
            if (!isNaN(value) || value === '.') {
                currentInput += value;
            } else if (value === 'C') {
                clearDisplay();
            } else if (value === '=') {
                calculate();
            } else {
                if (operator && !isNaN(currentInput[currentInput.length - 1])) {
                    currentInput += ` ${value} `;
                } else {
                    operator = value;
                    currentInput += ` ${operator} `;
                }
            }
            display.value = currentInput;
        });
    });

    function clearDisplay() {
        currentInput = '';
        operator = '';
        display.value = '';
    }

    function calculate() {
        console.log('Current Input:', currentInput);
        const expression = currentInput.split(' ');
        console.log('Expression:', expression);
        const num1 = parseInt(expression[0]);
        const num2 = parseInt(expression[2]);
        switch (operator) {
            case '+':
                currentInput = num1 + num2;
                break;
            case '-':
                currentInput = num1 - num2;
                break;
            case 'X':
                currentInput = num1 * num2;
                break;
            case '/':
                currentInput = num1 / num2;
                break;
            default:
                break;
        }
        display.value = currentInput.toString(); // Convert result to string
    }
});
