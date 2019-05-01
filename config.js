const mongoos = require('mongoose') 
const conn = mongoos.connect('mongodb://localhost:27017/test-node', { useNewUrlParser:true})
.then(conne=>{console.log("Connection done")})
.catch(erro =>{console.log("DB connection error ")})
module.exports = conn