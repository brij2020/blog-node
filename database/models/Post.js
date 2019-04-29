const mongoos = require('mongoose');
const Schema = mongoos.Schema;

const postSchema = new Schema({
    title:          String,
    author:         String,
    description:    String,
    body:           String,
    image:          String,
    date:           Date
})

const Post = mongoos.model('Post',postSchema);
module.exports = Post