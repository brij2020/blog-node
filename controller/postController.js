const Post          = require('./../database/models/Post');
const path          = require('path');  // path module to handle path related work
const conn          = require('./../config');
const edge          = require('edge.js'); 
edge.registerViews(path.join(__dirname, './../views'))

/**
 * Method for create new post 
 * @param {request}
 * @param {response}
 */
createPost = (req,res) =>{
    let {body} = req
    let {files} = req
    files.avatar.mv(path.join(__dirname,`../assets/img/${files.avatar.name}`),(error)=>{
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
        setTimeout(function () {res.redirect('/')} ,3000)
        

    })
    
    
   
}
/**
 * Method for create get post from DB 
 * @param {request}
 * @param {response}
 */
getPost = (req,res) =>{
    Post.find({}).sort({_id:-1})
    .then(data=>{
        res.send(edge.render('/posts',{posts:data})) 
    })
    .catch(error=>console.log("error iss occured",error))
}

/**
 * Method for handle 
 * @param {request}
 * @param {response}
 */
newpost = (req,res) =>{

    res.send(edge.render('/new-post'))
}



module.exports = {createPost,getPost,newpost}