const mongoose = require('mongoose');

const activityDetailSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    activityImage: {type: String},
    activityDescription: {type: String, require: true}
});

module.exports = mongoose.model('ActivityDetails', activityDetailSchema);