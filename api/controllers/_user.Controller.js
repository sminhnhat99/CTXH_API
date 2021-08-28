const User = require('../models/_user.Model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.Register = (req, res, next) => {
    User.find( { email: req.body.email})
        .exec()
        .then( user => {
            if(user.length >= 1) {
                return res.status(409).json({
                    success : 0,
                    message: 'Email is already existed'
                })
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if(err) {
                        return res.status(500).json({
                            success : 0,
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash,
                            phone: req.body.phone,
                            role: 'user'
                        });
                        user.save()
                        .then(result => {
                            console.log(result);
                            res.status(201).json({
                                success: 1,
                                message: 'User created'
                            })
                        })
                        .catch(err => {
                            console.log(err);
                            res.status(500).json({
                                error: err
                            })
                        })
                    }
                })
            }
        })
}

exports.Login = (req, res, next) => {
    User.find( {email: req.body.email} )
        .exec()
        .then(user => {
            if(user.length < 1) {
                return res.status(401).json({
                    success: 0,
                    message: 'Login failed'
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if(err) {
                    return res.status(401).json({
                        success: 0,
                        message: 'Login failed'
                    })
                }
                if(result) {
                    const token = jwt.sign(
                        {
                            email: user[0].email,
                            userId: user[0]._id,
                            role: user[0].role
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        success: 1,
                        message: "Login successful",
                        token: token,
                        role: user[0].role
                    });
                }
                res.status(401).json({
                    success: 0,
                    message: 'Login Failed'
                })
            })
        })
}

exports.Read = (req,res,next) => {
    User.find()
        .select('email')
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

