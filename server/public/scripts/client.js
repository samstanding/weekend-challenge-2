$(document).ready(function () {
    $('#equals').on('click', function () {
        sendEquation();
        clearInputs();//i just want to make sure this works and gets inputs off the dom

    });


});//end onReady

//function to take inputs from DOM and store them in an object
function getEquation () {
    let xValue = $('#x-in').val();
    let operation = $('#operation').val();
    let yValue = $('#y-in').val();
    let equation = {
        xValue: xValue,
        operation : operation,
        yValue: yValue
    };
    return equation;
}
//function to clear the inputs off the DOM
function clearInputs () {
    $('#x-in').val('');
    $('#operation').val('');
    $('#y-in').val('');
}//end clearInputs

//takes the my input object and sends it to the router
function sendEquation () {
    let equation = getEquation ();
    $.ajax({
        type:'POST',
        url:'/calculator/send',
        data: {newEquation: equation }
    }).done(function(response){
        console.log('added');
        receiveCalculation ();
        getHistory();
        clearInputs ();
    }).fail(function (response){
        console.log(response);
    })
}
//function to get the result of the server's work, with the current number and the historic numbers
function getHistory () {
    $.ajax({
        type:'GET',
        url:'/calculator/take'
    }).done(function (response) {
        console.log(response);
        displayHistory(response);
    }).fail(function (response){
        console.log(response);
    })
}
//function that accepts my history object and turns that into more readable equations
function displayHistory (arr) {
    let view = $('#history');
    view.empty();
    //create a loop to iterate through array of objects and access each property 
    for (object of arr) {
        console.log(object);
        //it just dawned on me that my operations are still in word form
        //**need to go into module function to send through operation property in string
        //i also just realized that i don't have the sum in this object....
        let outputString = `<ul>
        <li>${object.xValue} ${object.operation} ${object.yValue} = 46</li><ul>`;
        view.append(outputString); 
    } 
}

//need a function that takes an arugment of what the server sent back and displays it on the DOM
function receiveCalculation () {
    $.ajax({
        type:'GET',
        url: '/calculator/calculate'
    }).done(function (response) {
        console.log(response);
        displayCalculation(response);
    }).fail(function (response) {
        console.log(response);
    })
}
//to keep functions tight, make a display calculation function that appends calculation to DOM
function displayCalculation(arr) {
    let view = $('#sumDisplay');
    view.empty();
    view.append(`<p>${arr[arr.length-1]}</p>`); 
}