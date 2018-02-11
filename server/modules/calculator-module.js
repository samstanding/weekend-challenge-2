const calculatorClass = require('./calculator-class');
//added calculator class-- this has all the functions you need-- this module needs to 
//create a new instance of the class for the value that comes in and store it in the array

//array of objects that stores all equations
const historyArray = [];



//returns equations-- for the purpose of sending back to the DOM
function returnEquations () {
    return historyArray;
}
//adds an equation to the historyArray
function addArray (obj) {
    historyArray.push(obj);
}

module.exports = { 
    calculate : calculatorClass,
    addEquation : addArray,
    history: returnEquations
}