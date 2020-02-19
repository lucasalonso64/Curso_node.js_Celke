const Sequelize = require("sequelize")

const sequelize = new Sequelize('celke', 'root', 'epc@123',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}