var express = require("express");

var app = express ();

app.use(express.static(__dirname + "/static"));

// app.set('static', __dirname + '/static');

app.get('/', function (request, response){
    response.send('main.html');
})

app.get('/cats', function (request, response){
    response.render('cats.html');
})

app.get("/cars", function(request, response){
    response.render('cars.html');
})

app.get("/cars/new", function(request, response){
    response.render('newcar.html')
})

app.listen(8000, function(){
    console.log("listening on 8000");
})