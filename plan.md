1) create a server
2) create a the server/ public file structure, create a client.js, html, css and jquery file in the public folder
    in the server folder create modules and routers folder-- create your modules and routers there
3) stub out what you want your interface to look like. create event listeners for everything happening on the DOM. 
    HTML page needs: 
        -2 input fields: input1 & input 2
        -a drop down to select operator 
        -a clear button
        -an interface to display the answer
        -a section to display all previous operations

4) hook up javascript with jquery so inputs do things:
    javascript needs:
        -jquery:
            -an event listener for the calculate button
            -a function that packages inputs in an object
            - a POST function to send inputs to server that receives a GET function with calculation output as a success function:
5) set up a router that intakes the jquery ajax functions 
    - create a function that handles the math-- ie 4 + 4 = 2 and send that back to DOM in the get function response above
6) create a module with an empty array in it 
    in router push each math object to the empty array in module
7) create a function that updates new array of historical operations
    - take that function and send a GET function to the DOM to post the historical 

8)HARD MODE: rather than having the user input their values, create number buttons that make it act more as a calculator
    -for that you'd create 10 buttons, oriented in a grid, each click on the button would i guess create an instance of that number in a string on the client.js-- the rest should be the same after that
9)PROMODE: allows user to delete history field. that's done with a delete ajax function. Check that out on the plane or something... 
