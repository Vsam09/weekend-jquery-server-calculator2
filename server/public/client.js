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

