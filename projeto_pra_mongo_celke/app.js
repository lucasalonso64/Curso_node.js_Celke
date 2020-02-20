//Carregando os módulos
const express = require('express')
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express();
const admin = require("./routes/admin")
const path = require("path")
const mongoose = require('mongoose')

//Configurações 
//Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Handlebars
app.engine('handlebars', handlebars({defaultLayout: "main"}))
app.set("view engine", 'handlebars')

// Conexão com o banco de dados

mongoose.connect('mongodb://localhost:27017/celke', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Erro na conexão ", +  erro)
})

//Arquivos estáticos
app.use(express.static(path.join(__dirname, "public")))

//Rotas
app.use('/admin', admin)

//Iniciar o servidor
const PORT = 3333;
app.listen(PORT,() =>{
    console.log("Servidor iniciado!");
})