const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const moment = require('moment');
const session = require('express-session');
const flash = require('connect-flash');
const Pagamento = require("./models/Pagamento");


app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    }
}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Sessão
app.use(session({
  secret: 'clekeonsession',
  resave: true,
  saveUninitialized: true, 
}))

app.use(flash())
//Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    next();
})

//Rotas
app.get('/pagamento', function(req, res){
    Pagamento.findAll({order: [['id', 'DESC']]}).then(function(pagamentos){
        res.render('pagamento', {pagamentos: pagamentos});
    })    
});

app.get('/del-pagamento/:id', function(req, res){
    Pagamento.destroy({
            where: {'id' : req.params.id }
    }).then(function(){
        req.flash("success_msg", "Pagamento apagado com sucesso")     
       res.redirect('/pagamento');
    }).catch(function(erro){
        req.flash("error_msg", "Pagamento não apagado com sucesso")      
    })
})

app.get('/cad-pagamento', function(req, res){
    res.render('cad-pagamento');
});

app.post('/add-pagamento', function(req, res){
    Pagamento.create({
        nome: req.body.nome,
        valor: req.body.valor
    }).then(function(){
        req.flash("success_msg", "Pagamento cadastrado com sucesso!")
        res.redirect('/pagamento')
    }).catch(function(erro){
        req.flash("error_msg", "Pagamento não foi cadastrado com sucesso!")
    })  
})

app.listen(3333);