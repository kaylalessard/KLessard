let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let meal = require('../models/meal-schema');

// kids route defines our navigation for CRUD operations in the kids collections

//create route
router.route('/create').post((req, res, next) => {
    meal.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            console.log(data)
            res.json(data)
        }
    })
});
 
router.route('/').get((req, res) => {
    meal.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

//edit route
router.route('/edit/:id').get((req, res) => {
    meal.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


// Update 
router.route('/update/:id').put((req, res, next) => {
    meal.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Meal updated successfully !')
        }
    })
})
//delete
router.route('/delete/:id').delete((req, res, next) => {
    meal.findByIdAndRemove(req.params.id, (error, data) => {
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
