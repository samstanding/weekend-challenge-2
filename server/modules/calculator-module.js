//array of objects that stores all equations
const historyArray = [];

//function that calculates equation 
function calculate (obj) {
    if (obj.operation === 'add') {
        return parseInt(obj.xValue) + parseInt(obj.yValue);
    } else if (obj.operation === 'subtract') {
        return parseInt(obj.xValue) - parseInt(obj.yValue);
    } else if (obj.operation === 'multiply') {
        return parseInt(obj.xValue) * parseInt(obj.yValue);
    } else if (obj.operation === 'divide') {
        return parseInt(obj.xValue)/ parseInt(obj.yValue);
    }
}
//returns equations-- for the purpose of sending back to the DOM
function returnEquations () {
    return historyArray;
}
//adds an equation to the historyArray
function addArray (obj) {
    historyArray.push(obj);
}

module.exports = { 
    calculate : calculate,
    addEquation : addArray,
    history: returnEquations
}