const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    categoryName: {type: String, require: true},
    categoryImage: {type: String, require: true}
})

module.exports = mongoose.model('Category', categorySchema);