const {app,path}                     = require('./server')
const {createPost,getPost,newpost}   = require('./postController');
const bodyParser                     = require('body-parser'); 
const validate                       = require('./middleware/validateForm');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const fileUpload  = require('express-fileupload') 
app.use(fileUpload());

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))
})
app.get('/about',(req,res)=>{

    res.sendFile(path.resolve(__dirname,'./about.html'))
})

app.get('/newpost',newpost)
app.get('/posts',getPost)
app.use(validate);
app.post('/post/store',createPost)




