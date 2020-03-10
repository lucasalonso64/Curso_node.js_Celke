const mongoose = require('mongoose');

//Modelo utilizando função
// mongoose.connect('mongodb://localhost:27017/my_database', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(function(){
//     console.log("Conectado com sucesso")
// }).catch(function(erro){
//     console.log("Erro na conexão", +  erro)
// })


// Modelo utilizando Arrow functions 
mongoose.connect('mongodb://localhost:27017/celke20', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Erro na conexão", +  erro)
})


const PagamentoSchema = mongoose.Schema({
    nome:{
        type: String,
        require: true
    },
    valor: {
        type: Number,
        require: true
    }
})

// Criando a model
var Pagamento = mongoose.model('pagamentos', PagamentoSchema)

new Pagamento({
    nome: "Internet",
    valor: 350
}).save().then(() => {
    console.log("Pagamento cadastrado com sucesso!")
}).catch((erro) =>{
    console.log("Pagamento não cadastrado ", + erro)
})