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
    var errors = []
    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
        errors.push({ error: "Necessário preencher o campo nome!" })
    }

    if (errors.length > 0) {
        res.render("admin/cad-cat-pagamento", {errors: errors})
    } else {
        const addCatPagamento = {
            nome: req.body.nome
        }
        new CatPagamento(addCatPagamento).save().then(() => {
            req.flash("success_msg", "Categoria de pagamento cadastrado com sucesso!")
            res.redirect('/admin/cat-pagamentos')
        }).catch((erro) => {
            req.flash("error_msg", "Error: Categoria de pagamento não foi  cadastrada com sucesso!")
        })
    }
})

//Exportar o módulo de rotas
module.exports = router