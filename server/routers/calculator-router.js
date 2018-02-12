const express = require('express');
const router = express.Router();
//creates a variable to store module.exports = { calculate : calculate,  addEquation : addArray, history: returnEquations } from module
const calculatorModule = require('../modules/calculator-module');

//recieves inputs from DOM about what to calculate
router.post('/send', function (req, res) { 
    //assigns variable equation to the equation object pulled from DOM
    let equation = req.body.newEquation;
    //logs out what equation looks like in the console
    console.log(equation);
    //create new instance of calculator class for inputs
    let  equationObject = new calculatorModule.calculate(equation.xValue, equation.operation, equation.yValue);
    console.log(equationObject);
    //adds new instance of class into the historical array
    calculatorModule.addEquation(equationObject);
    //displays success message 
    res.sendStatus(200);
});

//router get function to send the history array
router.get('/take', function (req, res) {
    //assign variable to my function in my module that sent my array of historical calculations
    let history = calculatorModule.history();
    //send history to the DOM 
    res.send(history);

})

router.get('/delete', function (req, res) {
    let history = calculatorModule.history();
    history.splice(0);
    res.send(history);
    
})

module.exports = router;