//importar o Express
var express = require('express');

//App
var app = express();

// Especificar local do css e da imagem
app.use(express.static(__dirname + '/public'));


//Rotas
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//Servidor
app.listen(8080);