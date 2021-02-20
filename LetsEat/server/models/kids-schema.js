const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//kids meal collection from the dinner database; display meal item which is returned as a string
let kidsSchema = new Schema({
    kids: {
        text: String
    },

}, {
        collection: 'kids'
    })
    
const kids = mongoose.model('kids', kidsSchema)
module.exports = kids
