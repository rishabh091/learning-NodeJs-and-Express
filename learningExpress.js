var express = require('express');
//creates an express application
var app = express();
//for accessing post request
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var jsonParser = bodyParser.json();

app.get('/name/*', (req, res) => {
    let name = req.params;
    res.send("My name is " + name[0].toString());
});
app.post('/post', jsonParser, (req, res) => {
    let name = req.body.name.toLowerCase();
    
    if(name == 'rishabh'){
        res.send('Name is Rishabh Malhotra');
    }
    else{
        res.send('Any other name');
    }
});

var server = app.listen(8080, () => {
    console.log("Server hosted at => Port : " + server.address().port);
});