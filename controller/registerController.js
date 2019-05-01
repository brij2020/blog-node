const edge          = require('edge.js'); 
const path          = require('path');  
const conn          = require('./../config');
const User          = require('./../database/models/User');
edge.registerViews(path.join(__dirname, './../views'))

registerUser = async (req,res) =>{
    let user = req.body
   await User.create({
        username : user.user,
        emailid  : user.email,
        password : user.pass,
        date     : new Date()
    })
    .then(se=>{console.log("yes")
        res.redirect('/')
    })
    .catch(err=>{ res.status(500).send("some error  ")})

}
register = (req,res) =>{
    
    res.send(edge.render('/regsiter.edge'))

}
module.exports = {registerUser,register}