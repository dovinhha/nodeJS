// const accounts = require('../login');
const accounts = require('../model/accounts.model')

module.exports.authMiddleware = function(req,res,next){
  if(!req.signedCookies.accId){
    res.redirect('authLogin/login');
    return;
  }

  // const acc = accounts.get("accounts").find({id:req.signedCookies.accId}).value();
  const acc = accounts.findById(req.signedCookies.accId);

  if(!acc){
    res.redirect('authLogin/login');
    return;
  }
  res.locals.acc = acc;
  next();
}