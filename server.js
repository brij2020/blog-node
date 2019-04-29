const express       = require('express'); // express library
const path          = require('path');  // path module to handle path related work
const app           = express(); // creating express object
 

app.use(express.static('assets')); // tell express to fetch assets from 
app.listen(4000,()=>{
    console.log("srever  is start and listing on port 4000.....")
});

module.exports = {app,path} 