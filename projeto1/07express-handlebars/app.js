// Importando o Express e o Express-handlebars
var express = require('express');
var exphbs = require('express-handlebars');


//App
var app = express();

//Template

app.engine('handlebars', handlebars.engine({defaultLayout : 'principal'}))
app.set('view engine', 'handlebars');
app.set('views','views')

app.get('/', function(req, res){
    res.render('inicio');
})

app.get('/', function(req, res){
    res.render('sobre');
})


app.listen(8080)