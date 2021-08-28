const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {type: String, require: true},
    position: {type: String, require: true},
    KDV: {type: Number, require: true},
    description: {type: String, require: true},
    role: {type: String},
    memberImage: {type: String}
})

module.exports = mongoose.model('Member', memberSchema);