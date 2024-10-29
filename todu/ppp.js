function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Use eval to compute the result
    } catch (error) {
        display.value = 'Error';
        setTimeout(clearDisplay, 1500); // Clear after 1.5 seconds
    }
}