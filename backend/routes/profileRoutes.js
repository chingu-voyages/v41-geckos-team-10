const mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();
const profile = require('../models/profileModel');
router.route('/profiles').post((req, res, next) => {
    user.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
router.route('/').get((req, res) => {
    user.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
router.route('/profiles/:id').get((req, res) => {
    user.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

router.route('/profiles/:id').put((req, res, next) => {
    user.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Profile updated successfully !')
        }
    })
})
router.route('/profiles/:id').delete((req, res, next) => {
    user.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = router;