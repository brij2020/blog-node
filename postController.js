const Post          = require('./database/models/Post');
const path          = require('path');  // path module to handle path related work
const conn          = require('./config');
const edge          = require('edge.js'); 
edge.registerViews(path.join(__dirname, './views'))


createPost = (req,res) =>{
    let {body} = req
    let {files} = req
    files.avatar.mv(path.join(__dirname,`/assets/img/${files.avatar.name}`),(error)=>{
        if(error) {
            
            return res.status(500).send("something wrong .........")
        }
        Post.create({
            title:  body.title,
            author: body.author,
            body:   body.body,
            image: files.avatar.name,
            date:   (new Date())
        },(error,post)=>{
            if(error) {
                setTimeout(function () {
                    res.end('server time out .......')
                },5000)
            }
        })
        res.redirect('/')

    })
    
    
   
}

getPost = (req,res) =>{
    Post.find({}).sort({_id:-1})
    .then(data=>{
        res.send(edge.render('/posts',{posts:data})) 
    })
    .catch(error=>console.log("error iss occured",error))
}
newpost = (req,res) =>{

    res.send(edge.render('/new-post'))
}

module.exports = {createPost,getPost,newpost}