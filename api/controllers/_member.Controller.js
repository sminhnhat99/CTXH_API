const Member = require('../models/_members.Model');
const mongoose = require('mongoose');

const PAGE_SIZE = 8;

exports.Create = (req,res,next) => {
    const member = new Member(
        {
            _id: mongoose.Types.ObjectId(),
            name: req.body.name,
            position: req.body.position,
            KDV: req.body.KDV,
            description: req.body.description,
            role: req.body.role,
            memberImage: req.body.memberImage
        }
    );
    member.save()
        .then(result => {
            console.log(result);
            res.status(200).json({
                success: 1,
                message: "Create new member successfully!"
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

exports.Show = (req,res,next) => {
    var page = req.query.page;
    if(page) {
        // get page
        page = parseInt(page);
        var skip = (page - 1) * PAGE_SIZE;

        Member.find()
            .select('name position KDV description role memberImage')
            .skip(skip)
            .limit(PAGE_SIZE)
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
    } else {
        Member.find()
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
}


exports.Delete = (req,res,next) => {
    const id = req.params.memberId;
    Member.findByIdAndRemove(id)
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
    const id = req.params.memberId;
    Member.findByIdAndUpdate(id, {$set: req.body}, {new: true})
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

exports.searchById = (req, res, next) => {
    const id = req.params.memberId;
    Member.findById(id)
        .select('name position KDV description role memberImage')
        .exec()
        .then(data => {
            console.log(data);
            if(data){
                res.status(200).json({data})
            }
            else {
                res.status(404).json({message: 'No valid entry found for provided ID'})
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}

exports.searchByKhoaDV = (req, res, next) => {
    const memberKDV = req.query.KDV
    Member.find()
        .select('name position KDV description role memberImage')
        .where('KDV').equals(memberKDV)
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

exports.searchbyName = (req, res, next) => {
    const memberName = req.query.name
    Member.find()
        .select('name position KDV description role memberImage')
        .where('name').equals(memberName)
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

exports.searchByPosition = (req, res, next) => {
    const memberPosition = req.query.position
    Member.find()
        .select('name position KDV description role memberImage')
        .where('position').equals(memberPosition)
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

exports.searchByRole = (req, res, next) => {
    const memberRole = req.query.role
    Member.find()
    .select('name position KDV description role memberImage')
    .where('role').equals(memberRole)
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

