const mongoos = require('mongoose') 
const conn  = mongoos.connect('mongodb://localhost:27017/test-node', { useNewUrlParser:true})
module.exports = conn