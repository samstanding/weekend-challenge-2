class Calculate {
    constructor (xValue, operation, yValue) {
        this.xValue = xValue;
        this.operation = operation;
        this.yValue = yValue; 
        this.sum = this.calculate ();
        this.operator =  this.operator ();
    } 
    calculate () {
        if (this.operation === 'plus') {
            return parseInt(this.xValue) + parseInt(this.yValue);
        } else if (this.operation === 'minus') {
            return parseInt(this.xValue) - parseInt(this.yValue);
        } else if (this.operation === 'times') {
            return parseInt(this.xValue) * parseInt(this.yValue);
        } else if (this.operation === 'divided by') {
            return parseInt(this.xValue)/ parseInt(this.yValue);
        }
    }
    operator () {
        if (this.operation === 'plus') {
            return '+';
        } else if (this.operation === 'minus') {
            return '-';
        } else if (this.operation === 'times') {
            return 'x'; 
        } else if (this.operation === 'divided by') {
            return '/';
        }    
    }
}

module.exports = Calculate;