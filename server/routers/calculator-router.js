const express = require('express');
const router = express.Router();
//creates a variable to store module.exports = { calculate : calculate,  addEquation : addArray, history: returnEquations } from module
const calculatorModule = require('../modules/calculator-module');
const sumArray = [];

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
//get function to send back the result of my calculation 
router.get('/calculate', function (req, res) {
    //send your array with the calculations in it
    res.send(sumArray);
    
})

//router get function to send the history array
router.get('/take', function (req, res) {
    //assign variable to my function in my module that sent my array of historical calculations
    let history = calculatorModule.history();
    //what does this look like?
    console.log(`previous caclulations: ${history}`);
    //send history to the DOM 
    res.send(history);

})

module.exports = router;