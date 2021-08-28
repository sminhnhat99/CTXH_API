const BDH = require('../models/_members.Model');
const mongoose = require('mongoose');

exports.readBDH = (req, res, next) => {
    BDH.find({
        $or: [
            {'position': 'Doi Pho'},
            {'position': 'Đội trưởng'},
            {'position': 'Uy vien BDH'}
        ]
    })
        .select('name position KDV description role memberImage')
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