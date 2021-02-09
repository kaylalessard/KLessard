const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//kids meal collection from the dinner database; display meal item which is returned as a string
let kidsSchema = new Schema({
    kids: {
        type: String
    },

}, {
        collection: 'kids'
    })

module.exports = mongoose.model('kids', kidsSchema)
