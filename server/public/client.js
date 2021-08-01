console.log('Client JS')

let results = [{}];

$(document).ready(onReady);

function onReady() {
    console.log('jQuery')
    $('#clear').on('click', clearInputs)
    $('#add').on('click', add)
}

function clearInputs() {
    console.log('Clear Inputs')
    $('#firstInput').val(),
    $('#secondInput').val()  
};
function add() {
    let input = inputs();
    results.push(input);
    console.log('results', results)
}
function inputs() {
    console.log('firstInput')
    let input = { 
        firstInput: Number ($('#firstInput').val()),
        secondInput: Number ($('#secondInput').val())
        
    };
    return input;
}

// take the operator input
const operator = operator;

// take the operand input
const number1 = $('#firstInput');
const number2 = $('#secondInput');;

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);