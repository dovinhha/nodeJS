// const acc = require('../login');
const md5 = require('md5');
const accounts = require('../model/accounts.model');

module.exports.login = function(req,res){
  res.render('authLogin/login');
}

module.exports.postLogin = async function(req,res){
  const gmail = req.body.gmail;
  const password = req.body.password;
  // const accounts = acc.get('accounts').find(function(acc){
  //   return acc.gmail===gmail;
  // }).value();
  const account = await accounts.findOne({gmail:gmail});
  if(!account){
    res.render('authLogin/login',{
      errors : ['Gmail is err'],
      values : req.body
    });
    return;
  }
  console.log(account.name);
  if(account.password!==md5(password)){
    res.render('authLogin/login',{
      errors : ['Password is err'],
      values : req.body
    });
    return;
  };
  res.cookie('accId',account._id,{
    signed:true
  });
  res.redirect('/');
};