const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//meal collection from the dinner database; display meal item which is returned as a string
let mealSchema = new Schema({
    meal: {
        type: String
    },

}, {
        collection: 'meal'
    })

module.exports = mongoose.model('Meal', mealSchema)