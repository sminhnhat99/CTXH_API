const Activity = require('../models/_activity.Model');
const mongoose = require('mongoose');

exports.Create = (req, res, next) => {
    const activity = new Activity ({
        _id: mongoose.Types.ObjectId(),
        activityName: req.body.activityName,
        activityImage: req.body.activityImage,
        activityDescription: req.body.activityDescription
    })
    activity.save()
            .then(result => {
                console.log(result);
                res.status(200).json({
                    success: 1,
                    message: 'Create successfully!!'
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    success: 0,
                    error: err
                })
            })
}

exports.Read = (req, res, next) => {
    Activity.find()
            .select('activityName activityImage')
            .exec()
            .then(data => {
                console.log(data);
                res.status(200).json({
                    data
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    success: 0,
                    error: err
                })
            })
}