let numA;
let operator;
let numB;
let result;
let sums = document.querySelector('.sums');
let display = document.querySelector('.display');
let displayValue = (display.innerHTML);
let sum;
let i = 0;
let total;

function add(numA, numB) {
    return numA + numB;
}

function subtract(numA, numB) {
    return numA - numB;
}

function multiply(numA, numB) {
    return numA * numB;
}

function divide(numA, numB) {
    return numA / numB;
}

function operate(numA, operator, numB) {
    if (operator == '+') {
        return add(numA, numB);
    } else if (operator == '-') {
        return subtract(numA, numB);
    } else if (operator == '*') {
        return multiply(numA, numB);
    } else if (operator == '/') {
        return divide(numA, numB);
    }
}

function onePressed() {
    const one = document.querySelector('.one');
    one.addEventListener('click', () => {
        displayValue = display.innerHTML += 1
    });
}
function twoPressed() {
    const two = document.querySelector('.two');
    two.addEventListener('click', () => {
        displayValue = display.innerHTML += 2
    });
}
function threePressed() {
    const three = document.querySelector('.three');
    three.addEventListener('click', () => {
        displayValue = display.innerHTML += 3
    })
}
function fourPressed() {
    const four = document.querySelector('.four');
    four.addEventListener('click', () => {
        displayValue = display.innerHTML += 4
    });
}
function fivePressed() {
    const five = document.querySelector('.five');
    five.addEventListener('click', () => {
        displayValue = display.innerHTML += 5
    });
}
function sixPressed() {
    const six = document.querySelector('.six');
    six.addEventListener('click', () => {
        displayValue = display.innerHTML += 6
    });
}
function sevenPressed() {
    const seven = document.querySelector('.seven');
    seven.addEventListener('click', () => {
        displayValue = display.innerHTML += 7
    })
}
function eightPressed() {
    const eight = document.querySelector('.eight');
    eight.addEventListener('click', () => {
        displayValue = display.innerHTML += 8
    })
}
function ninePressed() {
    const nine = document.querySelector('.nine');
    nine.addEventListener('click', () => {
    displayValue = display.innerHTML += 9
    })
}
function zeroPressed() {
    const zero = document.querySelector('.zero');
    zero.addEventListener('click', () => {
    displayValue = display.innerHTML += 0
    })
}

function multiplyPressed() {
    const multiply = document.querySelector('.x');
    multiply.addEventListener('click', () => {
        operator = '*'
        sums.innerHTML += ''
        numA = displayValue;
        display.innerHTML += ' x ';
        i++
        if (i >= 2) {
            result = display.innerHTML;
            let resultArr = result.split(' x ').filter(r => r !== '');
            total = resultArr.reduce((sum, current) => parseInt(sum) * parseInt(current));
            sums.innerHTML = total;
        }
    });
}

function subtractPressed() {
    const subtract = document.querySelector('.subtract');
    subtract.addEventListener('click', () => {
        operator = '-';
        sums.innerHTML += ''
        numA = displayValue;
        display.innerHTML += ' - ';
        i++
        if (i >= 2) {
            result = display.innerHTML;
            let resultArr = result.split(' - ').filter(r => r !== '');
            total = resultArr.reduce((sum, current) => parseInt(sum) - parseInt(current));
            sums.innerHTML = total;
        }
    })
}

function dividePressed() {
    const divide = document.querySelector('.divide');
    divide.addEventListener('click', () => {
        operator = '/'
        sums.innerHTML += '';
        numA = displayValue;
        display.innerHTML += ' ÷ ';
        i++
        if (i >= 2) {
            result = display.innerHTML;
            let resultArr = result.split(' ÷ ').filter(r => r !== '');
            total = resultArr.reduce((sum, current) => parseInt(sum) / parseInt(current));
            sums.innerHTML = total;
        }
    })
}

function addPressed() {
    const add = document.querySelector('.add');
    add.addEventListener('click', function(numA, numB) {
        operator = '+'
        sums.innerHTML = '';
        numA = displayValue;
        display.innerHTML += ' + ';
        i++;
        if (i >= 2) {
            result = display.innerHTML;
            let resultArr = result.split(' + ').filter(r => r !== '');
            total = resultArr.reduce((sum, current) => parseInt(sum) + parseInt(current));
            sums.innerHTML = total;
            };    
})
}

function equalsPressed() {
    const equals = document.querySelector('.equals');
    equals.addEventListener('click', function(addListener) {
        result = display.innerHTML;
        while (operator) {
            document.querySelector('.zero').disabled = true;
            document.querySelector('.one').disabled = true;
            document.querySelector('.two').disabled = true;
            document.querySelector('.three').disabled = true;
            document.querySelector('.four').disabled = true;
            document.querySelector('.five').disabled = true;
            document.querySelector('.six').disabled = true;
            document.querySelector('.seven').disabled = true;
            document.querySelector('.eight').disabled = true;
            document.querySelector('.nine').disabled = true;
        break;
    }   
        if (operator == '+') {
            let resultArr = result.split(' + ').filter(r => r !== '');
            total = resultArr.reduce((sum, current) => parseInt(sum) + parseInt(current));
        }
        else if (operator == '/') {
            let resultArr = result.split(' ÷ ').filter(r => r !== '');
            total = resultArr.reduce((sum, current) => parseInt(sum) / parseInt(current));
        } else if (operator == '-') {
            let resultArr = result.split(' - ').filter(r => r !== '');
            total = resultArr.reduce((sum, current) => parseInt(sum) - parseInt(current));
        } else if (operator == '*') {
            let resultArr = result.split(' x ').filter(r => r !== '');
            total = resultArr.reduce((sum, current) => parseInt(sum) * parseInt(current));
        }
        
        
        sums.innerHTML = total
    })
}

function erase() {
    const erase = document.querySelector('.erase')
    erase.addEventListener('click', function(addListener) {
        i = 0;
        sums.innerHTML = '';
        display.innerHTML = '';
        
            document.querySelector('.zero').disabled = false
            document.querySelector('.one').disabled = false
            document.querySelector('.two').disabled = false
            document.querySelector('.three').disabled = false
            document.querySelector('.four').disabled = false
            document.querySelector('.five').disabled = false
            document.querySelector('.six').disabled = false
            document.querySelector('.seven').disabled = false
            document.querySelector('.eight').disabled = false
            document.querySelector('.nine').disabled = false
            document.querySelector('.subtract').disabled = false;
            document.querySelector('.add').disabled = false;
            document.querySelector('.multiply').disabled = false;
            document.querySelector('.divide').disabled = false;
    })
    
}

    
onePressed();
twoPressed();
threePressed();
fourPressed();
fivePressed();
sixPressed();
sevenPressed();
eightPressed();
ninePressed();
zeroPressed();
multiplyPressed();
dividePressed();
addPressed()
equalsPressed()
subtractPressed()
erase()

console.log(total)