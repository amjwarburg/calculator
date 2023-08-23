let numA;
let operator;
let numB;
let result;
let sums = document.querySelector('.sums');
let display = document.querySelector('.display');
let displayValue = (display.innerHTML);
let sum;
let i = 0;

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
        displayValue = sums.innerHTML += 1
    });
}
function twoPressed() {
    const two = document.querySelector('.two');
    two.addEventListener('click', () => {
        displayValue = sums.innerHTML += 2
    });
}
function threePressed() {
    const three = document.querySelector('.three');
    three.addEventListener('click', () => {
        displayValue = sums.innerHTML += 3
    })
}
function fourPressed() {
    const four = document.querySelector('.four');
    four.addEventListener('click', () => {
        displayValue = sums.innerHTML += 4
    });
}
function fivePressed() {
    const five = document.querySelector('.five');
    five.addEventListener('click', () => {
        displayValue = sums.innerHTML += 5
    });
}
function sixPressed() {
    const six = document.querySelector('.six');
    six.addEventListener('click', () => {
        displayValue = sums.innerHTML += 6
    });
}
function sevenPressed() {
    const seven = document.querySelector('.seven');
    seven.addEventListener('click', () => {
        displayValue = sums.innerHTML += 7
    })
}
function eightPressed() {
    const eight = document.querySelector('.eight');
    eight.addEventListener('click', () => {
        displayValue = sums.innerHTML += 8
    })
}
function ninePressed() {
    const nine = document.querySelector('.nine');
    nine.addEventListener('click', () => {
    displayValue = sums.innerHTML += 9
    })
}
function zeroPressed() {
    const zero = document.querySelector('.zero');
    zero.addEventListener('click', () => {
    displayValue = sums.innerHTML += 0
    })
}

function multiplyPressed() {
    const multiply = document.querySelector('.x');
    multiply.addEventListener('click', () => {
        sums.innerHTML += 'x'
    });
}

function dividePressed() {
    const divide = document.querySelector('.divide');
    divide.addEventListener('click', () => {
        sums.innerHTML += '÷'
        j++
    })
}

function addPressed() {
    const add = document.querySelector('.add');
    add.addEventListener('click', function(numA, numB) {
        sums.innerHTML = '';
        numA = displayValue;
        display.innerHTML += numA + ' + ';
        i++;
        if (i >= 2) {
            result = display.innerHTML;
            let resultArr = result.split(' + ').filter(r => r !== '');
            let total = resultArr.reduce((sum, current) => parseInt(sum) + parseInt(current));
            console.log(total);
            };    
})
}
            
            
    

        


function equalsPressed() {
    const equals = document.querySelector('.equals');
    equals.addEventListener('click', function(addListener) {
        sums.innerHTML = sum
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