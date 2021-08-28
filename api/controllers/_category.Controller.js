const Category = require('../models/_category.Model');
const mongoose = require('mongoose');

exports.Create = (req, res, next) => {
    const category = new Category({
        _id: mongoose.Types.ObjectId(),
        categoryName: req.body.categoryName,
        categoryImage: req.body.categoryImage
    });
    category.save()
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
                    message: 'Create failed',
                    error: err
                })
            });

}

exports.Read = (req, res, next) => {
    Category.find()
            .select('categoryName categoryImage')
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
                    message: 'Read failed',
                    error: err
                })
            })
}

exports.Update = (req,res,next) => {
    const id = req.params.categoryId;
    Category.findByIdAndUpdate(id, {$set: req.body}, {new: true})
            .exec()
            .then(result => {
                console.log(result);
                res.status(200).json({
                success: 1,
                message: 'Edited'
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    success: 0,
                    error: err
                })
            })
        })
}


exports.Delete = (req,res,next) => {
    const id = req.params.categoryId;
    Category.findByIdAndRemove(id)
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