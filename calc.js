const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

const operate = (operation,a,b) => operation(a,b);

const operands = {
	'add': add,
	'subtract': subtract,
	'multiply': multiply,
	'divide': divide
};

let prevValue = 0;
let operation = '';
let refresh = true;

let display = document.querySelector('#display');
display.value = '0';

let numbers = document.querySelectorAll('.number');
numbers.forEach(number => {
	number.addEventListener('click', function() {
		if (refresh) 
			display.value = number.innerHTML;
		else
			display.value = display.value + number.innerHTML;
		refresh = false;
	});
});

let clear = document.querySelector('#clear');
clear.addEventListener('click', function() {
	display.value = '0';
	prevValue = 0;
	refresh = true;
	operation = '';
});

let operators = document.querySelectorAll('.operator');
operators.forEach(operator => {
	operator.addEventListener('click', function() {
		if (operation && !refresh) {
			display.value = operate(operands[operation],parseFloat(prevValue),parseFloat(display.value));
		}
		prevValue = parseFloat(display.value);
		operation  = operator.id;
		//Nan issue
		refresh = true;
	});
});

let equals = document.querySelector('#equals');
equals.addEventListener('click', function() {
	if (operation && !refresh) {
		display.value = operate(operands[operation],parseFloat(prevValue),parseFloat(display.value));
		prevValue = '';
		refresh = true;
	}
});