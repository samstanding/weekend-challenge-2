const express = require('express');
const app = express ();
const bodyParser = require('body-parser');


app.use(express.static('server/public'));

const port = 5550;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const routey = require('./routers/calculator-router');
app.use('/calculator', routey);

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});