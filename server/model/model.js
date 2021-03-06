const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// models
// categories with data type and color
const category_model = new Schema({
    type:{type:String, default:'Investment'},
    color:{type:String, default:'yellow'}
})

// model for transaction detail name, type, amount, date
const transaction_model = new Schema({
    name:{type:String, default:'Anonymous'},
    type:{type:String, default:'yellow'},
    amount:{type:Number},
    date:{type:Date, default:Date.now}
})

// Creating models
const Categories = mongoose.model('categories', category_model);
const Transactions = mongoose.model('transactions',transaction_model);

exports.default = Transactions;
module.exports = {
    Categories,
    Transactions
}
