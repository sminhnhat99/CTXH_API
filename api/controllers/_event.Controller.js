const Event = require('../models/_event.Model');
const mongoose = require('mongoose');

exports.Create = (req, res, next) => {
    const event = new Event(
        {
            _id: mongoose.Types.ObjectId(),
            eventName: req.body.eventName,
            eventLocation: req.body.eventLocation,
            time: req.body.time
        }
    );
    event.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                success: 1,
                message: 'Create Event Successfully'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                success: 0,
                message: "Create new member failed!"
            })
        })
}

exports.Read = (req,res,next) => {
    const timeEvent = req.query.time
    Event.find()
        .select('eventName eventLocation time')
        .where('time').equals(timeEvent)
        .exec()
        .then(data => {
            console.log(data);
            res.status(200).json({
                data
            });
        })
        .catch(error => {
            res.status(500).json({
                success: 0,
                error: err
            })
        })
}

exports.Delete = (req,res,next) => {
    const id = req.params.eventId;
    Event.findByIdAndRemove(id)
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                success: 1,
                message: "Deleted"
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

exports.Edit = (req, res, next) => {
    const id = req.params.eventId;
    Event.findByIdAndUpdate(id, {$set: req.body}, {new: true})
        .then(result => {
            console.log(result);
            res.status(200).json({
                success: 1,
                message: 'Edited'
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