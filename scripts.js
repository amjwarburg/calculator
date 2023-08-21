let numA
let operator
let numB
let sums = document.querySelector('.sums')

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, operator, b) {
    if (operator = '+') {
        add(a, b);
    } else if (operator = '-') {
        subtract(a, b);
    } else if (operator = '*') {
        multiply(a, b);
    } else if (operator = '/') {
        divide(a, b);
    }
}

function onePressed() {
    const one = document.querySelector('.one');
    one.addEventListener('click', () => {
        sums.innerHTML += 1
    });
}
function twoPressed() {
    const two = document.querySelector('.two');
    two.addEventListener('click', () => {
        sums.innerHTML += 2
    });
}
function threePressed() {
    const three = document.querySelector('.three');
    three.addEventListener('click', () => {
        sums.innerHTML += 3
    })
}
function fourPressed() {
    const four = document.querySelector('.four');
    four.addEventListener('click', () => {
        sums.innerHTML += 4
    });
}
function fivePressed() {
    const five = document.querySelector('.five');
    five.addEventListener('click', () => {
        sums.innerHTML += 5
    });
}
function sixPressed() {
    const six = document.querySelector('.six');
    six.addEventListener('click', () => {
        sums.innerHTML += 6
    });
}
function sevenPressed() {
    const seven = document.querySelector('.seven');
    seven.addEventListener('click', () => {
        sums.innerHTML += 7
    })
}
function eightPressed() {
    const eight = document.querySelector('.eight');
    eight.addEventListener('click', () => {
        sums.innerHTML += 8
    })
}
function ninePressed() {
    const nine = document.querySelector('.nine');
    nine.addEventListener('click', () => {
    sums.innerHTML += 9
    })
}
function zeroPressed() {
    const zero = document.querySelector('.zero');
    zero.addEventListener('click', () => {
    sums.innerHTML += 0
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