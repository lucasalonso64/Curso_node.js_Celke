const express  = require('express');

const app = express();

// conexão com DB

const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'epc@123',
    database: 'celke'

  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  connection.query('SELECT * FROM users', function(err, rows, fields){
    if(!err){
        console.log('Resultado', rows);
    }else{
        console.log('Erro ao realizar consulta')
    }
  })









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