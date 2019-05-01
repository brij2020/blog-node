const {app,path}                     = require('./server')
const {createPost,getPost,
        newpost,editPost}            = require('./controller/postController');

const {registerUser,register}        = require('./controller/registerController')        
const bodyParser                     = require('body-parser'); 
const validate                       = require('./middleware/validateForm');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const fileUpload  = require('express-fileupload') 
app.use(fileUpload());


app.get('/newpost',newpost)
app.get('/posts',getPost)
app.get('/registerUser',register)
app.post('/newuser',registerUser)
// app.use(validate);
app.post('/post/store',createPost)





app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))
})



