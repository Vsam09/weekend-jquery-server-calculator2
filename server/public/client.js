console.log('Client JS')

let operator = '';

$(document).ready(onReady);

function onReady() {
    console.log('jQuery')
    $('#clear').on('click', clearInputs)
    $('.operator').on('click', operatorButtons)
    $('#equals').on('click', equals)
}

function clearInputs() {
    console.log('Clear Inputs')
    $('#firstInput').val(''),
    $('#secondInput').val('')  
};
function operatorButtons() {
    console.log('operator is working');
    operator = $(this).text();
}

function equals() {
    console.log('equals works')
    let input = { 
        firstInput: Number ($('#firstInput').val()),
        secondInput: Number ($('#secondInput').val()),
        operator: operator
    };
    return input;
}