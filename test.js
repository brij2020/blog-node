// const connection = require('./../../config/connection')

// connection.connect() 
// connection.query('select * from student',(err,rows,fields)=>{
//     if(err) {   

//             console.log("no information found ....")
//     } else {
       
//         console.log("data found",rows)
//     }
// })


// connection.end()

const Post = require('./database/models/Post');
const mongoos = require('mongoose');

let date = new Date();
mongoos.connect('mongodb://localhost:27017/test-node', { useNewUrlParser:true})

// Post.create({
//     title:  "Node Js Developer ",
//     author: "Brijbhan Chauhan",
//     body:   "Node",
//     modate:  date
// },(err,Post)=>{console.log("some how error is happen",Post)})
// Post.find({body:"Node"},(error , post)=>{
//     if(error) {
//         console.log("post error is happend !",error)
//         return
//     } 
//     console.log("retrieve values is ",post)
//     return
// })

// Post.findById('5cc5785c11c7f54396ed4a2c',
//     (error,data) =>{

//         console.log("data is found",data)
//     }

// )
Post.findByIdAndUpdate("5cc5785c11c7f54396ed4a2c",{
    title:  "Update Js Developer ",
    // author: "Brijbhan Chauhan",
    // body:   "Node",
    // modate:  date
},(error,data)=>{
    console.log("new updated data is ",data)
})