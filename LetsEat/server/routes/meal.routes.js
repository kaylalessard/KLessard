let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let meal = require('../models/meal-schema');

// kids route defines our navigation for GET operations in the kids collections

router.route('/').get((req, res) => {
    meal.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


module.exports = router;
