const express  = require('express');

const app = express();

app.get('/' , function(req, res) {
   res.sendFile(__dirname + '/src/index.html');
});

app.get('/sobre-empresa' , function(req, res) {
   res.sendFile(__dirname + '/src/sobre-empresa.html')
});

app.get('/blog' , function(req, res) {
    res.send('Pagina do blog');
})

app.get('/contato' , function(req, res) {
    res.send('Pagina sobre da empresa');
});



app.listen(3333);

// var http = require('http')

// http.createServer(function(req, res){
//     res.end("Gerenciador Financeiro");

// }).listen(3333);