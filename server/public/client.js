console.log('Client JS')

let operator = '';

$(document).ready(onReady);

function onReady() {
    console.log('jQuery')
    $('.clearBtn').on('click', clearInputs)
    $('.operator').on('click', operatorButtons)
    $('.equalsBtn').on('click', equals)
    getCalculations();
};

//Create C button and clear inputs
//when C button is clicked
function clearInputs() {
    console.log('Clear Inputs')
    $('#firstInput').val(''),
    $('#secondInput').val('')  
};
//Operator button should work "on click for + - * / buttons"
function operatorButtons() {
    console.log('operators is working');
    operator = $(this).text();
    console.log('operator', operator)
};

//Render append to the DOM
function renderResults(calculation) {
    console.log('c', calculation)
    $('#results').empty();
    $('#resultsOut').text(calculation[calculation.length-1].result);

    for (results of calculation) {
        console.log('result', results)
        $('#results').append(`
            <li>
                ${results.number1}
                ${results.operator}
                ${results.number2}
                = ${results.result}
            </li>
        `);
    }
   
};
//Create a GET ajax to retrieve from the server side
function getCalculations() {
    $.ajax({
        method: 'GET',
        url: '/calculation'
    })
    .then(function(response) {
        console.log('r', response);
        renderResults(response);
    })
};
//Create function for operator " = " button
//It should calculate the 2 inputs with
//selected operators add, subtract, divide, or multiple from the server side
//!! Don't forget about $.ajax(method, url, 
//.then and .catch(err)500 !!
function equals() {
    console.log('equals works')
    let input = { 
        firstInput: $('#firstInput').val(),
        secondInput: $('#secondInput').val(),
        operator: operator
    };
    console.log('inputs', input);
    $.ajax ({
        method: 'POST',
        url: '/calculation',
        data: input
    })
    .then( function(response) {
        console.log(response)
        getCalculations();
    })
    .catch((err) => {
        console.log('Equals error', err)
        res.sendStatus(500);
    })
};