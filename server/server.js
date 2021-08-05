const express = require('express');

let calculation = [];

const app = express();
const bodyParser = require('body-parser');
const port = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/calculation', (req, res) => {
    // send back to the client all calculations
    res.send(calculation);
})
    //CONSOLE LOG IS YOUR BEST FRIEND!! Is it working? Whats the errors?

app.post('/calculation', (req, res) => {
    console.log('here is our data:', req.body);

    let operator = req.body.operator;
    console.log('operator', operator)

    let number1 = Number(req.body.firstInput);
    let number2 = Number(req.body.secondInput);
    console.log('number1', number1)
    console.log('number2', number2)

    let result = 0;
    if (operator == '+') {
        result = number1 + number2;
        console.log('result', result)
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

    const collectCalculations = {
        number1 : number1,
        operator : operator,
        number2 : number2,
        operator : operator,
        result: result
    }

    calculation.push(collectCalculations);
    console.log(calculation);

    res.sendStatus(200);
});


app.listen(port, () => {
    console.log('listening on port', port)
});