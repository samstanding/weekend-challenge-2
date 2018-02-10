const historyArray = [];

function calculate (obj) {
    if (obj.operation === 'add') {
        return parseInt(obj.xValue) + parseInt(obj.xValue);
    } else if (obj.operation === 'subtract') {
        return parseInt(obj.xValue) - parseInt(obj.xValue);
    } else if (obj.operation === 'multiply') {
        return parseInt(obj.xValue) * parseInt(obj.xValue);
    } else if (obj.operation === 'divide') {
        return parseInt(obj.xValue)/ parseInt(obj.xValue);
    }
}

function returnEquations () {
    return historyArray;
}

module.exports = { 
    calculate : calculate,
    history: returnEquations

}