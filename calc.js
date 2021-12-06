const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

const operate = (operation,a,b) => operation(a,b);

console.log(add(2,7));
console.log(operate(add,2,7));
console.log(operate(subtract,9,3));