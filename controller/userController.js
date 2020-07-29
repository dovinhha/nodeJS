// const db = require('../db');
// const shortId = require('shortid');

const users = require('../model/user.model');

module.exports.index = function(req,res){
  res.render('users/index',{
    users: db.get('users').value()
  })
};

module.exports.search = async function(req,res){
  const q = req.query.q;
  const user = await users.find({name:q});
  res.render('users/index',{
    users : user
  });
};

module.exports.getCreate = function(req,res){
  res.render('users/create');
};

module.exports.postCreate = function(req,res){
  req.body.id = shortId.generate();
  req.body.avatar = req.file.path.split("\\").slice(1).join("/");
  db.get('users').push(req.body).write();
  res.redirect('/users/index');
};

module.exports.view = function(req,res){
  const id = req.params.id;
  const user = db.get('users').find({id:id}).value();
  res.render('users/view',{
    user
  });
}