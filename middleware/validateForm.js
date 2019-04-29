
validate =  (req,res,next) =>{
    let {files} = req;
    let {body}  = req;

    try{
      if(files === null || !files.avatar.name || !body.title || !body.author || !body.description || !body.body) {
        return res.redirect('/newpost')
      }
    } catch(e) {}
   
    next()
  }

module.exports =  validate