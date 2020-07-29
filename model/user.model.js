const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name : String,
  age : String,
  avatar : String
});

const users = mongoose.model('users',userSchema,'users');

module.exports = users;