const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    activityName: {type: String, require: true },
    activityImage: {type: String},
    activityDescription: {type: String, require: true}
});

module.exports = mongoose.model('Activity', activitySchema);