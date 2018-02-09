const express = require('express');
const app = express ();

const port = 5550;

app.listen(port, function () {
    console.log(`Listening on port ${port}`);
});