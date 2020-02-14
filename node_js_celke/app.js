const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
//const Pagamento = require('./models/Pagamento');
const Pagamento = require('./models/Pagamento');

app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
// app.get('/pagamento', function (req, res) {
//     Pagamento.findAll().then(function(pagamentos){
//         res.render('pagamento', {pagamentos: pagamentos});
//         //console.log(pagamentos.nome)
//     })
   
// });
app.get('/pagamento', function(req, res){
    Pagamento.findOne({order: [['id', 'DESC']]}).then(function(pagamentos){
        res.render('pagamento', {pagamentos: pagamentos});
      //  console.log(pagamentos)
    })
    
});


app.get('/add-pagamento', function (req, res) {
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function (req, res) {

    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        res.redirect('/pagamento')
       // res.send("Pagamento cadastrado com sucesso")
    }).catch(function(erro){
        res.send("Erro: Pagamento não foi cadastrado! " + erro)
    })
    //res.send("Nome: " +  req.body.nome + "<br>Valor: " + req.body.valor + "<br>")
})

app.listen(3333);