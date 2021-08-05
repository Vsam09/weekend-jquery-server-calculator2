const { urlencoded } = require("body-parser");

console.log('Client JS')

let operator = '';

$(document).ready(onReady);

function onReady() {
    console.log('jQuery')
    $('#clear').on('click', clearInputs)
    $('.operator').on('click', operatorButtons)
    $('#equals').on('click', equals)
}

//Create C button and clear inputs
//when C button is clicked
function clearInputs() {
    console.log('Clear Inputs')
    $('#firstInput').val(''),
    $('#secondInput').val('')  
};
//Operator button should work "on click for all buttons"
function operatorButtons() {
    console.log('operators is working');
    operator = $(this).text();
};

//Create function for operator " = " button
//It should also calculate the 2 inputs with
//Selected operators add, subtract, divide, or multiple
//!! Don't forget about $.ajax(method, url) !!
function equals() {
    console.log('equals works')
    let input = { 
        firstInput: Number ($('#firstInput').val()),
        secondInput: Number ($('#secondInput').val()),
        operator: operator
    };
    console.log('inputs', input);
    $.ajax ({
        method: 'POST',
        url: '/result',
        data: input
    })
    .then( function(response) {
        console.log(response)
    })
};