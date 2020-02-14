const express  = require('express');

const app = express();

// conexão com DB

const mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
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

  connection.connect(function(err){
      if(err) console.error('Erro ao realizar a conexão com BD: ' + err.stack); return;
  });
  connection.query("INSERT INTO users(nome, email) VALUES ('kELLen', 'kellen@celke.com.br')", function(err, result){
      if(!err){
          console.log('Usuario cadastrado com sucesso!');
      }else{
          console.log('Erro ao cadastrar usuario')
      }
  })

  connection.query("UPDATE users SET nome = 'Alonso Sistemas' WHERE id =1", function(err, result){
      if(!err){
            console.log('usuario editado com sucesso!');
      }else {
          console.log('Erro: o usuario nao foi editado!');
      }
  })

  connection.query("SELECT * FROM users", function(err, result){
      if(!err){
          console.log('Sua consulta não retornou nenhum registro');
      }else{
          console.log('Consulta concluída com sucesso!');
      }
  })

  connection.query("DELETE FROM users WHERE id = 5", function(err, result){
    if(!err){
          console.log('usuario DELETADO COM SUCESSO!');
    }else {
        console.log('Erro: NÃO FOI POSSIVEL DELETAR!');
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