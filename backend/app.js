var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send("Connection working fine!");
    res.status(200).send(`Connected`)
});



app.listen(3000, () => console.log(`API listening on port ${3000}`));