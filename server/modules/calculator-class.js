class Calculate {
    constructor (xValue, operation, yValue) {
        this.xValue = xValue;
        this.operation = operation;
        this.yValue = yValue; 
        this.sum = this.calculate ();
        this.operator =  this.operator ();
    } 
    calculate () {
        if (this.operation === 'add') {
            return parseInt(this.xValue) + parseInt(this.yValue);
        } else if (this.operation === 'subtract') {
            return parseInt(this.xValue) - parseInt(this.yValue);
        } else if (this.operation === 'multiply') {
            return parseInt(this.xValue) * parseInt(this.yValue);
        } else if (this.operation === 'divide') {
            return parseInt(this.xValue)/ parseInt(this.yValue);
        }
    }
    operator () {
        if (this.operation === 'add') {
            return '+';
        } else if (this.operation === 'subtract') {
            return '-';
        } else if (this.operation === 'multiply') {
            return 'x'; 
        } else if (this.operation === 'divide') {
            return '/';
        }    
    }
}

module.exports = Calculate;