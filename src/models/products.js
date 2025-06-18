const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    brand: Number,
    price: String,
})

const Product = mongoose.model('Products', schema)

module.exports = Product