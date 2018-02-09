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
        url:'/send',
        data: {newEquation:equation }
    }).done(function(response){
        console.log('added');
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
        url:'/take'
    }).done(function (response) {
        console.log(response);
    }).fail(function (response){
        console.log(response);
    })
}

//need a function that takes an arugment of what the server sent back and displays it on the DOM