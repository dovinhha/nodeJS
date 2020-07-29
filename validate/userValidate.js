module.exports.postCreate = function(req,res,next){
  const errors=[];
  if(!req.body.name){
    errors.push('Name is err!');
  };
  if(!req.body.age){
    errors.push('Age is err!');
  };
  if(errors.length){
    res.render('users/create',{
      errors,
      values : req.body
    });
    return;
  }
  res.locals.success = true;
  next();
}