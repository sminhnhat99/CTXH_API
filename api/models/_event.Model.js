const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    eventName: {type: String, require: true},
    eventLocation: {type: String},
    time: {type: Date, require: true}
})

module.exports = mongoose.model('Event', eventSchema);