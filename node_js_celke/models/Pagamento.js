const db = require('./db')

const Pagamento = db.sequelize.define('pagamentos',{
    nome: {
        type: db.Sequelize.STRING
    },
    valor: {
        type: db.Sequelize.DOUBLE
    }
})

// parametro para criar table
//Pagamento.sync({force: true})

module.exports = Pagamento