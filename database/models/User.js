const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;
const userSchema    = new Schema({
    username : String,
    emailid  : String,
    password : String,
    date     : Date
}) 
const User = mongoose.model('User',userSchema)
module.exports = User;  