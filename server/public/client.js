console.log('Client JS')

$(document).ready(onReady);

function onReady() {
    console.log('jQuery')
    $('#clear').on('click', clearInputs)
}

