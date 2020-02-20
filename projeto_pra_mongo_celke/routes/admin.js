//Carregando os módulo
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
require("../models/CatPagamento")
const CatPagamento = mongoose.model('catpagamento')


router.get('/', (req, res) => {
    //res.send("Página incial do administrativo")
    res.render("admin/index")
})

router.get('/pagamentos', (req, res) => {
    res.send("Página de pagamentos")
})

router.get('/cat-pagamentos', (req, res) => {
    res.render("admin/cat-pagamentos")
})

router.get('/cad-cat-pagamento', (req, res) => {
    res.render("admin/cad-cat-pagamento")
})

router.post('/add-cat-pagamento', (req, res) => {
    const addCatPagamento = {
        nome: req.body.nome
    }
    new CatPagamento(addCatPagamento).save().then(() => {
        console.log("Categoria de pagamento cadastrado com sucesso")

    }).catch((erro) => {
        console.log("Erro: Categoria de pagamento não cadastrado com sucesso")
    })

})

//Exportar o módulo de rotas
module.exports = router