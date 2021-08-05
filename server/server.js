const express = require('express');

let result = [];

const app = express();
const bodyParser = require('body-parser');
const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/calculation', (req, res) => {
    // send back to the client all calculations
    res.send(calculations);
})



app.post('/calculation', (req, res) => {
    // wheres our data???
    console.log(calculations);
    console.log('here is our data:', req.body);

    const operator = req.body.operator;
    // take the operand input
    const number1 = $('#firstInput');
    const number2 = $('#secondInput');;
    
    let result = 0;
    
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
    console.log(result);

    //SAVE IN ARRAY...?
    const completedCalc = {
        num1 : num1,
        num2 : num2,
        operator : operator,
        result: result
    }

    calculations.push(completedCalc);
    console.log(calculations);

    res.sendStatus(200);
});


app.listen(port, () => {
    console.log('listening on port', port)
});