let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let kids = require('../models/kids-schema');

// kids route defines our navigation for CRUD operations in the kids collections

//create route
router.route('/create').post((req, res, next) => {
    kids.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
 
router.route('/').get((req, res) => {
    kids.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
//edit route
router.route('/edit/:id').get((req, res) => {
    kids.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update 
router.route('/update/:id').put((req, res, next) => {
    kids.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Kids meal updated successfully !')
        }
    })
})
//delete route
router.route('/delete/:id').delete((req, res, next) => {
    kids.findByIdAndRemove(req.params.id, (error, data) => {
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