var mongoose = require('mongoose')

var newSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    }
})
var user = new mongoose.model('User', newSchema);
module.exports = user;