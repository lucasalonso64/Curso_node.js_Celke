const Sequelize = require("sequelize")

const sequelize = new Sequelize('celke', 'root', '2209',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}