const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    productName: {type: String, require: true},
    productPrice: {type: String, require: true},
    productImage: {type: String, require: true},
    productCategory: {type: String, require: true},
    productDescription: {type: String, require: true}
})

module.exports = mongoose.model('Product', productSchema);