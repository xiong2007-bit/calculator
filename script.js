const display = document.getElementById('display');

function appendNumber(num) {
    if (display.value === '0' && num !== '.') {
        display.value = num;
    } else if (num === '.' && display.value.includes('.')) {
        return;
    } else {
        display.value += num;
    }
}

function appendOperator(op) {
    if (display.value === '') return;
    
    const lastChar = display.value[display.value.length - 1];
    if (['+', '-', '*', '/', '.'].includes(lastChar)) {
        return;
    }
    
    display.value += op;
}

function calculate() {
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Error';
        setTimeout(() => {
            display.value = '';
        }, 1500);
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}