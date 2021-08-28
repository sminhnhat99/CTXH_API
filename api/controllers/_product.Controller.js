const Product = require('../models/_product.Model');
const mongoose = require('mongoose');

const PAGE_SIZE = 8;

exports.Create = (req,res,next) => {
    const product = new Product(
        {
            _id: mongoose.Types.ObjectId(),
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productImage: req.body.productImage,
            productCategory: req.body.productCategory,
            productDescription: req.body.productDescription
        }
    );
    product.save()
            .then(result => {
                console.log(result);
                res.status(200).json({
                    success: 1,
                    message: 'Created Successfully!!'
                })
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    success: 0,
                    message: 'Created failed',
                    error: err
                })
            })
}

exports.Read = (req,res,next) => {
    var page = req.query.page;
    page = parseInt(page);
    var skip = (page - 1)* PAGE_SIZE;

    Product.find()
            .select('productName productPrice productImage productCategory productDescription')
            .skip(skip)
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
                    message: 'Read fail',
                    error: err
                })
            })
}

exports.Update = (req,res,next) => {
    const id = req.params.productId;
    Product.findByIdAndUpdate(id, {$set: req.body}, {new: true})
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
    const id = req.params.productId;
    Product.findByIdAndRemove(id)
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

