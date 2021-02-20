let mongoose = require('mongoose'),
    express = require('express'),
    router = express.Router();

let kids = require('../models/kids-schema');

// kids route defines our navigation for GET operation in the kids collections
router.route('/').get((req, res) => {
    kids.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})


module.exports = router;
