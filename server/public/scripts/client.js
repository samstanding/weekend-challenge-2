$(document).ready(function () {
    $('#equals').on('click', function () {
        sendEquation();
        clearInputs();

    });
    //this is the event listener for my history delete button
    $('#history-btn').on('click', function () {
        deleteHistory();
    });//end listener for history button

    $('#reset').on('click', function () {
        resetInterface();
    })//end reset button

    $('.history').on('click', function () {
        deleteEquation();
    })

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
        getHistory();
        clearInputs();
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
    let view = $('.history');
    view.empty();
    //create a loop to iterate through array of objects and access each property 
    for (let i = 0; i<arr.length; i++) {
        //add a string to display the historical calculation
        let outputString = `
        <li data-id=" ${i}">${arr[i].xValue} ${arr[i].operator} ${arr[i].yValue} = ${arr[i].sum}</li>`;
        view.append(outputString); 
        displayCalculation(arr[i]);
    } 
}

//displays the output of the calculation
function displayCalculation(obj) {
    let view = $('#sumDisplay');
    view.empty();
    view.append(`<p>${obj.sum}</p>`); 
}

function deleteHistory () {
    $.ajax ({
        type:'GET',
        url: 'calculator/delete'
    }).done (function (response) {
        console.log('deleted history');
        $('.history').empty();
    }).fail(function (response) {
        console.log(response);
    })
}

function resetInterface () {
    clearInputs ();
    $('#sumDisplay').empty();
    $('.history').empty();
}

function deleteEquation() {
    console.log( $(this).data('id'));
}