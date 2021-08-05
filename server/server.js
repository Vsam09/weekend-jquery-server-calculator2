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

app.post('/calculation', (req, res) => {
    // wheres our data???
    console.log(calculation);
    console.log('here is our data:', req.body);

    const operator = req.body.operator;
    // take the operand input
    const number1 = Number(req.body.number1);
    const number2 = Number(req.body.number2);
    
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
        number1 : number1,
        number2 : number2,
        operator : operator,
        result: result
    }

    calculation.push(completedCalc);
    console.log(calculation);

    res.sendStatus(200);
});


app.listen(port, () => {
    console.log('listening on port', port)
});