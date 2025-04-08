function appendValue(value) {
    document.getElementById('display').value += value ;
}

function deleteLast() {
    let display = document.getElementById('display')
    display.value = display.value.slice(0 , -1)
}

function clearDispaly() {
    document.getElementById('display').value = '' ;
}

function calculatorResult() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value)
    }
    catch {
        display.value = 'خطا';
    }
} 