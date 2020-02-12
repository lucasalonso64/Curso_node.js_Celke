console.log('Gerenciador Financeiro')
var client = 'Cesar '
console.log('cliente: ' + client)

var valProduct = 100;
var valDiscount = 37;

var discountFunc = require("./modules/calDiscount");
var finalValue = discountFunc(valProduct, valDiscount);
console.log('valor final do produto R$ ' + finalValue);