const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//meal collection from the dinner database; display meal item which is returned as a string
let mealSchema = new Schema({
    meal: {
        text: String
          
    },

}, {
        collection: 'meal'
    })
    const meal = mongoose.model('meal', mealSchema)
    module.exports = meal
    
