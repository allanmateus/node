//importar o modulo http

var http = require('http');

// Criar o servidor
http.createServer(function(req, res){
    res.write('Utilizando o Nodemon 2');
    res.end();

}).listen(8080);